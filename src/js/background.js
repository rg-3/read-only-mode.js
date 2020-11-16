import App from '/js/background/app.js';
window.app = new App();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch(request) {
    case "IsEnabled":
      sendResponse(app.enabled);
      break;
    default:
      throw new Error(`No handler for the request "${request}"`)
      break;
  }
});