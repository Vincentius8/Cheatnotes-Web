

class SearchBar extends Component {
  render() {
    return `
      <div class="search-wrap">
        <input class="search-input" type="text" placeholder="Maghanap ng topic..." data-role="search-input">
      </div>
    `;
  }
  afterRender(el) {
    const input = el.querySelector('[data-role="search-input"]');
    if (!input) return;
    input.addEventListener('input', () => {
      this.props.onQueryChange(input.value);
    });
  }
}
