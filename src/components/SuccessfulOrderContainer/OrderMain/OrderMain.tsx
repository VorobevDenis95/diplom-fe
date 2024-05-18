import { OrderMainProps } from "../../../shared/types/typesOrder"
import './OrderMain.css';

const OrderMain = ({ first_name, last_name }: OrderMainProps) => {

  return (
    <div className="order__main">
      <p className="order__main__body">
        <span className="order__main__body-title">{first_name} {last_name}!</span>
        <p className="order_main-body-text">
          <span>Ваш заказ успешно оформлен.</span>
          В ближайшее время с вами свяжется наш оператор для подтверждения.
        </p>
        <p className="order_main-body-text-bold">
          Благодарим Вас за оказанное доверие и желаем приятного путешествия!
        </p>
      </p>
    </div>
  )
}

export default OrderMain;