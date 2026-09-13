/* =========================================================
   LAYOUT: AppLayout (js/layouts/AppLayout.js)
   Pure layout lang — plus ang open/close na sidebar toggle,
   na gumagana kapareho sa desktop (bumabawi ng espasyo) at
   sa mobile (nagiging slide-in drawer na may backdrop).
   ========================================================= */

class AppLayout extends Component {
  render() {
    return `
      <button class="sidebar-toggle" type="button" data-role="sidebar-open-btn" aria-label="Buksan ang sidebar">
        <span class="sidebar-toggle-icon"></span>
      </button>
      <div class="sidebar-backdrop" data-role="sidebar-backdrop"></div>
      <div data-slot="sidebar"></div>
      <div data-slot="main"></div>
    `;
  }

  mount(container, { sidebarComponent, mainComponent }) {
    container.innerHTML = this.render();
    sidebarComponent.mount(container.querySelector('[data-slot="sidebar"]'));
    mainComponent.mount(container.querySelector('[data-slot="main"]'));
    this.initSidebarToggle(container);
  }

  initSidebarToggle(container) {
    const STORAGE_KEY = 'cheatnotes:sidebar-open';
    const openBtn = container.querySelector('[data-role="sidebar-open-btn"]');
    const closeBtn = container.querySelector('[data-role="sidebar-close"]');
    const backdrop = container.querySelector('[data-role="sidebar-backdrop"]');
    const mobileQuery = window.matchMedia('(max-width:900px)');

    /* Ilagay lang ang classes — hindi pa sinasave sa localStorage.
       Ito ang gamit ng unang pag-set ng state paglo-load ng page. */
    const applyState = (open) => {
      container.classList.toggle('sidebar-open', open);
      container.classList.toggle('sidebar-closed', !open);
      /* i-lock ang background scroll pag naka-overlay ang sidebar sa mobile */
      document.body.style.overflow = open && mobileQuery.matches ? 'hidden' : '';
    };

    /* Ito naman ang tinatawag kapag GALING sa user interaction —
       dito lang dapat sina-save ang preference sa localStorage. */
    const persistAndApply = (open) => {
      applyState(open);
      try { localStorage.setItem(STORAGE_KEY, open ? '1' : '0'); } catch (e) {}
    };

    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    /* Default: bukas sa desktop, sarado sa mobile — maliban kung may
       na-save nang preference ang user dati (galing sa pag-toggle niya). */
    applyState(saved !== null ? saved === '1' : !mobileQuery.matches);

    openBtn.addEventListener('click', () => persistAndApply(true));
    if (closeBtn) closeBtn.addEventListener('click', () => persistAndApply(false));
    if (backdrop) backdrop.addEventListener('click', () => persistAndApply(false));

    /* I-auto-close ang sidebar (drawer) pagkatapos pumili ng topic —
       pero sa MOBILE lang, dahil sa desktop, permanenteng bukas ito
       habang nagba-browse (hindi ito dapat isara sa bawat click). */
    container.querySelectorAll('[data-slot="sidebar"] .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (mobileQuery.matches) applyState(false);
      });
    });

    /* Kapag nagpalit ng breakpoint (hal. inikot ang tablet) at wala
       pang explicit na pinili ang user, i-adjust sa bagong default. */
    mobileQuery.addEventListener('change', (e) => {
      let stillSaved = null;
      try { stillSaved = localStorage.getItem(STORAGE_KEY); } catch (err) {}
      if (stillSaved === null) applyState(!e.matches);
    });
  }
}
