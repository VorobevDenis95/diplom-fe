import desktopIcon from '../../../assets/images/svg/order/ticket-icon.svg';
import ticketIcon from '../../../assets/images/svg/order/ticket-icon-mobile.svg';
// import humanIcon from '../../../assets/images/svg/order/human-icon.svg';

const OrderInfo = () => {
  return (
    <div className="order__info">
      <div className="order__info-item">
        <img src={desktopIcon} alt="desktop icon" />
        <p>билеты будут отправлены на ваш <b>e-mail</b></p>
      </div>
      <div className="order__info-item">
        <img src={ticketIcon} alt="desktop icon" />
        <p>билеты <b></b></p>
      </div>
      <div className="order__info-item">
        <img src={desktopIcon} alt="desktop icon" />
        <p>билеты будут отправлены на ваш <b>e-mail</b></p>
      </div>
    </div>
  )
}

export default OrderInfo;