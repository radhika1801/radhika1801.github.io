(function () {
  var layout  = document.getElementById('seriesLayout');
  var viewer  = document.getElementById('seriesViewer');
  var svImg   = document.getElementById('svImg');
  var svStrip = document.getElementById('svStrip');
  var svPrev  = document.getElementById('svPrev');
  var svNext  = document.getElementById('svNext');

  if (!layout || typeof PHOTO_COLLECTIONS === 'undefined') return;

  var currentSeries = null;
  var currentIdx    = 0;
  var seriesPhotos  = {};

  // Pre-build photo arrays per series (supports both files[] and count+prefix)
  Object.keys(PHOTO_COLLECTIONS).forEach(function (key) {
    var col    = PHOTO_COLLECTIONS[key];
    var photos = [];
    if (col.files) {
      col.files.forEach(function (f) { photos.push(col.path + f); });
    } else {
      for (var i = 1; i <= col.count; i++) {
        photos.push(col.path + col.prefix + i + '.jpg');
      }
    }
    seriesPhotos[key] = photos;
  });

  // Build scattered series cards
  Object.keys(PHOTO_COLLECTIONS).forEach(function (key) {
    var col    = PHOTO_COLLECTIONS[key];
    var photos = seriesPhotos[key];

    var item  = document.createElement('div');
    item.className = 'series-item';
    item.dataset.series = key;

    var thumb = document.createElement('div');
    thumb.className = 'series-thumb';

    var img = document.createElement('img');
    img.src     = photos[0];
    img.alt     = col.label;
    img.loading = 'lazy';

    var info = document.createElement('div');
    info.className = 'series-info';
    var count = col.files ? col.files.length : col.count;
    info.innerHTML =
      '<span class="series-name">' + col.label.toUpperCase() + '</span>' +
      '<span class="series-count">[' + count + ']</span>';

    thumb.appendChild(img);
    item.appendChild(thumb);
    item.appendChild(info);
    layout.appendChild(item);

    item.addEventListener('click', function () { openViewer(key, 0); });
  });

  // ── Viewer ────────────────────────────────────────────────────────────────
  function openViewer(key, idx) {
    currentSeries = key;

    // Build filmstrip
    svStrip.innerHTML = '';
    seriesPhotos[key].forEach(function (src, i) {
      var t    = document.createElement('div');
      t.className      = 'sv-thumb';
      t.dataset.index  = i;
      var tImg         = document.createElement('img');
      tImg.src         = src;
      tImg.loading     = 'lazy';
      t.appendChild(tImg);
      t.addEventListener('click', function (e) {
        e.stopPropagation();
        showSlide(i);
      });
      svStrip.appendChild(t);
    });

    showSlide(idx);
    viewer.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Push a history entry so the browser back button closes the viewer
    history.pushState({ viewer: key }, '');
  }

  function showSlide(idx) {
    var photos = seriesPhotos[currentSeries];
    currentIdx = (idx + photos.length) % photos.length;
    svImg.src  = photos[currentIdx];

    // Sync strip
    svStrip.querySelectorAll('.sv-thumb').forEach(function (t, i) {
      t.classList.toggle('active', i === currentIdx);
    });

    // Scroll active thumb into view
    var active = svStrip.querySelector('.sv-thumb.active');
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  function closeViewer() {
    viewer.classList.remove('open');
    document.body.style.overflow = '';
    svImg.src         = '';
    svStrip.innerHTML = '';
  }

  // Browser back button — close viewer instead of leaving the page
  window.addEventListener('popstate', function () {
    if (viewer.classList.contains('open')) closeViewer();
  });

  svPrev.addEventListener('click',  function () { showSlide(currentIdx - 1); });
  svNext.addEventListener('click',  function () { showSlide(currentIdx + 1); });

  document.addEventListener('keydown', function (e) {
    if (!viewer.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  showSlide(currentIdx - 1);
    if (e.key === 'ArrowRight') showSlide(currentIdx + 1);
  });

})();
