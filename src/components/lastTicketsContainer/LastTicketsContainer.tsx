import { useNavigate } from "react-router-dom";
import SelectSeatsContainer from "../TrainRoutes/SelectSeatsContainer/SelectSeatsContainer";
import { capitalized } from "../utils";
import './LastTicketsContainer.css';
import { LastTicketsContainerProps } from "../../shared/types/components/componentsTypes";

const LastTicketsContainer = ({list}: LastTicketsContainerProps) => {
  const navigate = useNavigate()
  const clickLastTicket = (id: string) => {
    navigate(`/diplom-fe/routes/${id}/seats`);
  }
  
  return (
    <>
      <div className="last-tickets">
        <h3 className="last-tickets__title">ПОСЛЕДНИЕ БИЛЕТЫ</h3>
        {list.map((item) => (
        
        <div onClick={() => clickLastTicket(item.departure._id)}
         key={item.departure._id} className="last-ticket__item">
          <div className="last-ticket__item__container">
            <div className="last-ticket__item__patch-container">
              <span className="patch-container-name-city">
                {capitalized(item.departure.from.city.name)}
              </span>
              <span className="patch-container-name-station">
                {item.departure.from.railway_station_name}
              </span>
            </div>
            <div className="last-ticket__item__patch-container">
              <span className="patch-container-name-city">
                {capitalized(item.departure.to.city.name)}
              </span>
              <span className="patch-container-name-station">
                {item.departure.to.railway_station_name}
              </span>
            </div>

          </div>
          
        <div className="last-ticket__item__bottom">

          <div className="last-ticket__item__bottom__price-container">
            <div className="last-ticket__item__bottom__price-container__box">
              <SelectSeatsContainer have_air_conditioning={item.have_air_conditioning}
              have_wifi={item.have_wifi} is_express={item.is_express} />
            </div>
            <div className="last-ticket__item__bottom__price-container-box-price">
              <span>от</span>
              <span className="last-ticket__price">{item.departure.min_price.toLocaleString('ru-RU')}</span>
              <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00056 15.0063C5.00056 15.8463 5.00056 16.6697 5.00056 17.5031C7.08079 17.5031 9.15436 17.5031 11.2379 17.5031C11.2379 18.3398 11.2379 19.1665 11.2379 20.0065C9.16103 20.0065 7.08413 20.0065 5.00056 20.0065C5.00056 21.6765 5.00056 23.3333 5.00056 25C4.1638 25 3.33704 25 2.49695 25C2.49695 23.3399 2.49695 21.6799 2.49695 20.0132C1.66019 20.0132 0.83676 20.0132 0.00333371 20.0132C0.00333371 19.1765 0.00333371 18.3498 0.00333371 17.5097C0.830093 17.5097 1.65685 17.5097 2.48694 17.5097C2.48694 16.673 2.48694 15.8497 2.48694 15.013C1.66019 15.013 0.833427 15.013 0 15.013C0 14.1729 0 13.3462 0 12.5096C0.826759 12.5096 1.65352 12.5096 2.49028 12.5096C2.49028 8.3394 2.49028 4.17925 2.49028 0.0124341C2.54028 0.00910067 2.57362 0.00576722 2.61029 0.00576722C5.944 0.00576722 9.2777 -0.0109 12.6114 0.0124341C14.535 0.0257679 16.2085 0.729127 17.6153 2.04251C18.7954 3.14255 19.5555 4.48926 19.8556 6.07599C20.2723 8.28607 19.7855 10.3028 18.4187 12.0895C17.482 13.3162 16.2585 14.1629 14.7917 14.6463C14.0749 14.883 13.3382 15.0063 12.5847 15.0063C10.1078 15.0096 7.63419 15.0063 5.15724 15.0096C5.10724 15.0063 5.05723 15.0063 5.00056 15.0063ZM5.00389 2.50586C5.00389 5.84931 5.00389 9.1761 5.00389 12.5062C5.04056 12.5062 5.07057 12.5062 5.10057 12.5062C7.60085 12.5062 10.1011 12.5129 12.6014 12.4995C12.9881 12.4962 13.3848 12.4395 13.7582 12.3429C16.4018 11.6429 17.972 9.04276 17.3719 6.386C16.8586 4.11925 14.8383 2.50586 12.5114 2.50586C10.0611 2.50586 7.61085 2.50586 5.16058 2.50586C5.11057 2.50586 5.06057 2.50586 5.00389 2.50586Z" fill="#928F94"/>
              </svg>
            </div>
          </div>
        </div>
        </div>
          
        ))}

      </div>

    </>
  )
}

export default LastTicketsContainer;
