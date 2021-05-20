import includeHTML from './vendor/include-html.js';

const initCheckbox = function (app, index) {
  const feature = app.settings.keys[index];
  const input = document.getElementById(feature);
  if (!input) { return; }
  input.addEventListener('change', (e) => e.target.checked ? app.settings.disable(feature) : app.settings.enable(feature));
  input.checked = app.settings.isDisabled(feature);
};

const init = function () {
  includeHTML().then(() => {
    chrome.runtime.getBackgroundPage(function (page) {
      const app = page.app;
      for (let i = 0; i < app.settings.keys.length; i++) { initCheckbox(app, i); }
    });
  });
};

document.addEventListener('DOMContentLoaded', init);
