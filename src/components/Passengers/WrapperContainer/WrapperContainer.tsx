import './WrapperContainer.css'

export interface WrapperContainerProps {
  children: React.ReactNode;
  title: string,
  classname?: string,
}

const WrapperContainer = ({title, children, classname}: WrapperContainerProps) => {
  return (
    <div className='wrapper_input-container'>
      <span className={`wrapper_input-container-title ${classname}`}>{title}</span>
      {children}
    </div>
  )
}

export default WrapperContainer;