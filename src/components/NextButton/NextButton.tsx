import { NextButtonProps } from '../../shared/types/components/componentsTypes';
import './NextButton.css';


const NextButton = ({active, clickAction, title, type} :NextButtonProps) => {

  return (
    <div onClick={clickAction}
    className="next__container">
      <button type={type} className={`next__container__btn
      ${active ? '' : 'btn-disable'}`} >{title}</button>
    </div>
  )
}

export default NextButton;