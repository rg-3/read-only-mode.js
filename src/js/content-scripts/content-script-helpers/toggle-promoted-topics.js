import toggle from './toggle.js';

const headerText = [
  'Topics to follow'
];

const toggleHeader = (disabled) => {
  const spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if (headerText.includes(span.textContent)) {
      let target = span;
      const targetDepth = 5;
      for (let i = 0; i < targetDepth; i++) {
        toggle([target], disabled.includes('promotedTopics'), 'display-none');
        target = target.parentElement;
      }
    }
  }
};

export default function (disabled) {
  /* Toggles sidebar "Topics to follow" */
  const sections = Array.from(document.querySelectorAll('div[data-testid=sidebarColumn] section[role=region]'));
  toggle(
    sections.slice(1),
    disabled.includes('promotedTopics'),
    'display-none'
  );
  /* Toggles promoted topics from home and profile timelines */
  toggleHeader(disabled);
  toggle(
    document.querySelectorAll('div[data-testid=primaryColumn] a[href="/i/topics/picker/home"]'),
    disabled.includes('promotedTopics'),
    'display-none'
  );
  toggle(
    document.querySelectorAll('div[data-testid=primaryColumn] div[aria-label="Timeline: Carousel"]'),
    disabled.includes('promotedTopics'),
    'display-none'
  );
}
