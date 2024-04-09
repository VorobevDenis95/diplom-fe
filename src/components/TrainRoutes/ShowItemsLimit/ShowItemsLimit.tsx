import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import './ShowItemsLimit.css';

const ShowItemslimit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  
  
  const arrLimit = [5, 10, 20];
  const currentLimit = searchParams.get('limit') ? Number(searchParams.get('limit')) : arrLimit[0]; 
  const [limit, setLimit] = useState(currentLimit);
  
  useEffect(() => {
    const prevParams = Object.fromEntries(searchParams)
    return setSearchParams({...prevParams, limit: `${limit}`})
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