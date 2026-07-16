/* =============================================================================
   home.js — Project grid rendering and tag filtering (index.html)

   Reads the PROJECTS array from data.js and renders cards into #projectGrid.
   Clicking a filter tag hides/shows cards by their tag array.
   ============================================================================= */

(function () {
  var grid = document.getElementById('projectGrid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map(function (p) {
    return [
      '<a class="project-card" href="project.html?id=' + p.id + '">',
      '  <div class="project-card-image">',
      '    <img src="' + p.coverImage + '" alt="' + p.title + '" loading="lazy" />',
      '  </div>',
      '  <div class="project-card-info">',
      '    <div class="project-card-title">' + p.title + '</div>',
      '  </div>',
      '</a>'
    ].join('\n');
  }).join('\n');
})();