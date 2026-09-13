

class MainContent extends Component {
  render() {
    const hero = new Hero().render();
    const cards = this.props.topics.map(t => new TopicCard({ topic: t }).render()).join('');
    const quickmap = new QuickMap().render();
    return `<main class="main-content">${hero}${cards}${quickmap}</main>`;
  }
  afterRender(el) {
    
    this.props.topics.forEach(t => {
      if (!t.code) return;
      new TopicCard({ topic: t }).afterRender(el);
    });
  }
}
