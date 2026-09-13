class NavList extends Component {
  render() {
    const groups = PHASES.map(phase => {
      const topicsInPhase = this.props.topics.filter(t => t.phase === phase.id);
      const links = topicsInPhase.map(t => new NavLink({ topic: t }).render()).join('');
      return `
        <div class="phase-label">${phase.label}</div>
        ${links}
      `;
    }).join('');

    return `
      <div data-role="nav-list">${groups}</div>
      <div class="no-results" data-role="no-results">Walang tugmang topic.</div>
    `;
  }
  filter(query) {
    const q = query.toLowerCase().trim();
    const links = document.querySelectorAll('.nav-link');
    let visibleCount = 0;
    links.forEach(link => {
      const match = link.dataset.search.includes(q);
      link.classList.toggle('hidden', !match);
      if (match) visibleCount++;
    });

    document.querySelectorAll('.phase-label').forEach(label => {
      let sibling = label.nextElementSibling;
      let hasVisible = false;
      while (sibling && sibling.classList.contains('nav-link')) {
        if (!sibling.classList.contains('hidden')) hasVisible = true;
        sibling = sibling.nextElementSibling;
      }
      label.style.display = hasVisible ? 'flex' : 'none';
    });

    const noResults = document.querySelector('[data-role="no-results"]');
    if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }
  setActive(id) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.id === id);
    });
  }
}
