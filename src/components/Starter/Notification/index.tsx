import React, { ReactNode } from 'react';
import styles from './notification.module.css';

interface NotificationProps {
  children?: ReactNode | ReactNode[];
}

const Notification = ({ children }: NotificationProps) => {
  return <div className={styles.notificationContainer}>{children}</div>;
};

interface SoftwareUpdateNotificationProps {
  onClick: () => void;
}

export const SoftwareUpdateNotification = ({
  onClick,
}: SoftwareUpdateNotificationProps) => {
  return (
    <Notification>
      <div className={styles.softwareUpdateNotificationContainer}>
        <p>New Update Available</p>
        <button onClick={onClick}>UPDATE</button>
      </div>
    </Notification>
  );
};
