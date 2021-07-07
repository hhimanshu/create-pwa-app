import { precacheAndRoute } from 'workbox-precaching';

// https://stackoverflow.com/questions/56356655/structuring-a-typescript-project-with-workers
declare const self: ServiceWorkerGlobalScope;
export {};

precacheAndRoute(self.__WB_MANIFEST);
console.log('Hello from service-worker.js');
