'use client';

import React, { useRef } from 'react';
import './ProfileCard.scss';
import styles from '@app/variables.scss';

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
  const cardRef = useRef<HTMLDivElement>(null);

  console.log(styles);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const shadowMax = 23;
    const rotateMax = 20;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    // 滑鼠在卡片內的 (x, y)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // 卡片中心
    const centerX = cardWidth / 2;
    const centerY = cardHeight / 2;

    const offsetX = x - centerX;
    const offsetY = y - centerY;

    const rotateY = (offsetX / centerX) * rotateMax;
    const rotateX = -(offsetY / centerY) * rotateMax;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;

    const shadowX = -(offsetX / centerX) * shadowMax;
    const shadowY = (offsetY / centerY) * shadowMax;
    card.style.boxShadow = `
      ${shadowY}px ${shadowX}px 30px #999
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    cardRef.current.style.boxShadow = '0 8px 15px #999';
  };

  return (
    <div ref={cardRef} className="profile_card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div>This is a profile card {name}</div>
    </div>
  );
}
