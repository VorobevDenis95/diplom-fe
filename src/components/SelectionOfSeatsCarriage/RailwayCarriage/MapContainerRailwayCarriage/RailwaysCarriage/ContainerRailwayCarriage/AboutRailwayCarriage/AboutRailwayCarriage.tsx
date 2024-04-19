import { useEffect, useState } from "react";
import { ContainerRailwayCarriageProps } from "../ContainerRailwayCarriage";
import { TypeRailwayCarriage } from "../../../../../../../shared/types/typesTrain";
import { useAppSelector } from "../../../../../../../shared/redux/redux-hooks";
import MapRailwayCarriage from "../../../MapRailwayCarriage";

const AboutRailwayCarriage = ({data} :ContainerRailwayCarriageProps) => {

  const {activeTypeRailwayCarriage} = useAppSelector(state => state.train);

  const [avaliableClasses, setAvaliableClasses] = useState<TypeRailwayCarriage[]>([]); 
  const [avaliableCarriages, setCarriages] = useState<string[]>([]); 


  function addAvilableClasses () {
    const arr:TypeRailwayCarriage [] = [];
    data.map((el) => {
      arr.push(el.coach.class_type)
    }) 
    return arr;
  }

  function addAvilableCarriages () {
    const arr: string[] = [];
    data.map((el) => {
      arr.push(el.coach.name)
    })
  }


  const [listRailwayCarriageName, setListRailwayCarriage] = useState([]);

  useEffect(() => {
    const data = addAvilableClasses();
    const names = addAvilableClasses();
    setAvaliableClasses(data)
    setCarriages(names)


  }, [data])
  
  return (
    <>

{     activeTypeRailwayCarriage &&
      <div>
        <span>Вагоны</span>
        {avaliableCarriages.map((name) => (
          <div>{name}</div>
        ))}
        <div>Нумерация вагонов начинается с головы поезда</div>
      </div>}


      <MapRailwayCarriage seats={data[0].seats} />

    </>
  )
}

export default AboutRailwayCarriage;