import './PoginationItemElement.css';


interface PoginationItemElementProps {
  numberPage: string | number ;
  currentPage?: number;
  clickPage: (num: number | string) => void;
}
const PoginationItemElement = ({numberPage, currentPage, clickPage} :PoginationItemElementProps) => {
  
  return (
    <div onClick={() => clickPage(numberPage)}
     className={`page-number__item ${currentPage === numberPage ? 'current__number' : ''}`}>
      {numberPage }
    </div>
  )
}

export default PoginationItemElement;