import { PoginationItemElementProps } from '../../shared/types/components/componentsTypes';
import './PoginationItemElement.css';

const PoginationItemElement = ({numberPage, currentPage, clickPage} :PoginationItemElementProps) => {
  
  return (
    <div onClick={() => clickPage(numberPage)}
     className={`page-number__item ${currentPage === numberPage ? 'current__number' : ''}`}>
      {numberPage }
    </div>
  )
}

export default PoginationItemElement;