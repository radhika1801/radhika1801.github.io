/* =============================================================================
   project.js — Project detail page renderer (project.html)

   Reads the ?id= URL param, finds the matching entry in PROJECTS (data.js),
   and renders the sidebar and images panel.
   ============================================================================= */

(function () {
  var sidebar      = document.getElementById('projectSidebar');
  var imagesPanel  = document.getElementById('projectImages');

  if (!sidebar || typeof PROJECTS === 'undefined') return;

  // ── Helpers ───────────────────────────────────────────────────────────────
  function getParam (name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function escHtml (str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ── Load ──────────────────────────────────────────────────────────────────
  var id      = getParam('id');
  var idx     = PROJECTS.findIndex(function (p) { return p.id === id; });

  if (idx === -1) {
    sidebar.innerHTML = '<p style="color:var(--muted);font-size:12px;">Project not found.</p>';
    return;
  }

  var p    = PROJECTS[idx];

  // Update page title
  document.title = p.title + ' - Radhika Malpani';

  // ── Sidebar ───────────────────────────────────────────────────────────────
  var metaRows = [
    ['Year',  p.year  || '-'],
    ['Tools', p.tools || '-']
  ].map(function (row) {
    return '<div class="meta-row"><span class="meta-label">' + row[0] + '</span>' +
           '<span class="meta-value">' + escHtml(row[1]) + '</span></div>';
  }).join('');

  var tagPills = (p.tags || []).map(function (t) {
    return '<span class="tag-pill">' + t + '</span>';
  }).join('');

  var descHtml = (p.description || []).map(function (para) {
    return '<p>' + escHtml(para) + '</p>';
  }).join('');

  var linksHtml = '';
  if (p.links && p.links.length) {
    linksHtml = '<div class="project-ext-links">' +
      p.links.map(function (l) {
        return '<a class="project-ext-link" href="' + l.url + '" target="_blank" rel="noopener">' + escHtml(l.text) + '</a>';
      }).join('') +
      '</div>';
  }

  sidebar.innerHTML = [
    '<h1>' + escHtml(p.title) + '</h1>',
    '<div class="project-meta">' + metaRows + '</div>',
    '<div class="project-tags">' + tagPills + '</div>',
    '<div class="project-description">' + descHtml + '</div>',
    linksHtml
  ].join('\n');

  // ── Images ────────────────────────────────────────────────────────────────
  var imgs = p.images && p.images.length ? p.images : [{ src: p.coverImage, caption: '' }];

  imagesPanel.innerHTML = imgs.map(function (img) {
    var cap = img.caption
      ? '<div class="project-img-caption">' + escHtml(img.caption) + '</div>'
      : '';
    return '<div class="project-img-wrap"><img src="' + img.src + '" alt="' + escHtml(p.title) + '" loading="lazy" /></div>' + cap;
  }).join('\n');


})();
