const tags = {
  'scale-zero': 'data-twitter-mod-scale-zero',
  'display-none': 'data-twitter-mod-display-none'
};

/*
  The toggle function hides or shows a list of elements.
  The action taken depends on the second argument: 'hidden'.
  When the second argument is true a hide takes place.
  When the second argument is false a show takes place.
*/
export default function (els, hidden, tag = 'scale-zero') {
  tag = tags[tag];
  if (hidden) {
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (!el || el.getAttribute(tag) === '1') { continue; }
      el.setAttribute('data-twitter-mod', '1');
      el.setAttribute(tag, '1');
    }
  } else {
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (!el) { continue; }
      el.removeAttribute('data-twitter-mod');
      for (const k in tags) { el.removeAttribute(tags[k]); }
    }
  }
}
