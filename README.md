# PyxelDog Web Remote

A browser based remote for the Pyxel companion dog toy.

The app can run as a normal static web app or as a self-contained HTML file. It includes toddler friendly controls, picture/word labels, puppy tricks, rainbow moves, saved remote slots, a simple code lab, and Bridge/Direct connection modes. Also lets you reprogram the remote.

## What's Included

- `index.html` - normal web app entry point
- `app.js` - app behavior
- `styles.css` - app styling
- `pyxel-standalone.html` - single-file version for download/offline use

## How To Use

Open `index.html` in a browser to use the normal web app.

Use `pyxel-standalone.html` when you want one file that can be saved, shared, or opened locally on a phone or tablet. This is usually the best option for Direct to Dog mode.

This public package is not a Node app. It does not need `npm install`, a build step, or a backend server just to open the remote.

You can also use the GitHub Pages version however it likely will not work due to the dog using cleartext http. You can see the web app and try it [HERE](https://gainlearn.github.io/pyxeldogplus-web/)

### Open It Directly

Double-click `index.html` or `pyxel-standalone.html` to open it in a browser.

### Serve It Locally

If your browser blocks local file behavior, serve the folder with any static file server:

```sh
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Run the command from the same folder as `index.html`.

### Use Direct To Dog

1. Turn on the Pyxel dog.
2. Connect your phone, tablet, or computer to the dog's Wi-Fi.
3. Open `pyxel-standalone.html`.
4. Choose **Direct to Dog**.
5. Confirm the Dog URL is `http://192.168.4.1`, unless your dog uses a different address.
6. Tap a movement, trick, or rainbow move button.

## Connection Modes

Bridge mode talks to a local Pyxel bridge API from the browser. Use this when you are running the bridge service on a computer or local network.

Direct to Dog mode talks to the dog over its local Wi-Fi access point. Connect your phone, tablet, or computer to the dog's Wi-Fi, then use the Direct mode controls.

Some browsers block direct HTTP requests from a hosted HTTPS page to a local device. If Direct mode does not work from a hosted page, open the downloaded `pyxel-standalone.html` file locally while connected to the dog's Wi-Fi.

## Default Dog Settings

The app starts with generic Pyxel local-device defaults:

- Dog URL: `http://192.168.4.1`
- Wi-Fi SSID placeholder: `Pyxel Pet`
- Wi-Fi password placeholder: `12345678`

If your dog uses a different SSID, password, or local URL, update those fields in the app before connecting.

## Notes

Made by Jon '[GainSec](https://gainsec.com)' Gaines.
