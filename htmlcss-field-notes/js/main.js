/* =========================================================
   ENTRY POINT (js/main.js)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const app = new App(document.getElementById('app'), TOPICS);
  app.mount();
});
