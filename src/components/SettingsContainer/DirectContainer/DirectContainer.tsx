import { ReactNode} from "react";
import './DirectContainer.css';

interface DirectContainerProps {
  img: string;
  title: string;
  active: boolean;
  clickBtnDirect: (active: boolean) => void;
  children?: ReactNode
}



const DirectContainer = ({ active, clickBtnDirect, title, img: src, children}: DirectContainerProps) => {

  return (
    <div className="direct-time__container">
    <div className='direct-time__container-main'>
      <div className='direct-time__container-main-flex'>
        <img src={src} alt="icon arrow" />
        <h2>{title}</h2>
        <span>{children}</span>
      </div>
      <button onClick={() => clickBtnDirect(active)}
      className={`direct-time__container_btn-show-content ${active ? 'active__btn' : ''}`}>
        {active ? '-' : '+'}
      </button>
    </div>
    </div>
  )
}

export default DirectContainer;