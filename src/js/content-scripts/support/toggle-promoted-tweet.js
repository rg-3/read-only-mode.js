import toggle from '../support/toggle.js';

export default function (disabled) {
  const spans = Array.from(document.querySelectorAll('span'));
  spans
    .filter((el) => el.textContent === 'Promoted')
    .forEach((el) => {
      toggle([el], disabled.includes('promotedTweet'), 'display-none');
      toggle([el.closest('div[data-testid=tweet')], disabled.includes('promotedTweet'), 'display-none');
    });
  spans
    .filter((el) => el.textContent === 'Promoted Tweet')
    .forEach((el) => {
      let target = el;
      const targetDepth = 5;
      for (let i = 0; i < targetDepth; i++) {
        toggle([target], disabled.includes('promotedTweet'), 'display-none');
        target = target.parentElement;
      }
    });
}
