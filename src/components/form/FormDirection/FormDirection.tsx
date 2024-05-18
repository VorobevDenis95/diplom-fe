import { StateHeader } from "../../../shared/types/types";
import CityInput from "../../input/CityInput";
import DateInput from "../../input/DateInput";
import './FormDirection.css';
import arrows from '../../../assets/images/svg/arrows.svg'
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/redux/redux-hooks";
import { changingCities } from "../../../shared/redux/slice/directionSlice";
import { useLocation, useNavigate } from 'react-router-dom';
import { sendCurrentDateToServer } from './utils'

const FormDirection = ({ state }: StateHeader) => {
  const location = useLocation();
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    if (location.pathname === '/order') {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [location])

  const navigate = useNavigate();
  const { cityFrom, cityTo, dateStart, dateTo } = useAppSelector(state => state.direction);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // navigate(`routes/${cityFrom.id}/${cityTo.id}`);
    //отправляем роут по параметрам которые существуют
    navigate(`routes/${cityFrom.id}/${cityTo.id}${dateStart
      ? `/${sendCurrentDateToServer(dateStart)}${dateTo
        ? `/${sendCurrentDateToServer(dateTo)}` : ''}` : ''}`);


    // if (dateTo) 
    //   navigate(`routes/${cityFrom.id}/${cityTo.id}/${sendCurrentDateToServer(dateStart)}/${sendCurrentDateToServer(dateTo)}`)
    // else {
    //   navigate(`routes/${cityFrom.id}/${cityTo.id}/${sendCurrentDateToServer(dateStart)}`);
    // }
    // console.log(cityFrom);
    // console.log(sendCurrentDateToServer(dateTo))

  }

  const swapCities = () => {
    dispatch(changingCities());
  }

  return (

    <>
      {isActive &&
    <form className={`form-direction ${state}`}
      onSubmit={handleSubmit}
    >
      <div className={`form-direction__container ${state}__container`}>
        <div className="form-direction__direction-container">
          <h2 className="form-direction__title">
            Направление
          </h2>
          <div className="form-direction__line">
            <CityInput placeholder='Откуда' nameClass='form-direction__city-from' />
            <button onClick={swapCities}
              type='button' className="form-direction__btn-exchange">
              <img src={arrows} alt="" />
            </button>
            <CityInput placeholder='Куда' nameClass='form-direction__city-to' />
          </div>
        </div>
        <div className="form-direction__direction-container">
          <h2 className="form-direction__title">
            Дата
          </h2>
          <div className="form-direction__line static">
            <DateInput nameClass='search-form__input-date-from' />
            <div className="form-direction__button-container">
              <DateInput nameClass='search-form__input-date-to'
              />
              <button className="form-direction__submit"
                type="submit">
                НАЙТИ НАПРАВЛЕНИЕ</button>

            </div>
          </div>
        </div>
      </div>

    </form>

      }
    </>
  )
}

export default FormDirection;
