class DataTable extends Component {
  render() {
    const table = this.props.table;
    if (!table) return '';
    const head = table.head.map(h => `<th>${h}</th>`).join('');
    const rows = table.rows
      .map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`)
      .join('');
    return `<div class="table-scroll"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }
}
