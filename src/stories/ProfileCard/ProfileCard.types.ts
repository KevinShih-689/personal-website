export default interface ProfileCardProps {
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
};;;;;;;;;;
