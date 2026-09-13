class CodeBlock extends Component {
  render() {
    return `
      <pre><code>${this.props.html}</code></pre>
      <button class="copy-btn" data-role="copy-btn">⧉ copy</button>
    `;
  }
  afterRender(el) {
    const btn = el.querySelector('[data-role="copy-btn"]');
    const pre = el.querySelector('pre');
    if (!btn || !pre) return;
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.innerText);
      const original = btn.innerHTML;
      btn.innerHTML = '✓ copied';
      setTimeout(() => (btn.innerHTML = original), 1200);
    });
  }
}
