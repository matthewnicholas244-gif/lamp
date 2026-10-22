# Glow — Lamp Login Animation

A responsive, animated login-page front end made with plain HTML, CSS, and JavaScript. No build tools or dependencies are required.

## Files

- `index.html` — page structure and form
- `style.css` — layout, lamp illustration, animations, and responsive styles
- `script.js` — lamp toggle, fireflies, password visibility, and demo form interactions

## Run locally

Open `index.html` in your browser. For a local server, use the VS Code **Live Server** extension or run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `lamp-login`.
2. Upload **all three website files** (`index.html`, `style.css`, `script.js`) and this README to the repository root. Keep the filenames and capitalization exactly as shown.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to finish deploying. The Pages panel will show your public URL, usually `https://YOUR-USERNAME.github.io/lamp-login/`.

If the repository is named `YOUR-USERNAME.github.io`, the site URL is usually `https://YOUR-USERNAME.github.io/`.

## Important notes

- This is a **front-end demo**, not a real login system. It validates the fields in the browser but does not authenticate a user, send credentials, or store passwords.
- To support real accounts, connect a trusted authentication provider and implement secure sign-in/reset flows. Do not collect or store passwords in client-side JavaScript.
- Google Fonts requires an internet connection; the page uses fallback system fonts if it is unavailable.
- GitHub Pages is static hosting, so it cannot run a server-side login backend by itself.
