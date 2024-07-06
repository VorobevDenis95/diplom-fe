import { useState } from "react";
import GradeStar from "./GradeStar/GradeStar";
import './OrderGrade.css'
import { useNavigate } from "react-router-dom";

const OrderGrade = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  const navigate = useNavigate();

  const handleClickStar = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  }

  const handleHoverStar = (index: number) => {
    if (hoverIndex !== index) {
      setHoverIndex(index);
    }
  }

  const handleLeaveStar = () => {
    setHoverIndex(0);
  }

  return (
    <div className="order__grade">

      <div className="order__grade-stars-сontainer">
        <p>Оценить сервис</p>
        <div className="order__grade-stars">
          <GradeStar activeIndex={activeIndex}
            activeHover={hoverIndex}
            hoverStar={handleHoverStar}
            leaveStar={handleLeaveStar}
            index={1} clickStar={handleClickStar} />
          <GradeStar
            activeHover={hoverIndex}
            hoverStar={handleHoverStar}
            leaveStar={handleLeaveStar}
            activeIndex={activeIndex}
            index={2} clickStar={handleClickStar} />
          <GradeStar
            activeHover={hoverIndex}
            hoverStar={handleHoverStar} 
            leaveStar={handleLeaveStar}
            activeIndex={activeIndex}
            index={3} clickStar={handleClickStar} />
          <GradeStar
            activeHover={hoverIndex}
            hoverStar={handleHoverStar}
            leaveStar={handleLeaveStar}
            activeIndex={activeIndex}
            index={4} clickStar={handleClickStar} />
          <GradeStar
            activeHover={hoverIndex}
            hoverStar={handleHoverStar}
            leaveStar={handleLeaveStar}
            activeIndex={activeIndex}
            index={5} clickStar={handleClickStar} />
        </div>
      </div>
      <button onClick={() => navigate('/diplom-fe')}
       className="order__grade-btn">ВЕРНУТЬСЯ НА ГЛАВНУЮ</button>
    </div>
  )
}

export default OrderGrade;