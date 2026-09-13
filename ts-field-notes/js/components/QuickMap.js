class QuickMap extends Component {
  render() {
    return `
      <div class="quickmap">
        <h3>Quick Map: Paano Magkakaugnay ang mga Phase</h3>
        <ul>
          <li><b>Interfaces/Types</b> (Phase 1) → pundasyon ng <b>Object Typing</b> at <b>OOP</b> (Phase 3)</li>
          <li><b>Generics</b> (Phase 4) → ginagamit sa <b>Utility Types</b>, at core sa pag-type ng <b>API responses</b> (Phase 5)</li>
          <li><b>keyof/typeof</b> → basehan ng <b>Mapped Types</b>, parehong Phase 4 — kailangan bago maintindihan kung paano gumagana ang Partial/Pick/Omit sa ilalim</li>
          <li><b>Type Guards</b> (Phase 4) → laging kasama kapag nag-a-any/unknown handling sa <b>API responses</b> at <b>third-party libraries</b> (Phase 5)</li>
          <li><b>Access Modifiers</b> + <b>Abstract Classes</b> (Phase 3) → parehong core sa pag-architect ng malalaking OOP-based na TS systems</li>
        </ul>
      </div>
    `;
  }
}
