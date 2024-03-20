import { CityProps } from "../../../shared/types/types";
import './DropdownListOfHints.css';

interface DropListProps {
  list: CityProps[],
  handleClick: (el: CityProps) => void,
  isActive: boolean
}

const DropdownListOfHints = ({list, handleClick, isActive} : DropListProps ) => {
  return (
    isActive && list &&
      <ul className="list__clue-cities">
        {
          list.map((el: CityProps) => (
         <li onClick={() => handleClick(el)}
         key={el.id}>{el.name.toUpperCase()}</li>
     ))
        }
        </ul>
    
  )
}

export default DropdownListOfHints;