

class NavList extends Component {
  render() {
    const links = this.props.topics.map(t => new NavLink({ topic: t }).render()).join('');
    return `
      <div data-role="nav-list">${links}</div>
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
    const noResults = document.querySelector('[data-role="no-results"]');
    if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }
  setActive(id) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.id === id);
    });
  }
}
