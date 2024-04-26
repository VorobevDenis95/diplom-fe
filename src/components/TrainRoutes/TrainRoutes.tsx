import { useNavigate } from "react-router-dom";
import { TraineRoutesItemProps } from "../../shared/types/typesRoutesBilets";
import { capitalized } from "../utils";
import AboutRouteContainerDirectLine from "./AboutRouteContainer/AboutRouteContainerDirectLine";
import AboutRouteContainerDirectLineBack from "./AboutRouteContainer/AboutRouteContainerDirectLineBack";
import RouteCategoriesSeatsContainer from "./RouteCategoriesSeatsContainer/RouteCategoriesSeatsContainer";
import SelectSeatsContainer from "./SelectSeatsContainer/SelectSeatsContainer";
import './TrainRoutes.css';
import { useAppDispatch } from "../../shared/redux/redux-hooks";
import { setTrain } from "../../shared/redux/slice/trainSlice";

const TrainRoutes = ({ item }: TraineRoutesItemProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickSelectSeats = (item: TraineRoutesItemProps['item']) => {
    dispatch(setTrain(item));
    navigate(`/routes/${item.departure._id}/seats`);
  }

  return (
    <div className="train-routes__item">
      <div className="train-routes__item__head">
        <svg className='train-routes__item__head__icon-train' width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M55.7879 63.7038C56.7164 65.6856 59.433 66.369 59.5361 69C48.4635 69 37.5284 69 26.4557 69C26.6277 66.4031 29.2755 65.6856 30.2727 63.7379C29.3786 63.5329 28.5534 63.3962 27.7625 63.157C23.8423 61.9611 21.057 58.3392 21.057 54.2047C20.9882 45.389 20.9882 36.6416 21.0226 27.8601C21.0226 23.794 22.9139 20.7187 26.7308 19.3861C29.8257 18.3269 33.1268 17.6777 36.3936 17.3701C42.7896 16.7893 49.22 16.7893 55.5472 18.1219C57.1634 18.4636 58.7452 19.0444 60.1895 19.762C63.2843 21.2996 64.9005 23.9306 64.9349 27.3134C65.0037 36.3683 65.0381 45.4232 64.9349 54.478C64.9005 58.6467 61.8057 62.2003 57.748 63.2254C57.129 63.4304 56.4757 63.5329 55.7879 63.7038ZM40.1762 28.1676C35.5683 28.1676 31.0636 28.1676 26.6277 28.1676C26.6277 32.7463 26.6277 37.1884 26.6277 41.6304C31.2012 41.6304 35.6371 41.6304 40.1762 41.6304C40.1762 37.12 40.1762 32.7122 40.1762 28.1676ZM59.433 28.1676C54.8251 28.1676 50.3204 28.1676 45.8844 28.1676C45.8844 32.7463 45.8844 37.1884 45.8844 41.6304C50.4579 41.6304 54.8939 41.6304 59.433 41.6304C59.433 37.12 59.433 32.7122 59.433 28.1676ZM34.743 54.068C34.7774 51.8128 32.8861 49.9335 30.6166 49.9335C28.4158 49.9335 26.5589 51.7103 26.4901 53.8972C26.4214 56.1523 28.2439 58.0658 30.5134 58.1342C32.8174 58.1683 34.7086 56.3232 34.743 54.068ZM59.5017 53.9997C59.5017 51.7445 57.5761 49.8993 55.3065 49.9335C53.1057 49.9677 51.2832 51.7787 51.2488 53.9655C51.2144 56.2207 53.0713 58.1 55.3409 58.1342C57.6448 58.1342 59.5017 56.2548 59.5017 53.9997Z" fill="white" />
          <circle cx="43" cy="43" r="42" stroke="white" strokeWidth="2" />
        </svg>
        <span className="train-routes__item__head-name-train">{item.departure.train.name}</span>
        <div className="train-routes__item__head-routes">
          {`${capitalized(item.departure.from.city.name)} →	${capitalized(item.departure.to.city.name)}`}
        </div>
      </div>
      <div className="train-routes__item__content">
        <AboutRouteContainerDirectLine item={item.departure} />
        {item.arrival && <AboutRouteContainerDirectLineBack item={item.arrival} />}
      </div>
      <div className="train-routes__item__categories">
        <div className="">
          <RouteCategoriesSeatsContainer item={item} />
        </div>
        <div className='train-routes__item__categories__container'>
          <SelectSeatsContainer
            have_air_conditioning={item.departure.have_air_conditioning}
            have_wifi={item.departure.have_wifi}
            is_express={item.departure.is_express}
          />
          <button onClick={() => clickSelectSeats(item)}
            className="train-routes__item__btn-select-seats">Выбрать места</button>
        </div>

      </div>
    </div>
  )
}

export default TrainRoutes;