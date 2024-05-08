
import { useEffect, useRef } from 'react';
import WrapperContainer from '../WrapperContainer/WrapperContainer';
import './CertificateInput.css';

interface CertificateInputProps {
  changeInputCertificateNumber: (text: string) => void;
  value: string;
}

const CertificateInput = ({ changeInputCertificateNumber, value }: CertificateInputProps) => {

  const myInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value !== undefined && myInput.current) {
      myInput.current.value = value;
    }
  }, []);

  const inputValue = myInput.current?.value ? myInput.current.value : '';

  return (
    <WrapperContainer title='Номер' >
      <input className='passenger_input' 
      ref={myInput}
      value={inputValue}
      type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputCertificateNumber(e.target.value)}
        placeholder='_ _ _ _ _ _ _ _ _ _ _ _' />
    </WrapperContainer>
  )
}

export default CertificateInput;