import { СhildrenContainerProps } from '../../shared/types/components/componentsTypes';
import './SettingContainer.css';


const SettingContainer = ({children, className}: СhildrenContainerProps) => {
  
  return (
    <div className={`settings__container ${className}`}>
      {children}
    </div>
  )
}

export default SettingContainer;