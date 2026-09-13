/* =========================================================
   COMPONENT: TopicCard (js/components/TopicCard.js)
   Composes Field + DataTable + CodeBlock para sa isang topic
   ========================================================= */

class TopicCard extends Component {
  render() {
    const t = this.props.topic;
    const num = String(t.n).padStart(2, '0');

    const saan = new Field({ label: 'Saan Ginagamit', html: t.saan }).render();
    const kailan = new Field({ label: 'Kailan Ginagamit', html: t.kailan }).render();
    const bakit = new Field({ label: 'Bakit Ito Umiiral', html: t.bakit, variant: 'why' }).render();
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
        ${table}
        ${code}
        ${note}
      </section>
    `;
  }
  afterRender(el) {
    /* i-activate ang copy button ng CodeBlock sa loob ng card na ito */
    if (!this.props.topic.code) return;
    const scope = el.querySelector(`#${CSS.escape(this.props.topic.id)}`);
    if (!scope) return;
    new CodeBlock({ html: this.props.topic.code }).afterRender(scope);
  }
}
