/* =========================================================
   COMPONENT: Sidebar (js/components/Sidebar.js)
   Composes brand + SearchBar + NavList
   ========================================================= */

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.navList = new NavList({ topics: props.topics });
    this.searchBar = new SearchBar({ onQueryChange: q => this.navList.filter(q) });
  }
  render() {
    return `
      <nav class="sidebar">
        <div class="sidebar-head">
          <a class="hub-back-link" href="../index.html">&larr; Cheat Notes Hub</a>
          <button class="sidebar-toggle sidebar-toggle--close" type="button" data-role="sidebar-close" aria-label="Isara ang sidebar">
            <span class="sidebar-toggle-icon sidebar-toggle-icon--x"></span>
          </button>
        </div>
        <div class="brand-sub">JS Notes</div>
        <div data-slot="search"></div>
        <div data-slot="navlist"></div>
      </nav>
    `;
  }
  afterRender(el) {
    const nav = el.querySelector('.sidebar');
    this.searchBar.mount(nav.querySelector('[data-slot="search"]'));
    this.navList.mount(nav.querySelector('[data-slot="navlist"]'));
  }
}
