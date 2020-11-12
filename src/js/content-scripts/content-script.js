const hide = (els) => {
  for(let i = 0; i < els.length; i++) {
    const el = els[i];
    el.setAttribute('data-read-mode-hidden', '1')
    el.style.display = 'none';
  }
};

const removeComposeArea = () => {
  let el;
  el = document.querySelector('div[data-testid="primaryColumn"] div[role="progressbar"]');
  if(el) { el.parentElement.style.display = 'none'; }
  el = document.querySelector('div[data-testid="primaryColumn"] .css-1dbjc4n div[class="css-1dbjc4n r-e84r5y r-1or9b2r"]');
  if(el) { el.style.display = 'none'; }
};

chrome.runtime.sendMessage("IsEnabled", (isEnabled) => {
  if(!isEnabled) { return; }
  setInterval(() => {
    removeComposeArea();
    hide(document.querySelectorAll('a:not([data-read-mode-hidden="1"])[href="/compose/tweet"]'));
    hide(document.querySelectorAll('div:not([data-read-mode-hidden="1"])[data-testid="reply"]'));
  }, 250);
});