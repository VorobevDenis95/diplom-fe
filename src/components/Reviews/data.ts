import { ReviewsProps } from '../../shared/types/components/componentsTypes';
import user1 from '../../assets/images/image/reviews/1.png';
import user2 from '../../assets/images/image/reviews/2.png';

export const listReviews : ReviewsProps[] = [
  {
    src: user1,
    name: 'Екатерина Вальнова',
    text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.'
  },
  {
    src: user2,
    name: 'Евгений Стрыкало',
    text: 'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.'
  }
]