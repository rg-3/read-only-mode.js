import toggle from './toggle.js';

export default function (disabled) {
  const spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i++) {
    const el = spans[i];
    if (el.textContent === 'Promoted' || el.textContent.startsWith('Promoted by')) {
      const tweet = el.closest('div[data-testid=tweet');
      if (tweet) {
        toggle([el], disabled.includes('promotedTweet'), 'display-none');
        toggle([tweet], disabled.includes('promotedTweet'), 'display-none');
      }
    }
  }
}
