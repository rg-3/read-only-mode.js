import toggleHide from '../support/toggle-hide.js';

export default function(disabled) {
  let spans = Array.from(document.querySelectorAll('span'));
  spans
    .filter((el) => ['Who to follow'].includes(el.textContent))
    .forEach((el) => {
      let target = el;
      let targetDepth = 5;
      for(let i = 0; i < targetDepth; i++) {
        toggleHide([target], {when: disabled.includes('whoToFollow'), tag: 'display-none'})
        target = target.parentElement;
      }
     });
  if(['followers', 'following'].filter((path) => document.location.href.endsWith(path)).length === 0) {
    toggleHide('div[data-testid=UserCell]', {when: disabled.includes('whoToFollow'), tag: 'display-none'});
  }
  toggleHide([document.querySelector('aside[aria-label="Who to follow"]')?.parentElement], {when: disabled.includes('whoToFollow'), tag: 'display-none'});
  toggleHide('div[data-testid=primaryColumn] a[href^="/i/connect"]', {when: disabled.includes('whoToFollow'), tag: 'display-none'});
}