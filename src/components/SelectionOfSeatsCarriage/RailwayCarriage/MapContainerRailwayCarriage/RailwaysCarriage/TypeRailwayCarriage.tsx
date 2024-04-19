import { useEffect, useState } from 'react';
import './TypeRailwayCarriage.css';
import type { TypeRailwayCarriage } from '../../../../../shared/types/typesTrain';
import { useAppDispatch, useAppSelector } from '../../../../../shared/redux/redux-hooks';
import { setActiveTypeRailwayCarriage } from '../../../../../shared/redux/slice/trainSlice';



interface TypeRailwayCarriageProps {
  type: TypeRailwayCarriage;
  children: React.ReactNode;
  

}

const TypeRailwayCarriage = ({type, children}: TypeRailwayCarriageProps) => {
  
const dispatch = useAppDispatch();

  const [isActive, setActive] = useState(false);
  const {activeTypeRailwayCarriage} = useAppSelector(state => state.train);
  
  useEffect(() => {
    activeTypeRailwayCarriage === type ? setActive(true) : setActive(false);
  }, [activeTypeRailwayCarriage])

  const clickItem = () => {
    if (activeTypeRailwayCarriage !== type) 
      dispatch(setActiveTypeRailwayCarriage(type))
  }

  return (
    <div onClick={clickItem} 
    className={`item__railway-carriage ${isActive ? 'item__railway-carriage-active' : ''}`}>
      {children}
    </div>
  )
}

export default TypeRailwayCarriage