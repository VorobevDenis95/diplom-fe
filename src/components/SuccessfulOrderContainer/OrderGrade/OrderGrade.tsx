import { useState } from "react";
import GradeStar from "./GradeStar/GradeStar";
import './OrderGrade.css'

const OrderGrade = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickStar = (index: number) => {
    setActiveIndex(index);
  }

  return (
    <div className="order__grade">

      <div className="order__grade-stars-сontainer">
        <p>Оценить сервис</p>
        <div className="order__grade-stars">
          <GradeStar activeIndex={activeIndex}
            index={1} clickStar={handleClickStar} />
          <GradeStar activeIndex={activeIndex}
            index={2} clickStar={handleClickStar} />
          <GradeStar activeIndex={activeIndex}
            index={3} clickStar={handleClickStar} />
          <GradeStar activeIndex={activeIndex}
            index={4} clickStar={handleClickStar} />
          <GradeStar activeIndex={activeIndex}
            index={5} clickStar={handleClickStar} />
        </div>
      </div>
      <button className="order__grade-btn">ВЕРНУТЬСЯ НА ГЛАВНУЮ</button>
    </div>
  )
}

export default OrderGrade;