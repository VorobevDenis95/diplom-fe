import { StateHeader } from "../../../shared/types/types";
import CityInput from "../../input/CityInput";
import DateInput from "../../input/DateInput";
import './FormDirection.css';

const FormDirection = ({state} : StateHeader) => {
  return (
    <form className={`form-direction ${state}`}>
      <div className="form-direction__container">
        <div className="form-direction__direction-container">
        <h2 className="form-direction__title">
          Направление
        </h2>
        <div className="form-direction__line">
          <CityInput placeholder='Откуда' nameClass='form-direction__city-from' />
          <CityInput placeholder='Куда' nameClass='form-direction__city-to' />
          </div>
        </div>
        <div className="form-direction__direction-container">
        <h2 className="form-direction__title">
          Дата
        </h2>
        <div className="form-direction__line">
          <DateInput nameClass='search-form__input-date-from' />   
          <div className="form-direction__button-container">
          <DateInput nameClass='search-form__input-date-to' />
          <button className="form-direction__submit" 
            type="submit">НАЙТИ НАПРАВЛЕНИЕ</button>

          </div>
        </div>
      </div>
    </div>

    </form>
  )
}

export default FormDirection;
