```
pnpm install
pnpm build
```

Note how `src/App.css` is built differently between client and server:

- `dist/client/assets/App-D11unEfz.css`
- `dist/server/assets/App-WuQLwyl0.css`

The built CSS differs because:
- Server targets `es2022`
- Client targets `[ 'chrome107', 'edge107', 'firefox104', 'safari16' ]`

```console
> npm run build:client && npm run build:server


> vite-ssr-project@0.0.0 build:client
> vite build --outDir dist/client

[client] config.build.cssTarget [ 'chrome107', 'edge107', 'firefox104', 'safari16' ]
vite v7.0.6 building for production...
✓ 31 modules transformed.
dist/client/index.html                   0.57 kB │ gzip:  0.33 kB
dist/client/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/client/assets/App-D11unEfz.css      0.48 kB │ gzip:  0.31 kB
dist/client/assets/index-p-YblEDb.css    0.94 kB │ gzip:  0.51 kB
dist/client/assets/index-WuT3mjEs.js   188.10 kB │ gzip: 59.22 kB
✓ built in 946ms

> vite-ssr-project@0.0.0 build:server
> vite build --ssr src/entry-server.jsx --outDir dist/server

[server] config.build.cssTarget es2022
vite v7.0.6 building SSR bundle for production...
✓ 4 modules transformed.
dist/server/assets/react-CHdo91hT.svg  4.13 kB
dist/server/assets/App-WuQLwyl0.css    0.48 kB
dist/server/entry-server.js            1.54 kB
✓ built in 83ms
```
