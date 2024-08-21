(() => {
  // package.json
  var private2 = true;
  var scripts = {
    dev: "next dev --turbo",
    build: "next build",
    "build-only": "next build",
    start: "next start",
    setup: "node ./setup.mjs",
    "pages:build": "npx @cloudflare/next-on-pages",
    preview: "npm run pages:build && wrangler pages dev",
    deploy: "npm run pages:build && wrangler pages deploy"
  };
  var dependencies = {
    "@cloudflare/workerd-linux-64": "^1.20240815.0",
    "@codesandbox/sandpack-react": "2.12.0",
    "@tailwindcss/typography": "^0.5.10",
    "@types/react": "18.2.55",
    "@types/react-dom": "18.2.19",
    autoprefixer: "latest",
    "esbuild-linux-64": "^0.15.18",
    eslint: "^8.57.0",
    "eslint-config-next": "^14.2.5",
    geist: "1.2.2",
    next: "14.2.5",
    "next-intl": "^3.17.4",
    react: "18.2.0",
    "react-audio-player-component": "^1.2.4",
    "react-dom": "18.2.0",
    sharp: "^0.33.5",
    tailwindcss: "^3.4.1",
    typescript: "5.3.3",
    vercel: "^34",
    wrangler: "^3.72.1"
  };
  var browser = {
    crypto: false,
    https: false
  };
  var prettier = {
    singleQuote: true
  };
  var devDependencies = {
    "@cloudflare/next-on-pages": "^1.13.2",
    "eslint-plugin-next-on-pages": "^1.13.2"
  };
  var resolutions = {
    "string-width": "4.2.3"
  };
  var trustedDependencies = [
    "@vercel/speed-insights",
    "es5-ext",
    "esbuild",
    "sharp",
    "workerd"
  ];
  var package_default = {
    private: private2,
    scripts,
    dependencies,
    browser,
    prettier,
    devDependencies,
    resolutions,
    trustedDependencies
  };
})();
//# sourceMappingURL=package.js.map
