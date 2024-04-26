import { createBrowserRouter } from 'react-router-dom';
import Root from '../../pages/Root';
import About from '../../pages/About/About';
import HowItWork from '../../pages/HowItWork/HowItWork';
import TrainSelection from '../../pages/TrainSelection.tsx/TrainSelection';
import RailwayCarriage from '../../components/SelectionOfSeatsCarriage/RailwayCarriage/RailwayCarriage';

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

    ]
  }
]);
