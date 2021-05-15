import toggleHide from '../support/toggle-hide.js';

export default function(disabled) {
  let spans = Array.from(document.querySelectorAll('span'));
  spans
    .filter((el) => el.textContent === "Promoted")
    .forEach((el) => {
      toggleHide([el], {when: disabled.includes('promotedTweet'), tag: 'display-none'});
      toggleHide([el.closest('div[data-testid=tweet')], {when: disabled.includes('promotedTweet'), tag: 'display-none'});
    });
  spans
    .filter((el) => el.textContent === "Promoted Tweet")
    .forEach((el) => {
      let target = el;
      let targetDepth = 5;
      for(let i = 0; i < targetDepth; i++) {
        toggleHide([target], {when: disabled.includes('promotedTweet'), tag: 'display-none'})
        target = target.parentElement;
      }
    });
}