import { createBrowserRouter } from 'react-router-dom';
import FormDirection from '../../components/form/FormDirection/FormDirection';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <FormDirection />
  }
]);
