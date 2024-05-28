import { WrapperContainerProps } from '../../../shared/types/components/componentsTypes';
import './WrapperContainer.css'

const WrapperContainer = ({title, children, classname}: WrapperContainerProps) => {
  return (
    <div className='wrapper_input-container'>
      <span className={`wrapper_input-container-title ${classname}`}>{title}</span>
      {children}
    </div>
  )
}

export default WrapperContainer;