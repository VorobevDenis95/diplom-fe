import { useEffect, useState } from 'react';
import './TypeRailwayCarriage.css';
import type { TypeRailwayCarriage } from '../../../../../shared/types/typesTrain';
import { useAppSelector } from '../../../../../shared/redux/redux-hooks';
// import { setActiveTypeRailwayCarriage } from '../../../../../shared/redux/slice/trainSlice';



interface TypeRailwayCarriageProps {
  type: TypeRailwayCarriage;
  children: React.ReactNode;
  clickTypeElement: (type: TypeRailwayCarriage) => void;

}

const TypeRailwayCarriage = ({type, children, clickTypeElement}: TypeRailwayCarriageProps) => {
  

 

// const dispatch = useAppDispatch();
  const [isDisable, setDisable] = useState(false);
  const [isActive, setActive] = useState(false);
  const {activeTypeRailwayCarriage} = useAppSelector(state => state.train);
  
  // useEffect(() => {
  //   avaliableClasses.includes(type) ? setDisable(false) : setDisable(true);
  // }, [avaliableClasses])

  useEffect(() => {
    activeTypeRailwayCarriage === type ? setActive(true) : setActive(false);
  }, [activeTypeRailwayCarriage])

  // const clickItem = () => {
  //   if (activeTypeRailwayCarriage !== type) 
  //     dispatch(setActiveTypeRailwayCarriage(type))
  // }

  return (
    <div onClick={() => clickTypeElement(type)} 
    className={`item__railway-carriage ${isActive ? 'item__railway-carriage-active' : ''}`}>
      {children}
    </div>
  )
}

export default TypeRailwayCarriage