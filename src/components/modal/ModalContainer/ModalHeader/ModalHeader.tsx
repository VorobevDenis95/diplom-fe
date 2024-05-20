import { useEffect, useState } from "react";
import errorIcon from '../../../../assets/images/svg/modal/errorIcon.svg';
import infoIcon from '../../../../assets/images/svg/modal/infoIcon.svg';


type Modal = 'error' | 'info';
interface ModalHeaderProps {
  type: Modal
}

const ModalHeader = ({type} : ModalHeaderProps) => {

  const [srcModal, setSrcModal] = useState(type === 'error' ? errorIcon : infoIcon);

  useEffect(() => {
    setSrcModal(type === 'error' ? errorIcon : infoIcon);
  }, [type])

  return (
    <div className={`modal__header modal__header-${type}`}>
      <img src={srcModal} alt={`${type} icon`} />
    </div>
  )
}

export default ModalHeader;