import App from './background/app.js';
window.app = new App();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request) {
    case 'get-disabled-features':
      sendResponse(app.settings.getDisabled());
      break;
    default:
      throw new Error(`No handler for the request "${request}"`);
  }
});
