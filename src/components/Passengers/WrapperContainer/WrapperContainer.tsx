import './WrapperContainer.css'

export interface WrapperContainerProps {
  children: React.ReactNode;
  title: string,
}

const WrapperContainer = ({title, children}: WrapperContainerProps) => {
  return (
    <div className="wrapper_input-container">
      <span className="wrapper_input-container-title">{title}</span>
      {children}
    </div>
  )
}

export default WrapperContainer;