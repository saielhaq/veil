const sinceTime = 0; // 0 = All time

function sendStatus(status) {
  chrome.runtime.sendMessage({ status });
}

chrome.runtime.onMessage.addListener((message) => {
  switch (message.action) {
    case 'clearHistory':
      chrome.browsingData.remove({ since: sinceTime }, { history: true }, () =>
        sendStatus('History cleared!')
      );
      break;

    case 'clearCookies':
      chrome.browsingData.remove({ since: sinceTime }, { cookies: true }, () =>
        sendStatus('Cookies cleared!')
      );
      break;

    case 'clearCache':
      chrome.browsingData.remove({ since: sinceTime }, { cache: true }, () =>
        sendStatus('Cache cleared!')
      );
      break;

    case 'clearDownloads':
      chrome.browsingData.remove(
        { since: sinceTime },
        { downloads: true },
        () => sendStatus('Downloads cleared!')
      );
      break;

    case 'clearLocalStorage':
      chrome.browsingData.remove(
        { since: sinceTime },
        { localStorage: true, indexedDB: true },
        () => sendStatus('Local Storage cleared!')
      );
      break;

    case 'clearPasswords':
      chrome.browsingData.remove(
        { since: sinceTime },
        { passwords: true },
        () => sendStatus('Passwords cleared!')
      );
      break;

    case 'clearAll':
      chrome.browsingData.remove(
        { since: sinceTime },
        {
          history: true,
          cookies: true,
          cache: true,
          downloads: true,
          localStorage: true,
          indexedDB: true,
          fileSystems: true,
          pluginData: true,
          // passwords: true
        },
        () => sendStatus('All data cleared!')
      );
      break;
  }
});
