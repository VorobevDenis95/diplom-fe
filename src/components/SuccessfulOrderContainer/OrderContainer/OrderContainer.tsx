import { useEffect, useState } from 'react';
import OrderGrade from '../OrderGrade/OrderGrade';
import OrderMain from '../OrderMain/OrderMain';
import './OrderContainer.css';
import OrderHeader from './OrderHeader/OrderHeader';
import OrderInfo from './OrderInfoTicket/OrderInfo';
import { useAppSelector } from '../../../shared/redux/redux-hooks';
import { OrderDataProps } from '../../../shared/types/typesOrder';
import { sendOrder } from '../../../shared/api/serviceApi';
import Loader from '../../Loader/Loader';


const OrderContainer = () => {

  const [isLoad, setLoad] = useState(false);
  const {tickets} = useAppSelector(state => state.train);
  const [total, setTotal] = useState(tickets.reduce((acc, el) => acc + el.price, 0));
  const { order } = useAppSelector(state => state.order);
  const [active, setActive] = useState(false);


  useEffect(() => {
    setTotal(tickets.reduce((acc, el) => acc + el.price, 0));
  }, [tickets])

  async function sendData(data: OrderDataProps) {
    setLoad(true);
    const response = await sendOrder(data);
    if (response) {
      setActive(response.status);
    }
    setLoad(false);
  }

  useEffect(() => {
    if (order) {
      sendData(order)
    }
  }, [order])

  return (
    <>
      { isLoad && <Loader />}
      { !isLoad && active && order &&
        <div className="successful-order">
          <div className="succesful-order-content">
            <h3 className="successful-order__title">Благодарим Вас за заказ!</h3>
            <div className="succesful-order-content-basic">
              <OrderHeader orderNumber='285AA' price={total} />
              <OrderInfo />
              <OrderMain first_name={order?.user.first_name} last_name={order?.user.last_name} />
              <OrderGrade />
            </div>
          </div>
        </div>

      }
    </>

  )
}

export default OrderContainer;