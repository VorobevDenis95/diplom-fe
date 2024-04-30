import './NextButton.css';

interface NextButtonProps{
  active: boolean;
  clickAction: () => void;
}

const NextButton = ({active, clickAction} :NextButtonProps) => {

  return (
    <div onClick={clickAction}
    className="next__container">
      <button type="button" className={`next__container__btn
      ${active ? '' : 'btn-disable'}`} >Далее</button>
    </div>
  )
}

export default NextButton;