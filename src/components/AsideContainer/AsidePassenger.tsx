import { useState } from "react";
import BodyContainerPassenger from "../SettingsContainer/BodyContainerPassenger/BodyContainerPassenger";
import SettingContainer from "../SettingsContainer/SettingContainer";
import TitleContainer from "../SettingsContainer/TitleContainer/TitleContainer";
import { useAppSelector } from "../../shared/redux/redux-hooks";
import { TicketProps } from "../../shared/redux/slice/trainSlice";
import arrowTo from '../../assets/images/svg/time__container/arrow_to.svg';
import arrowFrom from '../../assets/images/svg/time__container/arrow_from.svg';
import passengerIcon from '../../assets/images/svg/time__container/passengerIcon.svg';
import BodyPassenger from "../SettingsContainer/BodyContainerPassenger/BodyPassenger/BodyPassenger";

const AsidePassenger = () => {

  const {tickets, item} = useAppSelector(state => state.train);

  // const departure: TicketProps[] = tickets.filter((el) => el.typeDirection === 'departure');
  const arrival: TicketProps[] = tickets.filter((el) => el.typeDirection === 'arrival');
  

  const [activeDeparture, setActiveDeparture] = useState(false);
  const [activeArrival, setActiveArrival] = useState(false);
  const [activePassenger, setActivePassenger] = useState(false);

  const handleClickBtnDeparture = (active: boolean) => {
    setActiveDeparture(!active);
  }

  const handleClickBtnArrival = (active: boolean) => {
    setActiveArrival(!active);
  }

  const handleClickBtnPassenger = (active: boolean) => {
    setActivePassenger(!active);
  }
  
  return (
    <SettingContainer>
      <TitleContainer title='ДЕТАЛИ ПОЕЗДКИ' />
      { item &&
        <BodyContainerPassenger 
      cityFrom={item?.departure.from.city.name}
      cityTo={item?.departure.to.city.name}
      stationFrom={item?.departure.from.railway_station_name}
      stationTo={item?.departure.to.railway_station_name}
      duration={item.departure.duration}
      nameTrain={item.departure.train.name}
      timeFrom={item.departure.from.datetime}
      timeTo={item.departure.to.datetime}
      activeContainer={activeDeparture}
      handleClickBtnAddShow={handleClickBtnDeparture}
      backStatus={false}
      title="Туда"
      image={arrowTo}
      />}
      { arrival.length > 0 && 
        item?.arrival &&
        <BodyContainerPassenger
        cityFrom={item?.arrival.from.city.name}
        cityTo={item?.arrival.to.city.name}
        stationFrom={item?.arrival.from.railway_station_name}
        stationTo={item?.arrival.to.railway_station_name}
        duration={item.arrival.duration}
        nameTrain={item.arrival.train.name}
        timeFrom={item.departure.from.datetime}
        timeTo={item.departure.to.datetime}
        activeContainer={activeArrival}
        handleClickBtnAddShow={handleClickBtnArrival}
        backStatus={true}
        title="Обратно"
        image={arrowFrom} 
        />
      }
      <BodyPassenger 
      active={activePassenger}
      clickBtnDirect={handleClickBtnPassenger}
      title="Пассажиры"
      image={passengerIcon}
      />
    </SettingContainer>
  )
}

export default AsidePassenger;