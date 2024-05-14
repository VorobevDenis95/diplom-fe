import { useLocation } from 'react-router-dom';
import './StageWrapper.css';
import { useEffect, useState } from 'react';

const StageWrapper = () => {

  const location = useLocation();
  const [count, setCount] = useState(1);


  useEffect(() => {
    if (location.pathname === '/passengers') setCount(2);
    if (location.pathname === '/payment') setCount(3);
    if (location.pathname === '/confirmation') setCount(4);
  }, [location.pathname])


  return (
<ul className="stage-wrapper">
  <li className="stage-item stage-current">
    <div className="stage-item__number">1</div>
    <span className="stage-item__title">Билеты</span>
  </li>
  <li className={`stage-item ${2 <= count ? 'stage-current' : ''}`}>
    <div className="stage-item__number">2</div>
    <span className="stage-item__title">Пассажиры</span>
  </li>
  <li className={`stage-item ${3 <= count ? 'stage-current' : ''}`}>
    <div className="stage-item__number">3</div>
    <span className="stage-item__title">Оплата</span>
  </li>
  <li className={`stage-item ${4 <= count ? 'stage-current' : ''}`}>
    <div className="stage-item__number">4</div>
    <span className="stage-item__title">Проверка</span>
  </li>
</ul>
  )
}

export default StageWrapper;