import React from 'react';
import { Card } from '../Starter/Card';
import styles from './emptyCard.module.css';
import Offline from '../../icons/offline.svg';
import AppShell from '../AppShell';

export const EmptyCard = () => (
  <AppShell>
    <Card>
      <div className={styles.emptyCardContainer}>
        <Offline />
        <p>You are currently offline</p>
      </div>
    </Card>
  </AppShell>
);
