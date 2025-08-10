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
- 💣 **Clear EVERYTHING** - Nuclear option that clears all data types

## Interface

The extension features a dark-themed popup with a compact 220px width design. Each clearing function has its own dedicated button with emoji icons for easy identification. Status messages appear at the bottom to confirm successful operations, automatically disappearing after 2 seconds.

## ⚠️ Important Warning

The "Clear EVERYTHING" button is extremely destructive and will remove:

- All browsing history
- All cookies and sessions (you'll be logged out of websites)
- All cached data
- Download history
- Local storage and IndexedDB data
- File systems data
- Plugin data

**Use with extreme caution!** This action cannot be undone and will essentially reset your browser to a clean state.

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
├── popup.js          # Popup interaction logic
├── icon.png          # Extension icon
└── README.md         # This file
```

### Making Changes

1. Fork the repository
2. Make your changes
3. Test the extension by loading it unpacked in Chrome
4. Ensure all clearing functions work properly
5. Submit a pull request

### Testing

Load the extension as unpacked and test each button to ensure:

- Appropriate browser data is cleared
- Status messages appear correctly
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
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines

- Keep code clean and well-commented
- Follow existing code style and structure
- Test all changes thoroughly
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
- Clean dark-themed interface
- Support for history, cookies, cache, downloads, local storage, and passwords
- "Clear All" nuclear option

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
