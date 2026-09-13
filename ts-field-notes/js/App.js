class App {
  constructor(rootEl, topics) {
    this.rootEl = rootEl;
    this.topics = topics;
    this.layout = new AppLayout();
    this.sidebar = new Sidebar({ topics });
    this.main = new MainContent({ topics });
  }

  mount() {
    this.layout.mount(this.rootEl, {
      sidebarComponent: this.sidebar,
      mainComponent: this.main,
    });
    this.initScrollSpy();
  }

  initScrollSpy() {
    const sections = this.topics
      .map(t => document.getElementById(t.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.sidebar.navList.setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );

    sections.forEach(section => observer.observe(section));
  }
}
