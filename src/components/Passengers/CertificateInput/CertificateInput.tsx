
import WrapperContainer from '../WrapperContainer/WrapperContainer';
import './CertificateInput.css';

interface CertificateInputProps {
  changeInputCertificateNumber: (text: string) => void;
}

const CertificateInput = ({ changeInputCertificateNumber }: CertificateInputProps) => {

  // const myInput = useRef<HTMLInputElement>(null);
  return (
    <WrapperContainer title='Номер' >
      <input className='passenger_input' 
      type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputCertificateNumber(e.target.value)}
        placeholder='_ _ _ _ _ _ _ _ _ _ _ _' />
    </WrapperContainer>
  )
}

export default CertificateInput;