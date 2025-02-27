# VSCode Extension Downloader

[中文](README.md) | [English](README.en.md)

A simple and practical Chrome extension that adds download buttons to the version history page of VS Code Marketplace extensions, making it easy for users to download specific versions of VS Code extensions.

### Features

- Automatically adds download buttons to the version history page of VS Code Marketplace extensions
- Supports downloading any historical version of VS Code extensions
- Clean interface, easy to operate
- Lightweight implementation, does not affect other page functions

### Installation

1. Clone or download this repository to your local machine
2. Open Chrome browser and go to the extensions page (chrome://extensions/)
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the folder containing this repository

### Usage

1. After installing the extension, visit the version history page of any VS Code Marketplace extension
2. A blue "Download" button will automatically appear next to each version's information
3. Click the "Download" button to download the corresponding version of the extension package (.vsix file)

### Technical Implementation

- Uses Chrome Extension Manifest V3
- Injects download buttons via content script
- Implements extension downloads through VS Code Marketplace API

### Notes

- This extension only works on the VS Code Marketplace website
- Downloaded extension files are in .vsix format, suitable for offline installation
- It is recommended to check file integrity after downloading

### License

MIT License