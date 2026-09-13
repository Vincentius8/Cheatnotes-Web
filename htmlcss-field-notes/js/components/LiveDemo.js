/* =========================================================
   COMPONENT: LiveDemo (js/components/LiveDemo.js)
   Generic interactive playground — renders controls (range/
   select/color) na naka-bind sa isang preview box. Bawat CSS
   topic ay nagbibigay lang ng config (controls + onUpdate
   function); ang component mismo ang humahawak sa rendering
   at sa pag-bind ng events.
   ========================================================= */
class LiveDemo extends Component {
  render() {
    const demo = this.props.demo;
    const uid = this.props.uid;
    const controlsHtml = demo.controls.map(c => this.renderControl(c, uid)).join('');

    let boxInner = '';
    if (demo.childrenCount && demo.childrenCount > 0) {
      for (let i = 1; i <= demo.childrenCount; i++) {
        boxInner += `<div class="demo-child demo-child-${i}">${i}</div>`;
      }
    } else {
      boxInner = `<span data-role="demo-text">${demo.previewText || 'Preview'}</span>`;
    }

    return `
      <div class="demo">
        <div class="demo-controls">${controlsHtml}</div>
        <div class="demo-preview-wrap">
          <div class="demo-box" id="demo-box-${uid}" data-role="demo-box">${boxInner}</div>
        </div>
      </div>
    `;
  }

  renderControl(c, uid) {
    const id = `demo-${uid}-${c.key}`;
    if (c.type === 'range') {
      return `
        <label class="demo-control" for="${id}">
          <span class="demo-control-label">${c.label}
            <span class="demo-control-value" data-value-for="${uid}-${c.key}">${c.default}${c.unit || ''}</span>
          </span>
          <input type="range" id="${id}" data-key="${c.key}" data-type="range" data-unit="${c.unit || ''}"
                 min="${c.min}" max="${c.max}" step="${c.step || 1}" value="${c.default}">
        </label>
      `;
    }
    if (c.type === 'select') {
      const options = c.options
        .map(o => `<option value="${o}"${o === c.default ? ' selected' : ''}>${o}</option>`)
        .join('');
      return `
        <label class="demo-control" for="${id}">
          <span class="demo-control-label">${c.label}</span>
          <select id="${id}" data-key="${c.key}" data-type="select">${options}</select>
        </label>
      `;
    }
    if (c.type === 'color') {
      return `
        <label class="demo-control" for="${id}">
          <span class="demo-control-label">${c.label}</span>
          <input type="color" id="${id}" data-key="${c.key}" data-type="color" value="${c.default}">
        </label>
      `;
    }
    return '';
  }

  afterRender(el) {
    const demo = this.props.demo;
    const uid = this.props.uid;
    const box = el.querySelector(`#demo-box-${uid}`);
    if (!box) return;

    const values = {};
    demo.controls.forEach(c => (values[c.key] = c.default));

    const update = () => demo.onUpdate(values, box);

    // Ginagamit ito kapag binago ang isang value sa PARAAN na hindi direktang
    // pag-type/click sa control mismo (hal. drag sa preview box) — kailangan
    // pa ring i-sync ang slider thumb at ang display number nito.
    const syncControlUI = (key) => {
      const c = demo.controls.find(ctrl => ctrl.key === key);
      const input = el.querySelector(`#demo-${uid}-${key}`);
      if (!c || !input) return;
      input.value = values[key];
      const label = el.querySelector(`[data-value-for="${uid}-${key}"]`);
      if (label) label.textContent = `${values[key]}${c.unit || ''}`;
    };

    demo.controls.forEach(c => {
      const input = el.querySelector(`#demo-${uid}-${c.key}`);
      if (!input) return;
      const eventName = c.type === 'select' ? 'change' : 'input';
      input.addEventListener(eventName, () => {
        values[c.key] = c.type === 'range' ? parseFloat(input.value) : input.value;
        if (c.type === 'range') {
          const label = el.querySelector(`[data-value-for="${uid}-${c.key}"]`);
          if (label) label.textContent = `${input.value}${c.unit || ''}`;
        }
        update();
      });
    });

    // --- HOVER TO TRIGGER ---------------------------------------------
    // Para sa mga topic (hal. transition) kung saan mas malapit sa totoong
    // ginagamit (:hover sa CSS) kaysa pumili sa isang dropdown. Itakda ang
    // `demo.hoverKey` sa config; ang key na iyon ang magiging true/false
    // sa `values` habang naka-hover sa preview box.
    if (demo.hoverKey) {
      box.classList.add('demo-box--hoverable');
      box.addEventListener('mouseenter', () => { values[demo.hoverKey] = true; update(); });
      box.addEventListener('mouseleave', () => { values[demo.hoverKey] = false; update(); });
    }

    // --- DRAG TO REPOSITION ---------------------------------------------
    // Para sa mga topic (hal. position) na may 'top' at 'left' range control —
    // sa halip na dalawang magkahiwalay na slider, hilahin/drag mismo ang
    // box sa loob ng preview area. Itakda ang `demo.draggable: true`.
    const topCtrl = demo.controls.find(c => c.key === 'top');
    const leftCtrl = demo.controls.find(c => c.key === 'left');
    if (demo.draggable && topCtrl && leftCtrl) {
      box.classList.add('demo-box--draggable');
      let dragging = false;
      let startX = 0, startY = 0, startTop = 0, startLeft = 0;

      const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

      const onPointerDown = (e) => {
        // Walang epekto ang top/left kapag 'static' — huwag payagang i-drag.
        if (values.position === 'static') return;
        dragging = true;
        const point = e.touches ? e.touches[0] : e;
        startX = point.clientX;
        startY = point.clientY;
        startTop = values.top;
        startLeft = values.left;
        e.preventDefault();
      };
      const onPointerMove = (e) => {
        if (!dragging) return;
        const point = e.touches ? e.touches[0] : e;
        const dx = point.clientX - startX;
        const dy = point.clientY - startY;
        values.left = clamp(startLeft + dx, leftCtrl.min, leftCtrl.max);
        values.top = clamp(startTop + dy, topCtrl.min, topCtrl.max);
        syncControlUI('top');
        syncControlUI('left');
        update();
      };
      const onPointerUp = () => { dragging = false; };

      box.addEventListener('mousedown', onPointerDown);
      box.addEventListener('touchstart', onPointerDown, { passive: false });
      document.addEventListener('mousemove', onPointerMove);
      document.addEventListener('touchmove', onPointerMove, { passive: false });
      document.addEventListener('mouseup', onPointerUp);
      document.addEventListener('touchend', onPointerUp);
    }

    update();
  }
}
