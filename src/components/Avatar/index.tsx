import React from 'react';
import styles from './avatar.module.css';

interface AvatarProps {
  userName: string;
  url: string;
  height?: number;
  padding?: string;
}

export const Avatar = ({ userName, url, height, padding }: AvatarProps) => {
  const overrideHeight = height ? { height, width: 'auto' } : {};
  const overridePadding = padding ? { padding } : {};
  const overrideStyles = Object.assign({}, overrideHeight, overridePadding);
  return (
    <div className={styles.avatar}>
      <img alt={userName} src={url} style={overrideStyles} />
    </div>
  );
};
