'use client';

import React from 'react';
import './ProfileCard.scss';

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
export default function ProfileCard ({ name }: ProfileCardProps) {
  return (
    <div className="profile_card">
      <div>This is a profile card {name}</div>
    </div>
  );
}
