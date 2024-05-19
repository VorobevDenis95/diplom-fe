import OrderGrade from '../OrderGrade/OrderGrade';
import OrderMain from '../OrderMain/OrderMain';
import './OrderContainer.css';
import OrderHeader from './OrderHeader/OrderHeader';
import OrderInfo from './OrderInfoTicket/OrderInfo';


const OrderContainer = () => {
  return (
    <div className="successful-order">
    <div className="succesful-order-content">
      <h3 className="successful-order__title">Благодарим Вас за заказ!</h3>
      <div className="succesful-order-content-basic">
        <OrderHeader orderNumber='285AA' price={50430}/>
        <OrderInfo />
        <OrderMain first_name='Иван' last_name='Кох'/>
        <OrderGrade />
      </div>
    </div>
  </div>
  )
}

export default OrderContainer;