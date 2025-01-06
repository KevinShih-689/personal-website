'use client';

import React from 'react';
import { Tilt } from '@jdion/tilt-react';
import styles from './ProfileCard.module.scss';
import ProfileCardProps from './ProfileCard.types';

/** Primary UI component for user interaction */
export default function ProfileCard ({}: ProfileCardProps) {
  return (
    <Tilt className={styles.profile_card}>
      <div className="header"></div>
      <div className="content">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </Tilt>
  );
}
