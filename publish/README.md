Example publishing TypeScript types

```sh
rm -rf storage
yarn verdaccio --config verdaccio.yaml
```

```sh
yarn build:publish
cd publish
npm publish --registry http://localhost:4873
```
