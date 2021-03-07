import Settings from '/js/background/app/settings.js';

export default function() {
  this.enabled = true;
  this.localStorage = window.localStorage;
  this.settings = new Settings(this);
  return this;
}
