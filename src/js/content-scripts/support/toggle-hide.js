const tags = {
  'scale-zero':   'data-twitter-mod-scale-zero',
  'display-none': 'data-twitter-mod-display-none'
};

const getFind = (scope) => {
  let find;
  if(scope === 'all') { find = document.querySelectorAll.bind(document); }
  else { find = document.querySelector.bind(document); }
  return function(selector) {
    const els = find(selector);
    if(!els) { return []; }
    if(scope === 'first') { return [els]; }
    return els;
  }
};

export default function(els, {when, finder = 'all', tag = 'scale-zero'}) {
  tag  = tags[tag];
  find = getFind(finder);
  if(when) {
    if(typeof(els) === 'string') {
      els = (finder === 'first' ? find(els) : find(`${els}:not([data-twitter-mod="1"])`));
    }
    for(let i = 0; i < els.length; i++) {
      const el = els[i];
      if(!el || el.getAttribute(tag) === '1') { continue; }
      el.setAttribute('data-twitter-mod', '1')
      el.setAttribute(tag, '1');
    }
  } else {
    if(typeof(els) === 'string') {
      els = find(els);
    }
    for(let i = 0; i < els.length; i++) {
      const el = els[i];
      if(!el) { continue; }
      el.removeAttribute('data-twitter-mod');
      for(let k in tags) { el.removeAttribute(tags[k]) }
    }
  }
}