import React from 'react';
import styles from './card.module.css';

interface CardProps {
  children: React.ReactNode;
}

export const Card = (props: CardProps) => (
  <div className={styles.cardContainer}>
    <div className={styles.card}>{props.children}</div>
  </div>
);
