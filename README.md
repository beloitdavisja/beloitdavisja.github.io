# beloitdavisja.github.io

Developer home page, built with Angular and deployed to GitHub Pages.

- `site/`: the Angular app. Content lives in `site/src/app/data/` (`profile.ts`, `runnerval.ts`, `woodworking.ts`).
- `site/public/runnerval/`: the Runnerval privacy, terms and support pages. These are served at `/runnerval/...` and are linked from the App Store listing, so keep their URLs stable.
- `.github/workflows/deploy.yml`: builds `site/` and publishes it on every push to `main`. In the repo's Settings > Pages, set Source to "GitHub Actions".

## Develop

```sh
cd site
npm install
npm start      # http://localhost:4200
npm run build  # output in site/dist/site/browser
```

## Add a woodworking piece

Put the photo in `site/public/images/woodworking/` and add an entry to `site/src/app/data/woodworking.ts`. The gallery section appears once the list has an entry.
