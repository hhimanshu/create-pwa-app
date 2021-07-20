#!/usr/bin/env ts-node
import ErrnoException = NodeJS.ErrnoException;

require('dotenv').config();
const fs = require('fs');
const path = require('path');

const appName = process.env.PWA_PACKAGE_NAME;
const fingerPrints: string[] = process.env.PWA_SHA256_FINGERPRINTS.split(',');

if (!appName || fingerPrints.length < 1)
  throw Error(
    'Either PWA_PACKAGE_NAME or PWA_SHA256_FINGERPRINTS is missing in .env'
  );
const getAssetLink = (fingerprint: string) => ({
  relation: ['delegate_permission/common.handle_all_urls'],
  target: {
    namespace: 'android_app',
    package_name: appName,
    sha256_cert_fingerprints: [fingerprint],
  },
});

const getAssetLinksJson = () =>
  fingerPrints.map(fingerprint => getAssetLink(fingerprint));

fs.promises
  .mkdir('dist/.well-known', { recursive: true })
  .then((path: string) => {
    fs.writeFile(
      `${path}/assetlinks.json`,
      JSON.stringify(getAssetLinksJson(), null, 2),
      { flag: 'w' },
      (err: ErrnoException) => {
        if (err) {
          console.error('failed to create assetlinks.json', err);
          return;
        }
        console.log(`assetlinks.json written to ${path} successfully.`);
      }
    );
  });
