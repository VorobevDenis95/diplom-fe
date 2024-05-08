import { useState } from 'react';
import DirectContainer from '../DirectContainer/DirectContainer';
import './BodyContainerPassenger.css';

interface BodyContainerPassenger {
  backStatus: boolean;
}

const BodyContainerPassenger = ({backStatus} : BodyContainerPassenger) => {

  const [activeContainer, setActiveContainer] = useState(false);
  
  
  const handleClickBtnAddShow = (active: boolean) => {
    setActiveContainer(!active);  
  }

  return (
    <div>
      <DirectContainer back={backStatus}
      active={activeContainer} clickBtnDirect={handleClickBtnAddShow} />
    </div>
  )
}

export default BodyContainerPassenger;