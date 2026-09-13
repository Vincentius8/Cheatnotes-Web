/* =========================================================
   COMPONENT: MainContent (js/components/MainContent.js)
   Composes Hero + lahat ng TopicCard + QuickMap
   ========================================================= */

class MainContent extends Component {
  render() {
    const hero = new Hero().render();
    const cards = this.props.topics.map(t => new TopicCard({ topic: t }).render()).join('');
    const quickmap = new QuickMap().render();
    return `<main class="main-content">${hero}${cards}${quickmap}</main>`;
  }
  afterRender(el) {
    /* i-activate ang copy buttons at live demos ng bawat TopicCard */
    this.props.topics.forEach(t => {
      if (!t.code && !t.demo) return;
      new TopicCard({ topic: t }).afterRender(el);
    });
  }
}
