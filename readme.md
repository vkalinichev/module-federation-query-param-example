# Stand for Issue: https://github.com/module-federation/vite/pull/299

### Start Apps

```shell
# Terminal 1: start host
cd host
pnpm dev
```
```shell
# Terminal 2: start remote
cd remote
pnpm dev
```

### Reproduce: add query param to manifest
```diff
  federation({
    name: "host",
    remotes: {
-     remote: "http://localhost:5176/mf-manifest.json",
+     remote: "http://localhost:5176/mf-manifest.json?version=2",
    },
  })
```
