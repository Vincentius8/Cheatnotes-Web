/* =========================================================
   COMPONENT: NavLink (js/components/NavLink.js)
   ========================================================= */
class NavLink extends Component {
  render() {
    const t = this.props.topic;
    const num = String(t.n).padStart(2, '0');
    const searchBlob = `${t.title} ${t.saan} ${t.kailan} ${t.bakit}`.toLowerCase();
    return `
      <a href="#${t.id}" class="nav-link" data-id="${t.id}" data-phase="${t.phase}" data-search="${searchBlob.replace(/"/g, '&quot;')}">
        <span class="num">${num}</span>
        <span>${t.title}</span>
      </a>
    `;
  }
}
