import toggle from './content-script-helpers/toggle.js';
import toggleWhoToFollow from './content-script-helpers/toggle-who-to-follow.js';
import togglePromotedTweet from './content-script-helpers/toggle-promoted-tweet.js';
import togglePromotedTopics from './content-script-helpers/toggle-promoted-topics.js';

setInterval(() => {
  chrome.runtime.sendMessage('get-disabled-features', (disabled) => {
    /* compose */
    toggle(
      [document.querySelector('div[data-testid="primaryColumn"] div[role="progressbar"]')?.parentElement],
      disabled.includes('compose'),
      'display-none'
    );
    toggle(
      document.querySelectorAll('a[data-testid="SideNav_NewTweet_Button"]'),
      disabled.includes('compose')
    );
    /* replies */
    toggle(
      document.querySelectorAll('div[data-testid="reply"]'),
      disabled.includes('replies')
    );
    /* likes */
    toggle(
      document.querySelectorAll('div[data-testid="like"]'),
      disabled.includes('likes')
    );
    /* retweets */
    toggle(
      document.querySelectorAll('div[data-testid="retweet"]'),
      disabled.includes('retweets')
    );
    /* share tweet */
    toggle(
      document.querySelectorAll('div[aria-label="Share Tweet"]'),
      disabled.includes('shareTweet')
    );
    /* tweet activity */
    toggle(
      document.querySelectorAll('a[aria-label="View Tweet activity"]'),
      disabled.includes('tweetActivity')
    );
    /* follower count */
    toggle(
      [document.querySelector('a[href$="followers"][role="link"] span:first-child')],
      disabled.includes('followerCount'),
      'display-none'
    );
    /* following count */
    toggle(
      [document.querySelector('a[href$="following"][role="link"] span:first-child')],
      disabled.includes('followingCount'),
      'display-none'
    );
    /* trends */
    toggle(
      document.querySelectorAll('div[aria-label="Timeline: Trending now"]'),
      disabled.includes('trendingNow'),
      'display-none'
    );
    /* who to follow */
    toggleWhoToFollow(disabled);
    /* promoted tweets */
    togglePromotedTweet(disabled);
    /* promoted topics */
    togglePromotedTopics(disabled);
  });
}, 250);

document.addEventListener('DOMContentLoaded', () => {
  const stylesheet = `
  [data-twitter-mod-scale-zero="1"] {
    transform: scale(0);
  }

  [data-twitter-mod-display-none="1"] {
    display: none !important;
  }
`;
  const el = document.createElement('style');
  el.setAttribute('type', 'text/css');
  el.innerText = stylesheet;
  document.head.appendChild(el);
});
