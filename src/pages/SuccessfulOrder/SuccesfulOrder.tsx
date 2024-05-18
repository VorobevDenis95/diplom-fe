import OrderGrade from '../../components/SuccessfulOrderContainer/OrderGrade/OrderGrade';
import './SuccesfulOrder.css';


const SuccesfulOrder = () => {


  return (
    <div className="successful-order">
      <div className="succesful-order-content">
        <h3 className="successful-order__title">Благодарим Вас за заказ</h3>
        <div className="succesful-order-content-basic">
          <OrderGrade />
        

        </div>
      </div>
    </div>
  )
}

export default SuccesfulOrder;