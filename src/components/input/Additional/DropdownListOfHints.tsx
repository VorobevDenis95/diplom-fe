import { DropListProps } from "../../../shared/types/components/componentsTypes";
import { CityProps } from "../../../shared/types/types";
import './DropdownListOfHints.css';

const DropdownListOfHints = ({list, handleClick, isActive} : DropListProps ) => {
  return (
    isActive && list &&
      <ul className="list__clue-cities">
        {
          list.map((el: CityProps) => (
         <li key={el._id} onClick={() => handleClick(el)}
         >{el.name.toUpperCase()}</li>
     ))
        }
        </ul>
    
  )
}

export default DropdownListOfHints;