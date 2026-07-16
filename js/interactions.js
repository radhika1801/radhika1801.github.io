(function () {

  /* ── Line-by-line text reveal (any .line-reveal element) ─────────────────── */
  var STAGE_GAP       = 1100; /* pause between .reveal-stage groups, e.g. intro line vs. rest */
  var LINE_GAP        = 140;  /* stagger between wrapped visual lines within a stage */
  var WORD_TRANSITION = 700;  /* must match .reveal-word-inner transform transition duration */
  var FOLLOWUP_BUFFER = 250;  /* extra pause after the last word settles before follow-up content reveals */

  function wrapWord (node) {
    var outer = document.createElement('span');
    outer.className = 'reveal-word';
    var inner = document.createElement('span');
    inner.className = 'reveal-word-inner';
    inner.appendChild(node);
    outer.appendChild(inner);
    return outer;
  }

  function splitWords (container) {
    var frag = document.createDocumentFragment();
    Array.prototype.slice.call(container.childNodes).forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(/(\s+)/).forEach(function (part) {
          if (part === '') return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
          } else {
            frag.appendChild(wrapWord(document.createTextNode(part)));
          }
        });
      } else if (node.nodeName === 'BR') {
        frag.appendChild(node);
      } else {
        frag.appendChild(wrapWord(node));
      }
    });
    container.innerHTML = '';
    container.appendChild(frag);
  }

  function assignDelays (container, baseDelay) {
    var lineTops = [];
    var maxDelay = baseDelay;
    container.querySelectorAll('.reveal-word').forEach(function (w) {
      var top = w.offsetTop;
      var lineIndex = lineTops.indexOf(top);
      if (lineIndex === -1) {
        lineTops.push(top);
        lineIndex = lineTops.length - 1;
      }
      var delay = baseDelay + lineIndex * LINE_GAP;
      w.style.setProperty('--line-delay', delay + 'ms');
      if (delay > maxDelay) maxDelay = delay;
    });
    return maxDelay;
  }

  function revealLines (root) {
    var stages = root.querySelectorAll('.reveal-stage');
    var maxDelay = 0;
    if (stages.length) {
      stages.forEach(splitWords);
      stages.forEach(function (stageEl, i) {
        var d = assignDelays(stageEl, i * STAGE_GAP);
        if (d > maxDelay) maxDelay = d;
      });
    } else {
      splitWords(root);
      maxDelay = assignDelays(root, 0);
    }

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.add('is-revealed');
      });
    });

    // Reveal any designated follow-up content only after the text finishes animating in
    var followUp = root.parentElement.querySelector('.hero-followup');
    if (followUp) {
      setTimeout(function () {
        followUp.classList.add('is-revealed');
      }, maxDelay + WORD_TRANSITION + FOLLOWUP_BUFFER);
    }
  }

  document.querySelectorAll('.line-reveal').forEach(revealLines);

  /* ── Card tilt ───────────────────────────────────────────────────────────── */
  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      card.style.transition = 'opacity 0.6s ease, transform 0.1s ease';
    });

    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var x = ((e.clientX - r.left) / r.width  - 0.5) * 6;
      var y = ((e.clientY - r.top)  / r.height - 0.5) * 6;
      card.style.transform = 'perspective(900px) rotateY(' + x + 'deg) rotateX(' + (-y) + 'deg)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
      card.style.transform = '';
    });
  });

  /* ── Scroll reveal with stagger ─────────────────────────────────────────── */
  var cards = Array.from(document.querySelectorAll('.project-card'));
  if (!cards.length) return;

  if (!('IntersectionObserver' in window)) {
    cards.forEach(function (c) { c.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var idx = cards.indexOf(entry.target);
      var delay = (idx % 2) * 100; /* stagger pairs */
      setTimeout(function () {
        entry.target.classList.add('is-visible');
      }, delay);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  cards.forEach(function (c) { io.observe(c); });

})();
