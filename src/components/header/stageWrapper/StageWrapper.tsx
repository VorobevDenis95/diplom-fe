import './StageWrapper.css';


const StageWrapper = () => {
  return (
<ul className="stage-wrapper">
  <li className="stage-item stage-current">
    <div className="stage-item__number">1</div>
    <span className="stage-item__title">Билеты</span>
  </li>
  <li className="stage-item stage-current">
    <div className="stage-item__number">2</div>
    <span className="stage-item__title">Пассажиры</span>
  </li>
  <li className="stage-item stage-current">
    <div className="stage-item__number">3</div>
    <span className="stage-item__title">Оплата</span>
  </li>
  <li className="stage-item stage-current">
    <div className="stage-item__number">4</div>
    <span className="stage-item__title">Проверка</span>
  </li>
</ul>
  )
}

export default StageWrapper;