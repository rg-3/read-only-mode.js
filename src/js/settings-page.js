const disable = (app, btn) => {
  btn.classList.remove('btn-error');
  btn.classList.add('btn-success');
  btn.innerText = 'Enable';
  btn.onclick = () => enable(app, btn);
  app.enabled = false;
}

const enable = (app, btn) => {
  btn.classList.remove('btn-success');
  btn.classList.add('btn-error');
  btn.innerText = 'Disable';
  btn.onclick = () => disable(app, btn);
  app.enabled = true;
};

chrome.runtime.getBackgroundPage(function(page) {
  const app = page.app;
  const btn = document.querySelector('.btn');
  app.enabled ? enable(app, btn) : disable(app, btn);
});