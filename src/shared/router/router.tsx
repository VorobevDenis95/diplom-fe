import { createBrowserRouter } from 'react-router-dom';
import Root from '../../pages/Root';
import About from '../../pages/About/About';
import HowItWork from '../../pages/HowItWork/HowItWork';
import TrainSelection from '../../pages/TrainSelection.tsx/TrainSelection';
import RailwayCarriage from '../../components/SelectionOfSeatsCarriage/RailwayCarriage/RailwayCarriage';
import Passenger from '../../pages/Passenger/Passenger';
import ReviewsContainer from '../../components/Reviews/ReviewsContainer';
import Payment from '../../pages/Payment/Payment';
import Confirmation from '../../pages/Confirmation/Confirmation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: 
        <>
          <About />
          <HowItWork />
          <ReviewsContainer />
        </>
      },
      {
        path: '/routes/:from_city_id/:to_city_id/:date_start?/:date_end?/:offset?',
        element: <TrainSelection />,
      },
      {
        path: '/routes/:id/:id2?/seats',
        element: <RailwayCarriage />
      },
      {
        path: '/passengers',
        element: <Passenger />
      },
      {
        path: '/payment',
        element: <Payment />
      }, 
      {
        path: '/confirmation',
        element: <Confirmation />
      }
    ]
  }
]);
