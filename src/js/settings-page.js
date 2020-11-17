const hide = (el) => el.style.display = 'none';
const show = (el) => el.style.display = 'inline';

const disable = (app, btn) => {
  btn.classList.remove('btn-error');
  btn.classList.add('btn-success');
  btn.innerText = 'Enable';
  btn.onclick = () => enable(app, btn);
  app.enabled = false;
  hide(document.getElementById('enabled'));
  show(document.getElementById('disabled'));
}

const enable = (app, btn) => {
  btn.classList.remove('btn-success');
  btn.classList.add('btn-error');
  btn.innerText = 'Disable';
  btn.onclick = () => disable(app, btn);
  app.enabled = true;
  hide(document.getElementById('disabled'));
  show(document.getElementById('enabled'));
};

chrome.runtime.getBackgroundPage(function(page) {
  const app = page.app;
  const btn = document.querySelector('.btn');
  app.enabled ? enable(app, btn) : disable(app, btn);
});