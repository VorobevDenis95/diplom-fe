import { useEffect, useState } from "react";
import './SortContainer.css';
import { sortArr } from "./utils";
import { useSearchParams } from "react-router-dom";

export type SortRoutes = 'времени' | 'стоимости' | 'длительности';
export type SortRoutesType = 'date' | 'price' | 'duration';


export interface SortRouteObject {
  name: SortRoutes;
  type: SortRoutesType
}

const SortContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  
  const [arrSort, setArrSort] = useState <SortRouteObject[]> 
  ([{
    name: 'времени',
    type: 'date',
  },
  {
    name: 'стоимости',
    type: 'price'
  },
   {
    name: 'длительности',
    type: 'duration',
   }
  ])
  // const [sort, setSort] = useState<SortRoutes>(arrSort[0]);
  const [isActive, setActive] = useState(false);
  
  useEffect(() => {
    const prevParams = Object.fromEntries(searchParams)
    if (arrSort[0].type !==  prevParams.sort)
    setSearchParams({...prevParams, sort: `${arrSort[0].type}`})
    // console.log({...prevParams, sort: `${arrSort[0].type}`})
  }, [arrSort])

  const clickSort = () => {
    console.log(1)
    setActive(!isActive);  
    console.log(isActive)
  }

  const clickFilterElement = (el: SortRouteObject) => {
    if (el.name !== arrSort[0].name) {
      const arr = sortArr(arrSort, el.name);
      setArrSort([...arr]);
    }
    setActive(!isActive);
    

    // if (sort !== el) {
      
    // }
    
  }

  return (
    <>
    <div className="sort__routes">
      <div onClick={clickSort} >
        сортировать по
      </div>
      <div className={`sort__routes-filters ${
        isActive ? 'sort__routes-filters-active' : ''
      }`}>
        {arrSort.map((el) => (
          <span onClick={() => clickFilterElement(el)} 
          key={el.name}>{el.name}</span>  
        ))}
      </div> 

    </div>
    
    </>

  )

      
}

export default SortContainer