import React from 'react';
import styles from './error.module.css';

interface ErrorProps {
  userName: string;
}

export const Error = ({ userName }: ErrorProps) => {
  return (
    <div className={styles.errorContainer}>
      No Github User found for <b>{userName}</b>
    </div>
  );
};
