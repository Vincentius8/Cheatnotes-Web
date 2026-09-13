class Component {
  constructor(props = {}) {
    this.props = props;
  }
  render() {
    return '';
  }
  afterRender(el) {
  }
  mount(container) {
    container.innerHTML = this.render();
    this.afterRender(container);
    return container;
  }
}
