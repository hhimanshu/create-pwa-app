import { useEffect, useState } from 'react';

const sw = navigator.serviceWorker;

type SoftwareUpdateType = {
  isUpdateAvailable: boolean;
  waitingWorker: ServiceWorker;
};
export const useSoftwareUpdate = (): SoftwareUpdateType => {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | undefined>(
    undefined
  );
  useEffect(() => {
    if ((sw && process.env.NODE_ENV === 'production') || true) {
      window.addEventListener('load', () => {
        sw.register('/service-worker.js')
          .then(registration => {
            // Learned from https://stackoverflow.com/a/40130378/379235
            if (registration.waiting) {
              console.log('New Update is available ..');
              setWaitingWorker(registration.waiting);
              return;
            }

            console.log('SW registered:', registration);
          })
          .catch(registrationError => {
            console.log('SW Registration Failed:', registrationError);
          });
      });
    }
  }, [sw]);
  return { isUpdateAvailable: waitingWorker !== undefined, waitingWorker };
};
