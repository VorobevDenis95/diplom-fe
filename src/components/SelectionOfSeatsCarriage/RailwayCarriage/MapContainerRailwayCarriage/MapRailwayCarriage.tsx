import { useAppSelector } from "../../../../shared/redux/redux-hooks"
import { RailwayCarriageItemProps } from "./RailwaysCarriage/ThirthRailwayCarriage/ThirthRailwayCarriage"
import SeatPositionFirst from "./SeatsPosition/SeatPositionFirst/SeatPositionFirst"
import SeatPositionFour from "./SeatsPosition/SeatPositionFour/SeatPositionFour"
import SeatPositionSecond from "./SeatsPosition/SeatPositionSecond/SeatPositionSecond"
import SeatPositionThirth from "./SeatsPosition/SeatPositionThirth/SeatPositionThirth"

const MapRailwayCarriage = ({seats} :RailwayCarriageItemProps) => {
  const {activeTypeRailwayCarriage} = useAppSelector(state => state.train)
  
  return (
    <>
      {activeTypeRailwayCarriage === "first" &&
        <SeatPositionFirst seats={seats} />
      }
      {activeTypeRailwayCarriage === "second" &&
        <SeatPositionSecond seats={seats} />
      }
      {activeTypeRailwayCarriage === "third" &&
        <SeatPositionThirth seats={seats} />
      }
      {activeTypeRailwayCarriage === "fourth" &&
        <SeatPositionFour seats={seats} />
      }
    </>
  )
}

export default MapRailwayCarriage;