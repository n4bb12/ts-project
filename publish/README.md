Example publishing TypeScript types

```sh
rm -rf storage/@n4bb12
yarn verdaccio --config verdaccio.yaml
```

```sh
yarn build:publish
cd publish
npm publish --registry http://localhost:4873
```

```sh
yarn add -D @n4bb12/ts-project-publish@1.0.0 --registry http://localhost:4873
```
