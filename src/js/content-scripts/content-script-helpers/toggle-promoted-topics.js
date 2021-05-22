import toggle from './toggle.js';

export default function (disabled) {
  /* Toggles sidebar "Topics to follow" */
  toggle(
    [document.querySelector('[aria-labelledby="accessible-list-2"]')],
    disabled.includes('promotedTopics'),
    'display-none'
  );
}
