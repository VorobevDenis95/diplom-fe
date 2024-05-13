import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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
import { setTrain } from "../../shared/redux/slice/trainSlice";
import { TraineRoutesItemProps } from "../../shared/types/typesRoutesBilets";

const TrainSelection = () => {
  const { status, items, totalCount } = useAppSelector(state => state.direction)
  // const {} = useAppSelector(state => state.train)
  const params = useParams();
  

  // const [isActive, setActive] = useState(loading ? false : true);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const paramsObject = Object.fromEntries(searchParams)
  const debounceGetParams = useDebounce(params);
  // const debounceGetParamsObject = useDebounce(paramsObject, 2000);


  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   dispatch(fetchRoutes({ ...params, ...paramsObject } as paramsRoutesSelection, { signal }));

  //   return () => {
  //     controller.abort();
  //   };
  // }, [debounceGetParams]);

  useEffect(() => {
    
      dispatch(fetchRoutes({ ...params, ...paramsObject } as paramsRoutesSelection, ))
      // console.log(debounceGetParams)
  }, [debounceGetParams]);

  const clickSelectSeats = (item: TraineRoutesItemProps['item']) => {
    dispatch(setTrain(item));
    navigate(`/routes/${item.departure._id}${item.arrival?._id ? `/${item.arrival._id}`  : ''}/seats`);
  }
  // console.log(isActive)

  return (
    <>
      {
        
        status !== 'loading' &&
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
                <TrainRoutes key={el.departure._id} item={el}>
                  <button onClick={() => clickSelectSeats(el)}
                   className="train-routes__item__btn-select-seats">Выбрать места</button> 
                </TrainRoutes>
              ))}

            </div>
            <PoginationContainer />
          </div>
        </div>}

    </>


  )
}

export default TrainSelection;

