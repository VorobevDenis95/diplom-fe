import Reviews from "./Reviews";
import './ReviewsContainer.css';
import ReviewsSlider from "./ReviewsSlider";
import { listReviews } from "./data";

const ReviewsContainer = () => {
  return (
    <div className="reviews" id="reviews">
      <h2>
        Отзывы
      </h2>
      <div className="reviews__container">
        {listReviews.map((el) => (
          <>
            <Reviews name={el.name} 
            src={el.src} text={el.text} />
          </>
        ))}
      </div>
      <ReviewsSlider />
    </div>
  )
}

export default ReviewsContainer;