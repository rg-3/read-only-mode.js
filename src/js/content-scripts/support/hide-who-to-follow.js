import toggleHide from '../support/toggle-hide.js';

const ignoredPaths = [
  '/followers', '/following', '/likes', '/retweets', '/timeline'
];

const headerText = [
  'Who to follow'
];

const removeHeader = (disabled) => {
  const spans = document.querySelectorAll('span');
  for(let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if(headerText.includes(span.textContent)) {
      let target = span;
      let targetDepth = 5;
      for(let i = 0; i < targetDepth; i++) {
        toggleHide([target], {when: disabled.includes('whoToFollow'), tag: 'display-none'})
        target = target.parentElement;
      }
    }
  }
};

export default function(disabled) {
  removeHeader(disabled);
  /* Skip other contexts where we don't want to remove UserCell nodes */
  if(!ignoredPaths.filter((path) => document.location.href.endsWith(path)).length) {
    toggleHide('div[data-testid=UserCell]', {when: disabled.includes('whoToFollow'), tag: 'display-none'});
  }
  toggleHide([document.querySelector('aside[aria-label="Who to follow"]')?.parentElement], {when: disabled.includes('whoToFollow'), tag: 'display-none'});
  toggleHide('div[data-testid=primaryColumn] a[href^="/i/connect"]', {when: disabled.includes('whoToFollow'), tag: 'display-none'});
}