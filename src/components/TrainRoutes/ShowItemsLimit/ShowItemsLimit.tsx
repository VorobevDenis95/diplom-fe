import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import './ShowItemsLimit.css';
// import { useAppSelector } from "../../../shared/redux/redux-hooks";

const ShowItemslimit = () => {
  // const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  // const params = useParams();
  // const paramsObject = Object.fromEntries(searchParams)
  
  // const {status} = useAppSelector(state => state.direction);
  const arrLimit = [5, 10, 20];
  const currentLimit = searchParams.get('limit') ? Number(searchParams.get('limit')) : arrLimit[0]; 
  const [limit, setLimit] = useState(currentLimit);
  
  useEffect(() => {
    const prevParams = Object.fromEntries(searchParams)
    setSearchParams({...prevParams, limit: `${limit}`})
    // if (status !== 'loading')
    // dispatch(fetchRoutes({ ...params, ...paramsObject } as paramsRoutesSelection))
  }, [limit])

  

  const clickNumber = (item: number) => {
    if (item === limit) return;
      setLimit(item);

  }

  return (
    <div className="limit__items">
      <div>
        показывать по
         
          {arrLimit.map((item) => (
            <span
            key={item}
            onClick={() => clickNumber(item)}
            className={`${limit === item ? 'limit__items-active' : ''}`}
            >{item}</span>
          ))}
      </div>
    </div>
  )
}

export default ShowItemslimit;