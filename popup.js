const sendAction = (action) => {
  chrome.runtime.sendMessage({ action });
};

// Modal elements
const modalOverlay = document.getElementById('modalOverlay');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalWarning = document.getElementById('modalWarning');
const modalConfirm = document.getElementById('modalConfirm');
const modalCancel = document.getElementById('modalCancel');

// Action configurations
const actionConfigs = {
  clearHistory: {
    icon: '🕘',
    title: 'Clear Browsing History',
    message:
      'Are you sure you want to clear your browsing history? This will remove all visited websites from your history.',
    confirmText: 'Clear History',
    confirmClass: 'normal',
    showWarning: true,
  },
  clearCookies: {
    icon: '🍪',
    title: 'Clear All Cookies',
    message:
      'This will clear all cookies and website data. You will be logged out of all websites and may need to reconfigure website preferences.',
    confirmText: 'Clear Cookies',
    confirmClass: 'warning',
    showWarning: true,
  },
  clearCache: {
    icon: '📦',
    title: 'Clear Browser Cache',
    message:
      'This will clear your browser cache. Websites may load slightly slower on first visit as they rebuild their cache.',
    confirmText: 'Clear Cache',
    confirmClass: 'normal',
    showWarning: false,
  },
  clearDownloads: {
    icon: '📥',
    title: 'Clear Download History',
    message:
      'This will clear your download history. Your actual downloaded files will not be deleted, only the record of downloads.',
    confirmText: 'Clear Downloads',
    confirmClass: 'normal',
    showWarning: false,
  },
  clearLocalStorage: {
    icon: '💾',
    title: 'Clear Local Storage',
    message:
      'This will clear localStorage and IndexedDB data. Some websites may temporarily lose saved preferences or data.',
    confirmText: 'Clear Storage',
    confirmClass: 'warning',
    showWarning: true,
  },
  clearPasswords: {
    icon: '🔑',
    title: 'Clear Saved Passwords',
    message:
      'This will permanently delete all saved passwords. You will need to re-enter passwords for all your accounts.',
    confirmText: 'Clear Passwords',
    confirmClass: 'danger',
    showWarning: true,
  },
  clearAll: {
    icon: '💣',
    title: 'Clear ALL Browser Data',
    message:
      'This will clear EVERYTHING: history, cookies, cache, downloads, local storage, passwords, and more. Your browser will be reset to a clean state. You will be logged out of all websites.',
    confirmText: 'Clear Everything',
    confirmClass: 'danger',
    showWarning: true,
  },
};

let pendingAction = null;

const showCustomConfirmation = (action) => {
  const config = actionConfigs[action];
  pendingAction = action;

  // Set modal content
  modalIcon.textContent = config.icon;
  modalTitle.textContent = config.title;
  modalMessage.textContent = config.message;
  modalConfirm.textContent = config.confirmText;

  // Set confirm button style
  modalConfirm.className = `modal-button confirm ${config.confirmClass}`;

  // Show/hide warning
  modalWarning.style.display = config.showWarning ? 'block' : 'none';

  // Show modal
  modalOverlay.style.display = 'block';

  // Focus on cancel button for safety
  modalCancel.focus();
};

const hideModal = () => {
  modalOverlay.style.display = 'none';
  pendingAction = null;
};

// Modal event listeners
modalCancel.addEventListener('click', hideModal);

modalConfirm.addEventListener('click', () => {
  if (pendingAction) {
    sendAction(pendingAction);
    hideModal();
  }
});

// Close modal when clicking overlay
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    hideModal();
  }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.style.display === 'block') {
    hideModal();
  }
});

// Main button event listeners
document
  .getElementById('clearHistory')
  .addEventListener('click', () => showCustomConfirmation('clearHistory'));

document
  .getElementById('clearCookies')
  .addEventListener('click', () => showCustomConfirmation('clearCookies'));

document
  .getElementById('clearCache')
  .addEventListener('click', () => showCustomConfirmation('clearCache'));

document
  .getElementById('clearDownloads')
  .addEventListener('click', () => showCustomConfirmation('clearDownloads'));

document
  .getElementById('clearLocalStorage')
  .addEventListener('click', () => showCustomConfirmation('clearLocalStorage'));

document
  .getElementById('clearPasswords')
  .addEventListener('click', () => showCustomConfirmation('clearPasswords'));

document
  .getElementById('clearAll')
  .addEventListener('click', () => showCustomConfirmation('clearAll'));

// Status message listener
chrome.runtime.onMessage.addListener((message) => {
  if (message.status) {
    document.getElementById('status').textContent = message.status;
    setTimeout(() => {
      document.getElementById('status').textContent = '';
    }, 2000);
  }
});
