# Adobe Live Reload Assistant
This is the repository for the Google Chrome extension of the same name.

### Installation
The extension is currently awaiting Chrome Store approval, so you must install it as an unpacked Chrome extension.

First, you'll need to clone this repo using:

```git clone https://github.com/duncanlutz/adobe_live_reload_assistant.git```.

After this, you'll need to actually install the extension. You can do so by following the instructions [here.](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked)

### Usage
- After installing Chrome extension, navigate to the folder of the extension you'd like to debug.

- Install [Adobe Live Reload](https://github.com/duncanlutz/adobe-live-reload) via npm: `npm i adobe-live-reload`

- Once installed, run `npx adobe-live-reload` in the terminal.

- Adobe Live Reload should open your current extension in Google Chrome, and you're ready to debug!

- To close, select the terminal and press "ctrl+c".

## Changelog

## v0.2.0
### Added
- Icon and title change to indicate when live-reload is active

## v0.1.0
### Added
- Initial live reloading functionality
- README file