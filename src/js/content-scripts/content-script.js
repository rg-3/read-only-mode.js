const stylesheet = `
  div[data-testid="tweet"] div[role="group"] {
    right: 10px;
  }

  article div[role="group"] {
    width: 100%;
    margin: 0 auto;
    margin-top: 15px;
    justify-content: center;
  }

  [data-read-only-mode="1"] {
    display: none !important;
  }
`;

const tagElements = (els) => {
  for(let i = 0; i < els.length; i++) {
    const el = els[i];
    if(!el || el.getAttribute('data-read-only-mode') === '1') { continue; }
    el.setAttribute('data-read-only-mode', '1');
  }
};

chrome.runtime.sendMessage("IsEnabled", (isEnabled) => {
  if(!isEnabled) { return; }

  setInterval(() => {
    /* Remove the compose area */
    tagElements([document.querySelector('div[data-testid="primaryColumn"] div[role="progressbar"]')?.parentElement]);
    /* Remove the compose tweet button */
    tagElements(document.querySelectorAll('a:not([data-read-only-mode="1"])[href="/compose/tweet"]'));
    /* Remove reply icon */
    tagElements(document.querySelectorAll('div:not([data-read-only-mode="1"])[data-testid="reply"]'));
    /* Remove retweet icon */
    tagElements(document.querySelectorAll('div:not([data-read-only-mode="1"])[data-testid="retweet"]'));
  }, 250);

  const el = document.createElement('style');
  el.setAttribute('type', 'text/css')
  el.innerText = stylesheet;
  document.head.appendChild(el);
});
