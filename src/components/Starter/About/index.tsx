import React from 'react';
import { Link } from 'react-router-dom';
import { AppShell } from '../AppShell';
import styles from './about.module.css';
import BonsaiiLabsImage from '../../../icons/bonsaiilabs.png';
import { FollowButton } from '../FollowButton';

export const About = () => {
  return (
    <AppShell>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutCardContainer}>
          <div className={styles.aboutCard}>
            <img
              alt='bonsaiilabs'
              src={BonsaiiLabsImage}
              height={50}
              width={50}
            />
            <h3>React Typescript PWA Starter</h3>
            <p>
              The goal of this project is to help create Progressive Web
              Applications (PWAs) using React, TypeScript and deploy them to
              Google Play Store.
            </p>
            <div className={styles.followButton}>
              <FollowButton
                userOrRepo={'bonsaiilabs/react-pwa-starter'}
                label={'Read more at GitHub'}
              />
            </div>
            <Link to='/'>Go to Home Page</Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
};
