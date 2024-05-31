import { useEffect, useState } from "react";
import BodyContainerPassenger from "../SettingsContainer/BodyContainerPassenger/BodyContainerPassenger";
import SettingContainer from "../SettingsContainer/SettingContainer";
import TitleContainer from "../SettingsContainer/TitleContainer/TitleContainer";
import { useAppSelector } from "../../shared/redux/redux-hooks";
import { TicketProps } from "../../shared/types/store/trainStore";
import arrowTo from '../../assets/images/svg/time__container/arrow_to.svg';
import arrowFrom from '../../assets/images/svg/time__container/arrow_from.svg';
import passengerIcon from '../../assets/images/svg/time__container/passengerIcon.svg';
import BodyPassenger from "../SettingsContainer/BodyContainerPassenger/BodyPassenger/BodyPassenger";
import BodyPrice from "../SettingsContainer/BodyContainer/BodyPrice/BodyPrice";

const AsidePassenger = () => {

  const {tickets, item} = useAppSelector(state => state.train);

  const [children, setChildren] = useState(tickets.filter((el) => !el.is_adult)
  .filter((el) => el.typeDirection === 'departure'));
  const [adults, setAdults] = useState(tickets.filter((el) => el.is_adult)
  .filter((el) => el.typeDirection === 'departure'));
  const [totalPriceChildren, setTotalPriceChildren] = useState(children.reduce((acc, el) => acc + el.price, 0));
  const [totalPriceAdult, setTotalPriceAdult] = useState(adults.reduce((acc, el) => acc + el.price, 0));

  useEffect(() => {
    setChildren(tickets.filter((el) => !el.is_adult)
    .filter((el) => el.typeDirection === 'departure'));
    setAdults(tickets.filter((el) => el.is_adult)
    .filter((el) => el.typeDirection === 'departure'));
    setTotalPriceChildren(children.reduce((acc, el) => acc + el.price, 0));
    setTotalPriceAdult(adults.reduce((acc, el) => acc + el.price, 0));
  }, [tickets])

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
    <SettingContainer className="settings__passenger">
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
      adults={{length: adults.length, price: totalPriceAdult}}
      children={{length: children.length, price: totalPriceChildren}}
      />
      <BodyPrice price={totalPriceAdult + totalPriceChildren}/>
    </SettingContainer>
  )
}

export default AsidePassenger;