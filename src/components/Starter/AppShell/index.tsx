import React, { Fragment, ReactNode } from 'react';
import { Header } from '../Header';
import { useSoftwareUpdate } from '../../../pwa/hooks';
import { SoftwareUpdateNotification } from '../Notification';

interface AppShellProps {
  children: ReactNode | ReactNode[];
}

export const AppShell = ({ children }: AppShellProps) => {
  const { isUpdateAvailable, waitingWorker } = useSoftwareUpdate();
  console.log({ isUpdateAvailable, waitingWorker });
  const onButtonClick = () => {
    waitingWorker.postMessage('skipWaiting');
  };
  return (
    <Fragment>
      <Header />
      <div>{children}</div>
      {isUpdateAvailable && (
        <SoftwareUpdateNotification onClick={onButtonClick} />
      )}
    </Fragment>
  );
};
