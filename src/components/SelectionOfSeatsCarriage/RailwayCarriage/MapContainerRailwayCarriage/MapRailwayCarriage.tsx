import { useEffect, useState } from "react"
import { useAppSelector } from "../../../../shared/redux/redux-hooks"
import { SeatsProps } from "../../../../shared/types/typesSeats"
// import { RailwayCarriageItemProps } from "./RailwaysCarriage/ThirthRailwayCarriage/ThirthRailwayCarriage"
import SeatPositionFirst from "./SeatsPosition/SeatPositionFirst/SeatPositionFirst"
import SeatPositionFour from "./SeatsPosition/SeatPositionFour/SeatPositionFour"
import SeatPositionSecond from "./SeatsPosition/SeatPositionSecond/SeatPositionSecond"
import SeatPositionThirth from "./SeatsPosition/SeatPositionThirth/SeatPositionThirth"

export interface RailwayCarriageItemMapProps {
  seats: SeatsProps[],
  typeDirection: 'departure' | 'arrival';
}

const MapRailwayCarriage = ({seats, typeDirection} :RailwayCarriageItemMapProps) => {
  // console.log(seats)
  // const {activeTypeRailwayCarriage} = useAppSelector(state => state.train);

  const {arrival, departure} = useAppSelector(state => state.train);
  const [activeDirection, setActiveDirection] = useState(typeDirection ==="departure" ? departure : arrival);

  useEffect(() => { 
    typeDirection ==="departure" ? setActiveDirection(departure) : setActiveDirection(arrival);
  }, [typeDirection, departure, arrival])

  useEffect(() => {
    console.log(activeDirection.activeNumberCars)
  }, [activeDirection.activeTypeRailwayCarriage])
  
  return (
    <>
      {activeDirection.activeTypeRailwayCarriage === "first" &&
        <SeatPositionFirst seats={seats} typeDirection={typeDirection}/>
      }
      {activeDirection.activeTypeRailwayCarriage === "second" &&
        <SeatPositionSecond seats={seats} typeDirection={typeDirection}/>
      }
      {activeDirection.activeTypeRailwayCarriage === "third" &&
        <SeatPositionThirth seats={seats} typeDirection={typeDirection}/>
      }
      {activeDirection.activeTypeRailwayCarriage === "fourth" &&
        <SeatPositionFour seats={seats} typeDirection={typeDirection}/>
      }
    </>
  )
}

export default MapRailwayCarriage;