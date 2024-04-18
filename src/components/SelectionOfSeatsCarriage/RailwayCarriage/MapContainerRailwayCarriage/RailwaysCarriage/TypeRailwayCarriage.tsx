import { useState } from 'react';
import './TypeRailwayCarriage.css';


interface TypeRailwayCarriageProps {
  type: 'first' | 'second' | 'thirth' | 'fourt';
}

const TypeRailwayCarriage = () => {
  

  const [isActive, setActive] = useState(false);
  
  return (



    <div>
      <h3>Тип вагона</h3>
    </div>
  )
}

export default TypeRailwayCarriage