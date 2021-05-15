import toggleHide from './support/toggle-hide.js';
import hideWhoToFollow from './support/hide-who-to-follow.js';
import hidePromotedTweet from './support/hide-promoted-tweet.js';

setInterval(() => {
  chrome.runtime.sendMessage("get-disabled-features", (disabled) => {
    /* compose */
    toggleHide([document.querySelector('div[data-testid="primaryColumn"] div[role="progressbar"]')?.parentElement], {when: disabled.includes('compose'), tag: 'display-none'});
    toggleHide('a[data-testid="SideNav_NewTweet_Button"]', {when: disabled.includes('compose')});
    /* replies */
    toggleHide('div[data-testid="reply"]', {when: disabled.includes('replies')});
    /* likes */
    toggleHide('div[data-testid="like"]', {when: disabled.includes('likes')})
    /* retweets */
    toggleHide('div[data-testid="retweet"]', {when: disabled.includes('retweets')});
    /* share tweet */
    toggleHide('div[aria-label="Share Tweet"]', {when: disabled.includes('shareTweet')});
    /* tweet activity */
    toggleHide('a[aria-label="View Tweet activity"]', {when: disabled.includes('tweetActivity')});
    /* follower count */
    toggleHide('a[href$="followers"][role="link"] span:first-child', {when: disabled.includes('followerCount'), finder: 'first', tag: 'display-none'});
    /* following count */
    toggleHide('a[href$="following"][role="link"] span:first-child', {when: disabled.includes('followingCount'), finder: 'first', tag: 'display-none'});
    /* trends */
    toggleHide('div[aria-label="Timeline: Trending now"]', {when: disabled.includes('trendingNow'), tag: 'display-none'})
    /* who to follow */
    hideWhoToFollow(disabled);
    /* promoted tweets */
    hidePromotedTweet(disabled);
  });
}, 250);

const stylesheet = `
  [data-twitter-mod-scale-zero="1"] {
    transform: scale(0);
  }

  [data-twitter-mod-display-none="1"] {
    display: none !important;
  }
`;

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('style');
  el.setAttribute('type', 'text/css')
  el.innerText = stylesheet;
  document.head.appendChild(el);
});
