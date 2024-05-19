import DirectContainer from '../../DirectContainer/DirectContainer';
import './BodyPassenger.css';

interface BodyPassengerProps {
  image: string;
  title: string;
  active: boolean;
  clickBtnDirect: (active: boolean) => void;

}


const BodyPassenger = ({image, title, active, clickBtnDirect} : BodyPassengerProps) => {
  return (
    <>
    <div className='body__passenger'>
    <DirectContainer img={image} title={title} 
    active={active} clickBtnDirect={clickBtnDirect}
    />
    {
      active &&
      123
    }

    </div>
    
    </>
  )
}

export default BodyPassenger;