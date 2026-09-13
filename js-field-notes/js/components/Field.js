

class Field extends Component {
  render() {
    const { label, html, variant } = this.props;
    return `
      <div class="field${variant === 'why' ? ' why' : ''}">
        <div class="field-label">${label}</div>
        <div class="field-body">${html}</div>
      </div>
    `;
  }
}
