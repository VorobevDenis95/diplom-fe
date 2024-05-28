import { TitleContainerProps } from '../../../shared/types/components/componentsTypes';
import './TitlleContainer.css';

const TitleContainer = ({title}: TitleContainerProps) => {
  return (
    <div className='title__container'>
      <h3 className='title__container-title'>{title}</h3>
    </div>
  )
}

export default TitleContainer;