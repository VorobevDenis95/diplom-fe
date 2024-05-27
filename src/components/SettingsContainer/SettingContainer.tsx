import './SettingContainer.css';

export interface СhildrenContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SettingContainer = ({children, className}: СhildrenContainerProps) => {
  
  return (
    <div className={`settings__container ${className}`}>
      {children}
    </div>
  )
}

export default SettingContainer;