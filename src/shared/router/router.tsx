import { createBrowserRouter } from 'react-router-dom';
import FormDirection from '../../components/form/FormDirection/FormDirection';
import Header from '../../components/header/Header';
import Root from '../../pages/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>
  }
]);
