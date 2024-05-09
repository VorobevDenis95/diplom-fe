import './RequiestContainer.css';
import errorIcon from '../../../assets/images/svg/passenger/error-icon.svg';
import successIcon from '../../../assets/images/svg/passenger/success-icon.svg';
import { useEffect, useState } from 'react';

interface RequiestContainerProps {
  clickBtnPassenger: () => void;
  data: {
    type: string;
    value: string;
  }[];
  checkStatus: boolean;

  // status: 'pending' | 'success' | 'fail';
}

// export function setClassColorRequestContainer(status: 'pending' | 'success' | 'fail') {
//   if (status === 'fail') 
//     return 'next-container-fail'
//   if (status === 'success')
//     return 'next-container-succes'
//   return '';
// };

export function setColorClass(data: { type: string, value: string }[], active: boolean) {
  if (active) {
    if (data.length > 0)
      return 'next-container-fail';
    if (data.length === 0)
      return 'next-container-success';
  }

  return '';
}

const RequiestContainer = ({ clickBtnPassenger, data, checkStatus }: RequiestContainerProps) => {

  const [color, setColor] = useState(setColorClass(data, checkStatus));

  useEffect(() => {
    console.log(data)
    setColor(setColorClass(data, checkStatus));
  }, [data])

  return (
    <div className={`passenger-next-container ${color}`}>
        <div className='next-container-success-body'>
      {color === 'next-container-success' &&
          <>
            <img src={successIcon} alt="success icon" />
            <p className='next-container-success-text'>Готово</p>
          </>
        }
      {data.length > 0 && checkStatus &&
        <div className='next-container-success-body'>
          <img src={errorIcon} alt="error icon" />
          <p className='next-container-success-text-error'>
            {data[0]?.value}
          </p>
        </div>
      }
        </div>
    { color !== 'next-container-fail' &&
      <button onClick={clickBtnPassenger}
        type='button' className="passenger-btn-next">Следующий пассажир</button>}
    </div>
  )
}

export default RequiestContainer;
