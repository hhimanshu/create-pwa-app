import { precache, precacheAndRoute } from 'workbox-precaching';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';

// https://stackoverflow.com/questions/56356655/structuring-a-typescript-project-with-workers
declare const self: ServiceWorkerGlobalScope;
export {};

precacheAndRoute(self.__WB_MANIFEST);
precache(['/offline']); // this is second route

// https://developers.google.com/web/tools/workbox/modules/workbox-strategies#stale-while-revalidate
registerRoute(({ request }) => true, new StaleWhileRevalidate({}));
console.log('Hello from service-worker.js');
