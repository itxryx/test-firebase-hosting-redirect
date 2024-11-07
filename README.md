# test-firebase-hosting-redirect

Firebase Hostingで任意のURLにリダイレクトを行うテスト。

## 使い方

```
$ npm i

// deploy:staging
$ npx firebase deploy --only hosting:staging

// deploy:production
$ npx firebase deploy --only hosting:production

// destroy:staging
$ npx firebase hosting:disable --project test-redirect-20337 --site itxryx-test-redirect-staging

// destroy:production
$ npx firebase hosting:disable --project test-redirect-20337 --site itxryx-test-redirect-production

```

## URL

Firebase Hostingから以下の形式でURLが発行される。

- {PROJECT_NAME}.web.app
- {PROJECT_NAME}.firebaseapp.com
