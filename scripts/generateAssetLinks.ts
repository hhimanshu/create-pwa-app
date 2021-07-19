#!/usr/bin/env ts-node
import ErrnoException = NodeJS.ErrnoException;

require('dotenv').config();
const fs = require('fs');
const path = require('path');

const appName = process.env.PWA_PACKAGE_NAME;
const fingerPrint = process.env.PWA_SHA256_FINGERPRINT;

if (!(appName && fingerPrint))
  throw Error(
    'Either PWA_PACKAGE_NAME or PWA_SHA256_FINGERPRINT is missing in .env'
  );
const assetLinksJson = [
  {
    relation: ['delegate_permission/common.handle_all_urls'],
    target: {
      namespace: 'android_app',
      package_name: appName,
      sha256_cert_fingerprints: [fingerPrint],
    },
  },
];
fs.promises
  .mkdir('dist/.well-known', { recursive: true })
  .then((path: string) => {
    fs.writeFile(
      `${path}/assetlinks.json`,
      JSON.stringify(assetLinksJson, null, 2),
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
