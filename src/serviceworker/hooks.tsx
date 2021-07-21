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
    const trackInstalling = (worker: ServiceWorker) => {
      worker.addEventListener('statechange', () => {
        if (worker.state === 'installed') {
          console.log('new software update is installed, not active yet ...');
          setWaitingWorker(worker);
        }
      });
    };
    // todo: install SW based on an env variable?
    if ((sw && process.env.NODE_ENV === 'production') || true) {
      window.addEventListener('load', () => {
        sw.register('/service-worker.js')
          .then(registration => {
            // Learned from https://stackoverflow.com/a/40130378/379235
            if (registration.waiting) {
              console.log('new software update is available ...');
              setWaitingWorker(registration.waiting);
              return;
            }
            registration.addEventListener('updatefound', () => {
              console.log('new software update is found ...');
              trackInstalling(registration.installing);
              return;
            });

            let refreshingPage = false;
            sw.addEventListener('controllerchange', () => {
              if (refreshingPage) return;
              window.location.reload();
              refreshingPage = true;
            });

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
