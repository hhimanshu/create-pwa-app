import React from 'react'
import { Card } from '../Card';
import styles from './emptyCard.module.css'
import Offline from '../../icons/offline.svg'
export const EmptyCard = () => (
  <Card>
    <div className={styles.emptyCardContainer}>
      <Offline/>
      <p>You are currently offline</p>
    </div>
  </Card>
)