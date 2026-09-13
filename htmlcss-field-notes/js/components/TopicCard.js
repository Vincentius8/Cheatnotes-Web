/* =========================================================
   COMPONENT: TopicCard (js/components/TopicCard.js)
   Composes Field + Diagram + Showcase + LiveDemo + DataTable +
   CodeBlock para sa isang topic. Ang Diagram/Showcase/LiveDemo
   ay lumalabas lang kapag may kaukulang config sa topic data.
   ========================================================= */
class TopicCard extends Component {
  render() {
    const t = this.props.topic;
    const num = String(t.n).padStart(2, '0');

    const saan = new Field({ label: 'Saan Ginagamit', html: t.saan }).render();
    const kailan = new Field({ label: 'Kailan Ginagamit', html: t.kailan }).render();
    const bakit = new Field({ label: 'Bakit Ito Umiiral', html: t.bakit, variant: 'why' }).render();

    const diagram = t.diagram
      ? `<div class="diagram-heading">Visual na Layout</div><div class="diagram-wrap">${t.diagram}</div>`
      : '';

    const showcase = t.showcase
      ? `<div class="showcase-heading">Live na Halimbawa — Totoong Elements, Hindi Larawan</div><div class="showcase-box">${t.showcase}</div>`
      : '';

    const demo = t.demo
      ? `<div class="demo-heading">Subukan Mo — I-adjust at Tingnan ang Epekto</div>${new LiveDemo({ demo: t.demo, uid: t.id }).render()}`
      : '';

    const table = new DataTable({ table: t.table }).render();
    const code = t.code ? new CodeBlock({ html: t.code }).render() : '';
    const note = t.note ? `<div class="field"><div class="field-body">${t.note}</div></div>` : '';

    return `
      <section class="topic" id="${t.id}">
        <div class="topic-head">
          <span class="topic-num">${num}</span>
          <h2>${t.title}</h2>
        </div>
        <div class="topic-divider"></div>
        ${saan}
        ${kailan}
        ${bakit}
        ${diagram}
        ${showcase}
        ${demo}
        ${table}
        ${code}
        ${note}
      </section>
    `;
  }
  afterRender(el) {
    const scope = el.querySelector(`#${CSS.escape(this.props.topic.id)}`);
    if (!scope) return;
    if (this.props.topic.demo) {
      new LiveDemo({ demo: this.props.topic.demo, uid: this.props.topic.id }).afterRender(scope);
    }
    if (this.props.topic.code) {
      new CodeBlock({ html: this.props.topic.code }).afterRender(scope);
    }
  }
}
