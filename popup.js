const sendAction = (action) => {
  chrome.runtime.sendMessage({ action });
};

document
  .getElementById('clearHistory')
  .addEventListener('click', () => sendAction('clearHistory'));
document
  .getElementById('clearCookies')
  .addEventListener('click', () => sendAction('clearCookies'));
document
  .getElementById('clearCache')
  .addEventListener('click', () => sendAction('clearCache'));
document
  .getElementById('clearDownloads')
  .addEventListener('click', () => sendAction('clearDownloads'));
document
  .getElementById('clearLocalStorage')
  .addEventListener('click', () => sendAction('clearLocalStorage'));
document
  .getElementById('clearPasswords')
  .addEventListener('click', () => sendAction('clearPasswords'));
document
  .getElementById('clearAll')
  .addEventListener('click', () => sendAction('clearAll'));

chrome.runtime.onMessage.addListener((message) => {
  if (message.status) {
    document.getElementById('status').textContent = message.status;
    setTimeout(() => {
      document.getElementById('status').textContent = '';
    }, 2000);
  }
});
