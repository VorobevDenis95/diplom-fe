import { ReviewsProps } from '../../shared/types/components/componentsTypes';
import './Reviews.css';

const Reviews = ({src, name, text} :ReviewsProps) => {
  return (

        <div className="reviews-item">
          <img className="reviews-item_photo-user" src={src} alt="photo user" />
          <div className="reviews-item__container">
            <span className='reviews-item__container-name'>{name}</span>
          

            <div className='reviews-item__container-text-container'>
                <div className='quote__container'>
                <svg className='quote' width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.11523 0.542969L6.29492 1.89648C5.22852 3.45508 4.67773 5.07812 4.64258 6.76562V9.4375H0.898438V7.01172C0.910156 5.88672 1.21484 4.71484 1.8125 3.49609C2.42188 2.26562 3.18945 1.28125 4.11523 0.542969ZM10.0215 0.542969L12.2012 1.89648C11.1348 3.45508 10.584 5.07812 10.5488 6.76562V9.4375H6.80469V7.01172C6.81641 5.88672 7.12109 4.71484 7.71875 3.49609C8.32812 2.26562 9.0957 1.28125 10.0215 0.542969Z" fill="#928F94"/>
                </svg>
                </div>
                <div className='reviews-item__container-text'>
                  {text}
                  <svg className='quote' 
                  width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.11523 0.542969L6.29492 1.89648C5.22852 3.45508 4.67773 5.07812 4.64258 6.76562V9.4375H0.898438V7.01172C0.910156 5.88672 1.21484 4.71484 1.8125 3.49609C2.42188 2.26562 3.18945 1.28125 4.11523 0.542969ZM10.0215 0.542969L12.2012 1.89648C11.1348 3.45508 10.584 5.07812 10.5488 6.76562V9.4375H6.80469V7.01172C6.81641 5.88672 7.12109 4.71484 7.71875 3.49609C8.32812 2.26562 9.0957 1.28125 10.0215 0.542969Z" fill="#928F94"/>
                </svg>
                </div>

        
            </div>
          </div>
        </div>
  )
}

export default Reviews;