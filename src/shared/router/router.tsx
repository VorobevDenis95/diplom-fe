import { createBrowserRouter } from 'react-router-dom';
import FormDirection from '../../components/form/FormDirection/FormDirection';
import Header from '../../components/header/Header';
import Root from '../../pages/Root';
import About from '../../pages/About/About';
import HowItWork from '../../pages/HowItWork/HowItWork';
import TrainSelection from '../../pages/TrainSelection.tsx/TrainSelection';

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
        path: '/routes/:cityFrom/:cityTo/:dateStart/:dateEnd',
        element: <TrainSelection />,
      }

    ]
  }
]);
