import toggle from './toggle.js';

const ignoredPaths = [
  /\/followers$/,
  /\/following$/,
  /\/likes$/,
  /\/retweets$/,
  /\/timeline$/,
  /^\/settings\//,
];

const headerText = [
  'Who to follow'
];

const toggleHeader = (disabled) => {
  const spans = document.querySelectorAll('span');
  for(let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if(headerText.includes(span.textContent)) {
      let target = span;
      let targetDepth = 5;
      for(let i = 0; i < targetDepth; i++) {
        toggle([target], disabled.includes('whoToFollow'), 'display-none')
        target = target.parentElement;
      }
    }
  }
};

export default function(disabled) {
  toggleHeader(disabled);
  if(!ignoredPaths.filter((path) => path.test(document.location.pathname)).length) {
    toggle(
      document.querySelectorAll('div[data-testid=UserCell]'),
      disabled.includes('whoToFollow'),
      'display-none'
    );
  }
  toggle(
    [document.querySelector('aside[aria-label="Who to follow"]')?.parentElement],
    disabled.includes('whoToFollow'),
    'display-none'
  );
  toggle(
    document.querySelectorAll('div[data-testid=primaryColumn] a[href^="/i/connect"]'),
    disabled.includes('whoToFollow'),
    'display-none'
  );
}