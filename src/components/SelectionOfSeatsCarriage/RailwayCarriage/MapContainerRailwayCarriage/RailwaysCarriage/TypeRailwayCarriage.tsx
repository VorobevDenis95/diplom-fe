import { useEffect, useState } from 'react';
import './TypeRailwayCarriage.css';
import type { TypeRailwayCarriage } from '../../../../../shared/types/typesTrain';
import { useAppSelector } from '../../../../../shared/redux/redux-hooks';
// import { DirectionTrainStore } from '../../../../../shared/redux/slice/trainSlice';
// import { setActiveTypeRailwayCarriage } from '../../../../../shared/redux/slice/trainSlice';



interface TypeRailwayCarriageProps {
  type: TypeRailwayCarriage;
  children: React.ReactNode;
  activeType: TypeRailwayCarriage;
  typeDirection: 'departure' | 'arrival';
  clickTypeElement: (type: TypeRailwayCarriage) => void;

}

const TypeRailwayCarriage = ({type, children, typeDirection, clickTypeElement}: TypeRailwayCarriageProps) => {
  
  const {arrival, departure} = useAppSelector(state => state.train);
  
  const [activeDirection, setActiveDirection] = useState(typeDirection ==="departure" ? departure : arrival);

  useEffect(() => { 
    typeDirection ==="departure" ? setActiveDirection(departure) : setActiveDirection(arrival);
  }, [typeDirection, departure, arrival])


//  const {departure} = useAppSelector(state => state.train);

// const dispatch = useAppDispatch();
  // const [isDisable, setDisable] = useState(false);
  const [isActive, setActive] = useState(false);
  // const {activeTypeRailwayCarriage} = useAppSelector(state => state.train);
  
  // useEffect(() => {
  //   avaliableClasses.includes(type) ? setDisable(false) : setDisable(true);
  // }, [avaliableClasses])

  useEffect(() => {
    activeDirection.activeTypeRailwayCarriage === type ? setActive(true) : setActive(false);
  }, [activeDirection])

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