import toggle from './toggle.js';

export default function (disabled) {
  /* Toggles sidebar "Topics to follow" */
  const sections = Array.from(document.querySelectorAll('div[data-testid=sidebarColumn] section[role=region]'));
  toggle(
    sections.slice(1),
    disabled.includes('promotedTopics'),
    'display-none'
  );
}
