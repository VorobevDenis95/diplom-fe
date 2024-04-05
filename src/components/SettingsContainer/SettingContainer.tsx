import { Children } from 'react';
import './SettingContainer.css';

interface SettingContainerProps {
  children: React.ReactNode;
}

const SettingContainer = ({children}: SettingContainerProps) => {
  
  return (
    <div className="settings__container">
      {children}
    </div>
  )
}

export default SettingContainer;