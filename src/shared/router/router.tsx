import { createBrowserRouter } from 'react-router-dom';
import Root from '../../pages/Root';
import TrainSelection from '../../pages/TrainSelection/TrainSelection';
import RailwayCarriage from '../../components/SelectionOfSeatsCarriage/RailwayCarriage/RailwayCarriage';
import Passenger from '../../pages/Passenger/Passenger';
import Payment from '../../pages/Payment/Payment';
import Confirmation from '../../pages/Confirmation/Confirmation';
import SuccesfulOrder from '../../pages/SuccessfulOrder/SuccesfulOrder';
import Main from '../../pages/Main/Main';

export const router = createBrowserRouter([
  {
    path: '/diplom-fe/',
    element: <Root/>,
    children: [
      {
        path: '/diplom-fe/',
        element: 
          <Main />
      },
      {
        path: 'routes/:from_city_id/:to_city_id/:date_start?/:date_end?/:offset?',
        element: <TrainSelection />,
      },
      {
        path: 'routes/:id/:id2?/seats',
        element: <RailwayCarriage />
      },
      {
        path: 'passengers',
        element: <Passenger />
      },
      {
        path: 'payment',
        element: <Payment />
      }, 
      {
        path: 'confirmation',
        element: <Confirmation />
      },
      {
        path: 'order',
        element: <SuccesfulOrder />,
      }
    ]
  }
]);
