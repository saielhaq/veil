# Veil 🧹

> Quickly clear history, cookies, cache, and more with a single click

Veil is a lightweight Chrome extension that provides a clean, simple interface for clearing various types of browser data. Perfect for privacy-conscious users who want quick access to data clearing functions.

## Features

- 🕘 **Clear Browsing History** - Remove your browsing history
- 🍪 **Clear Cookies** - Delete all stored cookies
- 📦 **Clear Cache** - Clean browser cache
- 📥 **Clear Downloads** - Remove download history
- 💾 **Clear Local Storage** - Clear localStorage and IndexedDB
- 🔑 **Clear Passwords** - Remove saved passwords
- 💣 **Clear EVERYTHING** - Nuclear option that clears all data types (excluding passwords for safety)

## Interface

The extension features a dark-themed popup with a compact 320px width design. Each clearing function has its own dedicated button with emoji icons for easy identification. All actions now require confirmation through a custom modal dialog for safety.

### Confirmation System

- **Smart Confirmations**: Each action shows a tailored confirmation dialog with specific warnings
- **Safety Features**: All destructive actions require explicit confirmation
- **Color-coded Warnings**: Different confirmation button colors indicate action severity (green for safe, orange for warning, red for dangerous)
- **Keyboard Support**: Use Escape to cancel, modal focuses on Cancel button by default

Status messages appear at the bottom to confirm successful operations, automatically disappearing after 2 seconds.

## ⚠️ Important Warning

The "Clear EVERYTHING" button is extremely destructive and will remove:

- All browsing history
- All cookies and sessions (you'll be logged out of websites)
- All cached data
- Download history
- Local storage and IndexedDB data
- File systems data
- Plugin data

**Note**: For safety reasons, the "Clear EVERYTHING" option does NOT include passwords by default. Passwords must be cleared separately using the dedicated "Clear Passwords" button.

**Use with extreme caution!** These actions cannot be undone.

## Installation

### From Chrome Web Store

_Coming soon - extension will be available on the Chrome Web Store_

### Developer Installation (Manual)

1. Clone this repository:

   ```bash
   git clone https://github.com/saielhaq/veil.git
   cd veil
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the extension directory

5. The Veil extension should now appear in your extensions list

## Browser Compatibility

This extension works with all Chromium-based browsers including:

- Google Chrome
- Microsoft Edge
- Brave Browser
- Opera
- Vivaldi

## Development Setup

### Prerequisites

- Any Chromium-based browser for testing
- Basic knowledge of JavaScript and Chrome Extension APIs

### Project Structure

```
veil/
├── manifest.json      # Extension manifest and permissions
├── background.js      # Service worker handling data clearing
├── popup.html         # Extension popup interface
├── popup.js          # Popup interaction logic and confirmation modals
├── icon.png          # Extension icon
└── README.md         # This file
```

### Making Changes

1. Fork the repository
2. Make your changes
3. Test the extension by loading it unpacked in Chrome
4. Ensure all clearing functions work properly
5. Test confirmation modals and safety features
6. Submit a pull request

### Testing

Load the extension as unpacked and test each button to ensure:

- Appropriate browser data is cleared
- Confirmation modals appear with correct messaging
- Status messages appear correctly
- Keyboard navigation works (Escape to cancel)
- No console errors occur

## Contributing

We welcome contributions! Here's how you can help:

### Reporting Issues

- Use the [GitHub Issues](https://github.com/saielhaq/veil/issues) page
- Provide clear steps to reproduce the problem
- Include browser version and extension version
- Add screenshots if relevant

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly, including confirmation dialogs
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines

- Keep code clean and well-commented
- Follow existing code style and structure
- Test all changes thoroughly, including edge cases
- Update documentation if needed
- Be respectful in discussions

## Permissions

This extension requires the following permissions:

- `browsingData` - To clear various types of browser data
- `cookies` - To access and clear cookies
- `storage` - For potential future settings storage

## Changelog

### Version 1.0 (Current)

- Initial release
- Basic data clearing functionality
- Clean dark-themed interface with 320px width
- Support for history, cookies, cache, downloads, local storage, and passwords
- Custom confirmation modals for all actions
- Safety-focused "Clear All" option (excludes passwords)
- Keyboard navigation support
- Color-coded confirmation buttons based on action severity

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/saielhaq/veil/issues)
- 💡 **Feature Requests**: [GitHub Issues](https://github.com/saielhaq/veil/issues)
- 👨‍💻 **Developer**: [@saielhaq](https://github.com/saielhaq)

## Acknowledgments

Built with ❤️ for privacy-conscious users.

---

**Star ⭐ this repository if you find Veil useful!**
