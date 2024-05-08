import { ReactNode, useEffect, useState } from "react";
import arrowToIcon from '../../../assets/images/svg/time__container/arrow_to.svg';
import arrowFromIcon from '../../../assets/images/svg/time__container/arrow_from.svg';

interface DirectContainerProps {
  back: boolean;
  active: boolean;
  clickBtnDirect: (active: boolean) => void;
  children?: ReactNode
}



const DirectContainer = ({back, active, clickBtnDirect, children}: DirectContainerProps) => {

  const [title, setTitle] = useState(back ? 'Обратно' : 'Туда');
  const [src, setSrc] = useState(back ? arrowFromIcon : arrowToIcon);

  useEffect(() => {
    back ? setTitle('Обратно') : setTitle('Туда');
    back ? setSrc(arrowFromIcon) : setSrc(arrowToIcon);
  }, [back])

  return (
    <div className="direct-time__container">
    <div className='direct-time__container-main'>
      <div className='direct-time__container-main-flex'>
        <img src={src} alt="icon arrow" />
        <h2>{title}</h2>
        {children}
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