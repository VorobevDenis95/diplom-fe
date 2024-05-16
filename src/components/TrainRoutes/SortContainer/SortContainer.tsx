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
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentSort, setCurrentSort] = useState(searchParams.get('sort') 
  ? searchParams.get('sort') : 'date');

  useEffect(() => {
    setCurrentSort(searchParams.get('sort') ? searchParams.get('sort') : 'date');
    const arr = sortArr(arrSort, currentSort as SortRoutesType);
      setArrSort([...arr]);   
  }, [searchParams.get('sort')])
  
  const [isActive, setActive] = useState(false);
  
  const clickSort = () => {
    console.log(1)
    setActive(!isActive);  
    console.log(isActive)
  }

  const clickFilterElement = (el: SortRouteObject) => {

    if (el.type !== currentSort && isActive) {
      const prevParams = Object.fromEntries(searchParams)
      if (el.type === 'date') {
        delete prevParams.sort;
        setSearchParams(prevParams);
        setActive(!isActive);
        return;
      }
      setSearchParams({ ...prevParams, sort: `${el.type}` })
      
    }
    setActive(!isActive);
    
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