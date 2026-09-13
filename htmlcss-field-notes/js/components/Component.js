/* =========================================================
   BASE COMPONENT (js/components/Component.js)
   Bawat component ay may .render() na nagbabalik ng HTML string,
   at .mount(container) na naglalagay nito sa DOM at nagba-bind ng events.
   ========================================================= */

class Component {
  constructor(props = {}) {
    this.props = props;
  }
  render() {
    return '';
  }
  afterRender(el) {
    /* override kung may events na kailangang i-bind */
  }
  mount(container) {
    container.innerHTML = this.render();
    this.afterRender(container);
    return container;
  }
}
