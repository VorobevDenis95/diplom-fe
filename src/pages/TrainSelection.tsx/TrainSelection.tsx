import { useEffect, useState } from "react";
import { ItemRoutes, ResponseRoutes, initResponseRoutes } from '../../shared/types/typesRoutesBilets';
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { getRoute, lastTickets } from "../../shared/api/serviceApi";
import TrainRoutes from "../../components/TrainRoutes/TrainRoutes";
import { paramsRoutesSelection } from "../../shared/typesParamsUrl";
import './TrainSelection.css';
import RouteCategoriesSeatsContainer from "../../components/TrainRoutes/RouteCategoriesSeatsContainer/RouteCategoriesSeatsContainer";
import { useAppDispatch, useAppSelector } from "../../shared/redux/redux-hooks";
import { fetchRoutes } from "../../shared/redux/asyncThunks/getRouteAsynkThunk";
import PoginationContainer from "../../components/poginationContainer/PoginationContainer";
import SortContainer from "../../components/TrainRoutes/SortContainer/SortContainer";
import ShowItemslimit from "../../components/TrainRoutes/ShowItemsLimit/ShowItemsLimit";
import SettingContainer from "../../components/SettingsContainer/SettingContainer";
import CheckBoxContainer from "../../components/SettingsContainer/CheckBoxContainerDetalils/CheckBoxContainer";
import PriceContainer from "../../components/PriceContainer/PriceContainer";
import SliderContainer from "../../components/SettingsContainer/SliderContainer/SliderContainer";

// import { params2 } from "../../shared/typesParamsUrl";

const TrainSelection = () => {
  const {items, totalCount} = useAppSelector(state => state.direction)
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const [lastTicketsList, setLastTicketsList] = useState<ItemRoutes[]>([]);

  
  // console.log(params);
  // const {from_city_id, to_city_id} = params;
  const [response, setResponce] = useState<ResponseRoutes>(initResponseRoutes);

  const dispatch = useAppDispatch();


  const paramsObject = Object.fromEntries(searchParams)

  for (const props in paramsObject) {
    // console.log(props, paramsObject[props]);
  }


  useEffect(() => {
    dispatch(fetchRoutes({...params, ...paramsObject } as paramsRoutesSelection))
    // console.log(params);
    // dispatch(getRoute)
    // (async () => {
    //   // if (cityFrom && cityTo && dateStart && dateEnd) {
    //     if (from_city_id && to_city_id ) {
    //     const data = await getRoute(
    //       {...params} as paramsRoutesSelection
    //     );
    //     if (data) setResponce(data);
    //     console.log(data);
    //   }
    // })() 
  }, [params, ]);

  useEffect(() => {
    (async () => {
      const data = await lastTickets();
      if (data) setLastTicketsList(data);
    })()
    // last tickets
  }, [items])

  // const [value, setValue] = useState({min: 100, max: 20000});

return (
  <>


  <div className="flex">
    <SettingContainer>
      <CheckBoxContainer />
      <PriceContainer />
    </SettingContainer>



    <div className="train__selection">
      <div className="train__selection__header">
        <span>найдено {totalCount}</span>
        <SortContainer />
          
        <ShowItemslimit />
      </div>
      <div className="train-routes">
          {items.map((el) => (

        // {response.items.map((el) => (
          <TrainRoutes key={el.departure._id} item={el}/>
          // <div>{el.arrival.train.name}</div>
        ))}

    </div>
      <PoginationContainer />
    </div>
  </div>
  </>
  )
}

export default TrainSelection;