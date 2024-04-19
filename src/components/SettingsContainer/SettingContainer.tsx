import './SettingContainer.css';

export interface СhildrenContainerProps {
  children: React.ReactNode;
}

const SettingContainer = ({children}: СhildrenContainerProps) => {
  
  return (
    <div className="settings__container">
      {children}
    </div>
  )
}

export default SettingContainer;