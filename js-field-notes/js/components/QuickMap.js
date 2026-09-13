

class QuickMap extends Component {
  render() {
    return `
      <div class="quickmap">
        <h3>Quick Map: Topic Relationships</h3>
        <ul>
          <li><b>Closure</b> → ginagamit sa <b>HOF/Callbacks</b> at <b>Generators</b></li>
          <li><b>Promise</b> → pinasimple ng <b>Async/Await</b>, mismong basehan ng <b>Fetch/REST API</b></li>
          <li><b>Event Loop</b> → pinapatakbo ang <b>Timers</b>, <b>Promises</b>, at <b>Microtask/Macrotask</b> priority</li>
          <li><b>Iterator</b> → binuo ng <b>Generators</b>, ginagamit ng <b>Array/Set/Map</b> sa <code>for...of</code></li>
        </ul>
      </div>
    `;
  }
}
