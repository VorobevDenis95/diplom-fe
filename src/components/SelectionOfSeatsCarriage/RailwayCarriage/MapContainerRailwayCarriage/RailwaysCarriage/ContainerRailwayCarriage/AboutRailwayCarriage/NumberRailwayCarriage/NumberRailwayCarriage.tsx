import { useEffect, useState } from "react";
import { NumberCarriageProps } from "../AboutRailwayCarriage";
import './NumberRailwayCarriage.css';
import { searchNumber } from "../utils";

interface NumberRailwayCarriageProps {
  item: NumberCarriageProps,
  selectedItem: number,
  clickNumberCarriage: (item: NumberCarriageProps) => void,
  
  // onClick: (el: {
  //   number: string,
  //   index:
  // })
}

const NumberRailwayCarriage = ({item, selectedItem = 0, clickNumberCarriage} :NumberRailwayCarriageProps) => {
  
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (item)
    item.index === selectedItem ? setActive(true) : setActive(false);
  }, [selectedItem])

  return (
    <div  onClick={() => clickNumberCarriage(item)}
    className={`railway-carriage__number ${isActive ? 'active-carriage-number' : ''}`}>
      {searchNumber(item.name)}
    </div>
  )
}

export default NumberRailwayCarriage;