# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This is a deploy to GitHub solution for support.junipa.com.au.

Deployment is just pushing to `main`:

```
$ git add .
$ git commit -m "Deploy updates"
$ git push origin main
```

## Development

This project uses Docusaurus. To start the development server automatically when opening the project in VS Code:

1. Install the "Auto Run Command" extension in VS Code.
2. Go to File > Preferences > Settings (or press Ctrl+,).
3. Search for "Auto Run Command".
4. Click on "Edit in settings.json" under "Auto Run Command: Extension".
5. Add the following to your `settings.json`:
