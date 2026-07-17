# demos

Public home for **built demo output only** — the compiled `dist/` of each Earthal Labs template, served via GitHub Pages. No application source code lives here.

Each subfolder (e.g. `arcgis-starter/`) is published automatically by that template's private repo calling the reusable workflow in [`.github/workflows/deploy-demo.yml`](.github/workflows/deploy-demo.yml). Don't edit demo folders by hand — the next deploy overwrites them.

To add a new demo, the private template repo needs only a caller workflow:

```yaml
name: Publish demo
on:
  push:
    branches: [main]

jobs:
  demo:
    uses: earthal-labs/demos/.github/workflows/deploy-demo.yml@main
    with:
      slug: my-template
    secrets:
      DEMOS_DEPLOY_TOKEN: ${{ secrets.DEMOS_DEPLOY_TOKEN }}
```

…plus a base-path line in its Vite config so the app works under `/<slug>/`:

```ts
export default defineConfig({
  base: process.env.DEMO_BASE ?? "/",
});
```
