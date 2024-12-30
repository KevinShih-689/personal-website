'use client';

import React from 'react';
import { Tilt } from '@jdion/tilt-react';
import './ProfileCard.css';

export interface ProfileCardProps {
  /** List of social media links */
  socialList?: Array<{
    type: string;
    link: string;
  }>;
  /** Profile description */
  description?: string;
  /** Education information */
  education?: string;
  /** License information */
  license?: string | React.ReactNode;
  /** User's name */
  name?: string;
  /** Profile picture URL */
  picture?: string;
  /** Handler for download action */
  onDownload?: () => void;
}

/** Primary UI component for user interaction */
export default function ProfileCard ({ name, ...props }: ProfileCardProps) {
  console.log(props);

  return (
    <Tilt className="profile_card">
      <div>This is a profile card {name}</div>
    </Tilt>
  );
}
