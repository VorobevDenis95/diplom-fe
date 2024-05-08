import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import TrainRoutes from "../../components/TrainRoutes/TrainRoutes";
import { paramsRoutesSelection } from "../../shared/typesParamsUrl";
import './TrainSelection.css';
import { useAppDispatch, useAppSelector } from "../../shared/redux/redux-hooks";
import { fetchRoutes } from "../../shared/redux/asyncThunks/getRouteAsynkThunk";
import PoginationContainer from "../../components/poginationContainer/PoginationContainer";
import SortContainer from "../../components/TrainRoutes/SortContainer/SortContainer";
import ShowItemslimit from "../../components/TrainRoutes/ShowItemsLimit/ShowItemsLimit";
import AsideSelection from "../../components/AsideContainer/AsideSelection";
import useDebounce from "../../shared/hooks/useDebounce";

const TrainSelection = () => {
  const { items, totalCount } = useAppSelector(state => state.direction)
  const params = useParams();

  // const [isActive, setActive] = useState(loading ? false : true);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const paramsObject = Object.fromEntries(searchParams)
  const debounceGetParams = useDebounce(params);

  useEffect(() => {
    
      dispatch(fetchRoutes({ ...params, ...paramsObject } as paramsRoutesSelection, ))

  }, [debounceGetParams]);

  // console.log(isActive)

  return (
    <>
      {
        
        // status !== 'loading' &&
        <div className="flex">
          <AsideSelection />
          <div className="train__selection">
            <div className="train__selection__header">
              <span>найдено {totalCount}</span>
              <SortContainer />
              <ShowItemslimit />
            </div>
            <div className="train-routes">
              {items.map((el) => (
                <TrainRoutes key={el.departure._id} item={el} />
              ))}

            </div>
            <PoginationContainer />
          </div>
        </div>}

    </>


  )
}

export default TrainSelection;

