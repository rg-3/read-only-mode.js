const stylesheet = `
  [data-twitter-mod-scale-zero="1"] {
    transform: scale(0);
  }

  [data-twitter-mod-display-none="1"] {
    display: none !important;
  }
`;

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

const tag = (els, {when, finder = 'all', tag = 'scale-zero'}) => {
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
};

setInterval(() => {
  chrome.runtime.sendMessage("get-disabled-features", (disabled) => {
    /* compose */
    tag([document.querySelector('div[data-testid="primaryColumn"] div[role="progressbar"]')?.parentElement], {when: disabled.includes('compose'), tag: 'display-none'});
    tag('a[data-testid="SideNav_NewTweet_Button"]', {when: disabled.includes('compose')});
    /* replies */
    tag('div[data-testid="reply"]', {when: disabled.includes('replies')});
    /* likes */
    tag('div[data-testid="like"]', {when: disabled.includes('likes')})
    /* retweets */
    tag('div[data-testid="retweet"]', {when: disabled.includes('retweets')});
    /* share tweet */
    tag('div[aria-label="Share Tweet"]', {when: disabled.includes('shareTweet')});
    /* tweet activity */
    tag('a[aria-label="View Tweet activity"]', {when: disabled.includes('tweetActivity')});
    /* follower count */
    tag('a[href$="followers"][role="link"] span:first-child', {when: disabled.includes('followerCount'), finder: 'first', tag: 'display-none'});
    /* following count */
    tag('a[href$="following"][role="link"] span:first-child', {when: disabled.includes('followingCount'), finder: 'first', tag: 'display-none'});
  });
}, 250);

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('style');
  el.setAttribute('type', 'text/css')
  el.innerText = stylesheet;
  document.head.appendChild(el);
});
