function openInNewTab() {
  chrome.tabs.create({ url: "https://app.facil123.com.br" });
}

chrome.browserAction.setIcon({ path: "asseinfo.ico" });
chrome.browserAction.onClicked.addListener(openInNewTab);
