export default function(app) {
  this.keys = Object.freeze([
    'likes',
    'replies',
    'retweets',
    'shareTweet',
    'tweetActivity',
    'followingCount',
    'followerCount'  ,
    'compose',
    'whoToFollow',
    'trendingNow',
    'promotedTweet'
  ]);

  this.get = (key) => {
    return this[key];
  }

  this.getDisabled = () => {
    const disabled = Object.create(null);
    return this.keys.filter((key) => this.isDisabled(key));
  };

  this.isEnabled = (key) => {
    return this[key] === '1';
  };

  this.isDisabled = (key) => {
    return this[key] === '0';
  };

  this.enable = (key) => {
    this[key] = app.localStorage[key] = '1';
  };

  this.disable = (key) => {
    this[key] = app.localStorage[key] = '0';
  }

  const keys = this.keys;
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if(app.localStorage[key]) {
      this[key] = app.localStorage[key];
    } else {
      this.disable(key);
    }
  }

  return this;
}
