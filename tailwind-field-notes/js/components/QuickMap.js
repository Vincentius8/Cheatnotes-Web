/* =========================================================
   COMPONENT: QuickMap (js/components/QuickMap.js)
   ========================================================= */
class QuickMap extends Component {
  render() {
    return `
      <div class="quickmap">
        <h3>Quick Map: Paano Magkakaugnay ang mga Phase</h3>
        <ul>
          <li><b>Utility-First Mindset</b> (Phase 1) → pundasyon ng lahat, kasama ang Flexbox/Grid sa <b>Layout Systems</b> (Phase 2)</li>
          <li><b>Responsive Prefixes</b> (Phase 2) → laging kasama sa Hover/Focus/Dark Mode modifiers sa <b>State & Interaction</b> (Phase 3) — pwedeng i-stack, hal. <code>md:hover:bg-blue-600</code></li>
          <li><b>Arbitrary Values</b> at <b>@apply</b> (Phase 4) → escape hatches lang kapag hindi kayang asikasuhin ng utilities — dapat bihira gamitin</li>
          <li><b>tailwind.config.js</b> (Phase 4) → basehan ng <b>Design Tokens</b> at pag-align sa Figma (Phase 5)</li>
          <li><b>JIT Compilation</b> (Phase 5) → dahilan kung bakit ligtas gumamit ng maraming utility classes nang hindi tumataba ang final CSS bundle</li>
        </ul>
      </div>
    `;
  }
}
