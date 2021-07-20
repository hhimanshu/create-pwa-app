/// <reference lib="webworker" />

// read more about triple slash directives at https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
// https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-lib-
import { precacheAndRoute } from 'workbox-precaching';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';

// https://stackoverflow.com/questions/56356655/structuring-a-typescript-project-with-workers
declare const self: ServiceWorkerGlobalScope;
export {};

precacheAndRoute(self.__WB_MANIFEST);

// https://developers.google.com/web/tools/workbox/modules/workbox-strategies#stale-while-revalidate
registerRoute(({ request }) => true, new StaleWhileRevalidate({}));

self.addEventListener('message', (ev: MessageEvent) => {
  if (ev.data === 'skipWaiting') {
    console.log('applying new software changes ...');
    self.skipWaiting();
  }
});
