import { useEffect, useState } from "react";
import { useAppSelector } from "../../shared/redux/redux-hooks";
import PoginationItemElement from "./PoginationItemElement";
import { getPages } from "./utils";
import './PoginationContainer.css';
import { useSearchParams } from "react-router-dom";

const PoginationContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 5; 
  const {totalCount, items} = useAppSelector(state => state.direction);
  const offset = Number(searchParams.get('offset'));

  const [currentPage, setCurrentPage] = useState(1); 
  const [quantityPages, setQuantityPages] = useState(totalCount > 0 ? Math.round(totalCount / limit) : 0);
  const [paginationArr, setPaginationArr] = useState(getPages(quantityPages, currentPage)); 

  // useEffect(() => {
  //  setQuantityPages(totalCount > 0 ? Math.round(totalCount / limit) : 0);
   
  // //  const offset = Number(searchParams.get('offset'));
  //  if (offset) setCurrentPage(Math.round((offset + limit) / limit)) 
  //  else setCurrentPage(1);

  // setPaginationArr(getPages(quantityPages,currentPage))
  
  // const prevParams = Object.fromEntries(searchParams);
  // // setSearchParams({...prevParams, offset: `${(currentPage - 1) * limit}`});

  // }, [totalCount, items, limit, offset])

  useEffect(() => {
    const newQuantityPages = totalCount > 0 ? Math.round(totalCount / limit) : 0;
    setQuantityPages(newQuantityPages);
 
    if (offset) {
      setCurrentPage(Math.round((offset + limit) / limit)); 
    } else {
      setCurrentPage(1);
    }
 
    setPaginationArr(getPages(newQuantityPages, currentPage));
 
    // const prevParams = Object.fromEntries(searchParams);

    // setSearchParams({ ...prevParams, offset: (currentPage - 1) * limit });
 
 }, [totalCount, items, limit, offset, currentPage])
  

  const pageDown = () => {
    if (currentPage === 1) return;
    const prevParams = Object.fromEntries(searchParams);
    let offset = (currentPage * limit) - 2 * limit;
    offset < 0 ? offset = 0 : offset;
    return setSearchParams({...prevParams, offset: `${offset}`})
  }

  const pageUp = () => {
    if (currentPage === quantityPages) return;
    if (quantityPages === 0) return
    const offset = currentPage * limit;
    const prevParams = Object.fromEntries(searchParams)
    return setSearchParams({...prevParams, offset: `${offset}`})
  }

  const clickPageEl = (num: number | string) => {
      console.log(typeof num)
    if (typeof num === 'number') {
      const currenPage = num - 1 < 1 ? 0 : num - 1;
      const offset = currenPage * limit;
      console.log(num)
      console.log(offset)
      const prevParams = Object.fromEntries(searchParams)
      return setSearchParams({...prevParams, offset: `${offset}`})
    }
  }

  return (
    <>
      <div className="page__numbers">
{        <div onClick={pageDown} className="page-number__item">
          <svg  
          width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.33625 14.5C9.82076 11.0945 13.1201 7.89424 16.3731 4.72332C17.2669 3.85207 17.1987 2.34671 16.3094 1.47083C15.4416 0.616038 14.1195 0.686134 13.2516 1.54092C9.06317 5.66637 4.86165 9.80466 0.72327 13.8808C0.325571 14.2725 0.325472 14.9137 0.723293 15.3053C4.70972 19.2293 8.86225 23.2984 12.9949 27.3844C13.8955 28.2748 15.2685 28.3485 16.1445 27.4338C16.9987 26.5419 17.0517 25.0479 16.1744 24.1785C13.0758 21.1078 9.80952 17.8945 6.33625 14.5Z" fill="#928F94"/>
          </svg>
        </div>}
        {paginationArr.map((el) => (
          <PoginationItemElement clickPage={() => clickPageEl(el)} 
          key={el} numberPage={el} currentPage={currentPage}/>
        ))}
        
        <div onClick={pageUp} 
        className="page-number__item">
          <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6637 14.5C8.17924 11.0945 4.87989 7.89424 1.62688 4.72332C0.733082 3.85207 0.801327 2.34671 1.69059 1.47083C2.55844 0.616038 3.88051 0.686134 4.74835 1.54092C8.93683 5.66637 13.1384 9.80466 17.2767 13.8808C17.6744 14.2725 17.6745 14.9137 17.2767 15.3053C13.2903 19.2293 9.13775 23.2984 5.00506 27.3844C4.10447 28.2748 2.7315 28.3485 1.85554 27.4338C1.00133 26.5419 0.948345 25.0479 1.82557 24.1785C4.92418 21.1078 8.19048 17.8945 11.6637 14.5Z" fill="#928F94"/>
          </svg>
        </div>
      </div>

      
    </>
  )
}

export default PoginationContainer; 