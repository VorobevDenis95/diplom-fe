// import SelectInput from "../SelectInput/SelectInput";
import CertificateInput from "../CertificateInput/CertificateInput";
import PassportInput from "../InputContainer/PassportInput/PassportInput";
import { PassengerDataSeats } from "../PassengerContainer/PassengerContainer";
import SelectInputDocument from "../SelectInput/SelectInputDocument";
import WrapperContainer from "../WrapperContainer/WrapperContainer";
import './PassengerDocumentContainer.css';

export type TypeDocument = 'Паспорт РФ' | 'Свидетельство о рождении';

interface PassengerDocumentContainerProps {
  list: TypeDocument[];
  index: number;
  clickInput: () => void;
  clickValue: (i: number) => void;
  isActive: boolean;
  changeInputPassportSeries:(series: string, number: string) => void;
  changeInputPassportNumber: (series: string, number: string) => void;
  changeInputCertificateNumber: (text: string) => void;
  data: PassengerDataSeats;
}

const PassengerDocumentContainer = ({ list, index, clickValue, clickInput, isActive,
  changeInputPassportSeries, changeInputPassportNumber, changeInputCertificateNumber,
  data
 }: PassengerDocumentContainerProps) => {
  console.log(data)
  return (
    <div className="passenger__document-container">
      <WrapperContainer title="Тип документа">
        <SelectInputDocument list={list} index={index} clickElement={clickValue}
        clickInput={clickInput} isActive={isActive}/>
      </WrapperContainer>
        {index === 0 &&
        <>
          <PassportInput changeNumber={changeInputPassportNumber} changeSeries={changeInputPassportSeries}
          value={data.document_data}/>
        </>
        } 
        {index === 1 && 
          <CertificateInput changeInputCertificateNumber={changeInputCertificateNumber} 
          value={data.document_data}/>
        }

      
    </div>
  )
}

export default PassengerDocumentContainer;