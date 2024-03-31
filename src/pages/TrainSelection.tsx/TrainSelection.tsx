import { useEffect, useState } from "react";
import { ItemRoutes, ResponseRoutes, initResponseRoutes } from '../../shared/types/typesRoutesBilets';
import { useLocation, useParams } from "react-router-dom";
import { getRoute } from "../../shared/api/serviceApi";
import TrainRoutes from "../../components/TrainRoutes/TrainRoutes";
import { paramsRoutesSelection } from "../../shared/typesParamsUrl";
import './TrainSelection.css';
import RouteCategoriesSeatsContainer from "../../components/TrainRoutes/RouteCategoriesSeatsContainer/RouteCategoriesSeatsContainer";
import { useAppDispatch, useAppSelector } from "../../shared/redux/redux-hooks";
import { fetchRoutes } from "../../shared/redux/asyncThunks/getRouteAsynkThunk";

// import { params2 } from "../../shared/typesParamsUrl";

const TrainSelection = () => {
  const {items, totalCount} = useAppSelector(state => state.direction)
  const params = useParams();
  
  // console.log(params);
  // const {from_city_id, to_city_id} = params;
  const [response, setResponce] = useState<ResponseRoutes>(initResponseRoutes);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(params)
    dispatch(fetchRoutes({...params} as paramsRoutesSelection))
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
}, [params])

return (
  <>
  <div className="train__selection">
    <div className="train__selection__header">
      <span>найдено {totalCount}</span>
      <div>сортировать по </div>
      <div>показывать по </div>
    </div>
    <div className="train-routes">
        {items.map((el) => (

      // {response.items.map((el) => (
        <TrainRoutes key={el.departure._id} item={el}/>
        // <div>{el.arrival.train.name}</div>
      ))}

  </div>

  </div>
  </>
  )
}

export default TrainSelection;