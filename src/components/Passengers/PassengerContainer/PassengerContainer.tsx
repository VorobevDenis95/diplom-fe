import { useEffect, useState } from 'react';
import './PassengerContainer.css';
import openIcon from '../../../assets/images/svg/passenger /open-btn.svg';
import closeIcon from '../../../assets/images/svg/passenger /close-btn.svg';
import closeIcon2 from '../../../assets/images/svg/passenger /close2.svg';
import { TicketProps } from '../../../shared/redux/slice/trainSlice';
import PassengerInfoContainer from '../PassengerInfoConrainer/PassengerInfoContainer';
import PassengerDocumentContainer from '../PassengerDocumentContainer/PassengerDocumentContainer';


interface PassengerContainerProps {
  index: number,
  el: TicketProps,
}


const PassengerContainer = ({index}: PassengerContainerProps) => {
  
  const [isActive, setActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(isActive ? closeIcon : openIcon)
  
  useEffect(() => {
    isActive ? setCurrentImage(closeIcon) : setCurrentImage(openIcon)
  }, [isActive])

  return (
    <div className="passenger__item">
      <div className={`passenger__item__header 
      ${isActive ? 'passenger__item__header-active' : ''}`} >
        <div className='passenger__item__header-container'>
          <button onClick={() => setActive(!isActive)}>
            <img src={currentImage} alt="" />
          </button>
            <h3>Пассажир {index}</h3>

        </div>
            {isActive && <button 
            onClick={() => {setActive(!isActive)}}
            className='passenger__item-close-btn'>
              <img src={closeIcon2} alt="close icon" />  
            </button>}
      </div>
        {
          isActive &&
          <>
            <PassengerInfoContainer />
            <PassengerDocumentContainer>

            </PassengerDocumentContainer>
          </>

        }
        <div></div>
    </div>
  )
}

export default PassengerContainer;