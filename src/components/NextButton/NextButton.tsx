import './NextButton.css';

interface NextButtonProps{
  active: boolean;
  clickAction: () => void;
  title: string;
  type: 'button' | 'submit';
}

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