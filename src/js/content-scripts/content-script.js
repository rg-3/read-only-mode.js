const setDisplayNone = (els) => {
  for(let i = 0; i < els.length; i++) {
    const el = els[i];
    if(!el || el.getAttribute('data-read-only-mode') === '1') { continue; }
    el.setAttribute('data-read-only-mode', '1');
    el.style.display = 'none';
  }
};

chrome.runtime.sendMessage("IsEnabled", (isEnabled) => {
  if(!isEnabled) { return; }
  setInterval(() => {
    /* Remove the compose area */
    setDisplayNone([document.querySelector('div[data-testid="primaryColumn"] div[role="progressbar"]')?.parentElement]);
    /* Remove the compose tweet button */
    setDisplayNone(document.querySelectorAll('a:not([data-read-only-mode="1"])[href="/compose/tweet"]'));
    /* Remove reply icon */
    setDisplayNone(document.querySelectorAll('div:not([data-read-only-mode="1"])[data-testid="reply"]'));
  }, 250);
});