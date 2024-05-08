import { ReactNode } from 'react';
import './BodyContainer.css';

interface BodyContainer {
  children: ReactNode;
}

const BodyContainer = ({children} : BodyContainer) => {
  return (
    {children}
  )
}

export default BodyContainer;