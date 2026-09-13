/* =========================================================
   COMPONENT: QuickMap (js/components/QuickMap.js)
   ========================================================= */
class QuickMap extends Component {
  render() {
    return `
      <div class="quickmap">
        <h3>Quick Map: Paano Magkakaugnay ang HTML at CSS</h3>
        <ul>
          <li><b>HTML Structure</b> ang binibigyan ng estilo ng <b>CSS Box Model</b> — walang laman ang CSS kung walang HTML elements na susulatan</li>
          <li><b>Display Property</b> ang nagtatakda kung paano gagana ang <b>Flexbox/Grid</b> sa isang element — dapat una munang maintindihan ang display bago ang layout systems</li>
          <li><b>Position Property</b> at <b>Transform</b> ay pareho ring nakakaapekto sa visual placement, pero magkaiba ang mekanismo — position ay bahagi ng layout flow, transform ay hindi</li>
          <li><b>Transition</b> ang gumagawa ng smooth ang anumang pagbabago mula sa <b>Transform</b>, <b>Color</b>, o <b>Box Shadow</b> — laging magkasama sa totoong UI work</li>
        </ul>
      </div>
    `;
  }
}
