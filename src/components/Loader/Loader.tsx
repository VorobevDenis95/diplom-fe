import './Loader.css';
import trainIcon from '../../assets/images/image/animation/train.svg';
import roadIcon from '../../assets/images/image/animation/road.svg';

const Loader = () => {
  return (
    <>
      <div className='loader'>
        <span className='loader__event-text'>ИДЕТ ПОИСК</span>
        <div className='loader-container'>
          <img className='loader_run_train' src={trainIcon} alt="train icon" />
          <img className="loader_run_road" src={roadIcon} alt="road icon" />
        </div>
        
      </div>
    </>
  )
}

export default Loader;