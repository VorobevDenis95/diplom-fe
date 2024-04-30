// import SelectInput from "../SelectInput/SelectInput";
import SelectInputDocument from "../SelectInput/SelectInputDocument";
import WrapperContainer from "../WrapperContainer/WrapperContainer";
import './PassengerDocumentContainer.css';

export type TypeDocument = 'Паспорт РФ' | 'Свидетельство о рождении';

interface PassengerDocumentContainer {
  children: React.ReactNode;
}

const PassengerDocumentContainer = () => {
    
  return (
    <div className="passenger__document-container">
      <WrapperContainer title="Тип документа">
        <SelectInputDocument list={["Паспорт РФ", "Свидетельство о рождении"]} />
      </WrapperContainer>
        
      {/* <WrapperContainer title="Серия">

      </WrapperContainer>
      <WrapperContainer title="Номер">
        
      </WrapperContainer>
       */}
    </div>
  )
}

export default PassengerDocumentContainer;