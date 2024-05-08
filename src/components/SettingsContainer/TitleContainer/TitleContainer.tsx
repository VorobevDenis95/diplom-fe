import './TitlleContainer.css';

interface TitleContainerProps {
  title: string
}

const TitleContainer = ({title}: TitleContainerProps) => {
  return (
    <div className='title__container'>
      <h3 className='title__container-title'>{title}</h3>
    </div>
  )
}

export default TitleContainer;