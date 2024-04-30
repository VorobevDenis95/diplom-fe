import arrowToIcon from '../../../assets/images/svg/time__container/arrow_to.svg';
import arrowFromIcon from '../../../assets/images/svg/time__container/arrow_from.svg';
import { useEffect, useState } from 'react';
// import { useAppSelector } from '../../../shared/redux/redux-hooks';
import { lastTickets } from '../../../shared/api/serviceApi';
import { ItemRoutes } from '../../../shared/types/typesRoutesBilets';
import SettingContainer from '../../SettingsContainer/SettingContainer';
import TravelDatesContainer from '../../SettingsContainer/TravelDatesContainer/TravelDatesContainer';
import CheckBoxContainer from '../../SettingsContainer/CheckBoxContainerDetalils/CheckBoxContainer';
import PriceContainer from '../../PriceContainer/PriceContainer';
import DirectTImeContainer from '../../SettingsContainer/DirectTimeContainer/DirectTimeContainer';
import LastTicketsContainer from '../../lastTicketsContainer/LastTicketsContainer';


const AsideSelection = () => {

  // const {items} = useAppSelector(state => state.direction);

  const [lastTicketsList, setLastTicketsList] = useState<ItemRoutes[]>([]);


  useEffect(() => {
    (async () => {
      const data= await lastTickets() as ItemRoutes[];
      if (data) {
        setLastTicketsList(data);
      }
    })()
    // last tickets
  }, [])

  return (
    <div>
      <SettingContainer>
        <TravelDatesContainer />
        <CheckBoxContainer />
        <PriceContainer />
        <DirectTImeContainer src={arrowToIcon} title="Туда"/>
        <DirectTImeContainer src={arrowFromIcon} title="Обратно"/>
      </SettingContainer>
      <LastTicketsContainer list={lastTicketsList}/>
    </div>
  )
}

export default AsideSelection;