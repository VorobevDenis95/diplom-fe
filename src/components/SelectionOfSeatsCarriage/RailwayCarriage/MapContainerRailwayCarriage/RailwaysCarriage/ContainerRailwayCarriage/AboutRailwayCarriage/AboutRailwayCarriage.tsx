import { useEffect, useState } from "react";
import { ContainerRailwayCarriageProps } from "../ContainerRailwayCarriage";
import { TypeRailwayCarriage } from "../../../../../../../shared/types/typesTrain";
import { useAppDispatch, useAppSelector } from "../../../../../../../shared/redux/redux-hooks";
import MapRailwayCarriage from "../../../MapRailwayCarriage";
import NumberRailwayCarriage from "./NumberRailwayCarriage/NumberRailwayCarriage";
import './AboutRailwayCarriage.css';
import { searchNumber } from "./utils";
import RailwayCarriageInfoContainer from "./RailwayCarriageInfoContainer/RailwayCarriageInfoContainer";
import SelectSeatsContainer2 from "../../../../../../TrainRoutes/SelectSeatsContainer/SelectSeatsContainer2";
import { setActiveNumberCars, setCoach } from "../../../../../../../shared/redux/slice/trainSlice";
import TotalPrice from "./TotalPrice";

export interface NumberCarriageProps {
  name: string,
  index: number,
}

const AboutRailwayCarriage = ({data} :ContainerRailwayCarriageProps) => {


  const dispatch = useAppDispatch(); 
  const {activeTypeRailwayCarriage, totalPrice} = useAppSelector(state => state.train);

  const [avaliableClasses, setAvaliableClasses] = useState<TypeRailwayCarriage[]>([]); 
  const [avaliableCarriages, setCarriages] = useState<NumberCarriageProps[]>([]); 
  const [selectedCarriage, setSelectedCarriage] = useState(0);
  const [seatsListIndex, setSeatsListIndex] = useState(0);

  function addAvilableClasses () {
    const arr:TypeRailwayCarriage [] = [];
    data.map((el) => {
      arr.push(el.coach.class_type)
    }) 
    return arr;
  }

  function addAvilableCarriages () {
      const arr = data.filter(el => el.coach.class_type === activeTypeRailwayCarriage)
                      .map((el, index) => ({ name: el.coach.name, index }));
      return arr;
    // const arr = [];
    // // console.log(y)
    // data.map((el, index) => {
    //   console.log(activeTypeRailwayCarriage)
    //   if (el.coach.class_type === activeTypeRailwayCarriage) {
    //     const item = {
    //       name: el.coach.name,
    //       index,
    //     }
    //     console.log(item)
    //     arr.push(item)
    //   }
    // })
    // console.log(arr);
    // return arr;
  }

  const [listRailwayCarriageName, setListRailwayCarriage] = useState([]);

  useEffect(() => {
    const data = addAvilableClasses();
    setAvaliableClasses(data)
  }, [data])
  
  useEffect(() => {
    const names = addAvilableCarriages();
    setCarriages(names)
    setSelectedCarriage(0);
    // dispatch(setActiveNumberCars(searchNumber(avaliableCarriages[selectedCarriage]?.name)))
  }, [activeTypeRailwayCarriage]);

  useEffect(() => {
    const i = data.findIndex((el) => el.coach.name === avaliableCarriages[0]?.name);
    console.log(i);
    if (i >= 0) setSeatsListIndex(i)
  }, [avaliableCarriages])

  useEffect(() => {
    // console.log(seatsListIndex);
    dispatch(setActiveNumberCars(searchNumber(data[seatsListIndex].coach.name)));
    dispatch(setCoach(data[seatsListIndex].coach));
    
  }, [seatsListIndex])


  const clickNumberCarriage = (item: NumberCarriageProps) => {
    setSelectedCarriage(item.index);
    // dispatch(setActiveNumberCars(searchNumber(avaliableCarriages[selectedCarriage]?.name)))
    // console.log(item.index)
    const i = data.findIndex((el) => el.coach.name === item.name);
    if (i >= 0) setSeatsListIndex(i)
    console.log(avaliableCarriages)
  }

  return (
    <>

{     activeTypeRailwayCarriage &&
      <div className="about__railway-carrage">
        <div className="about__railway-carrage__container">
          <span>Вагоны </span>
          {avaliableCarriages.map((item) => (
            <NumberRailwayCarriage selectedItem={selectedCarriage} item={item}
            key={item.index}
            clickNumberCarriage={clickNumberCarriage} />
          ))}
        </div>
        <div>Нумерация вагонов начинается с головы поезда</div>
      </div>}
      <div className="about__railway-carrage-seats-price-container">
          {avaliableCarriages.length > 0 && 
          <div className="about__railway-carrage-number-container"
          >{searchNumber(avaliableCarriages[selectedCarriage]?.name)}</div>
          }
          {activeTypeRailwayCarriage && <RailwayCarriageInfoContainer item={data[seatsListIndex]}/>}
      </div>
          {/* <SelectSeatsContainer2 coach={data[seatsListIndex].coach} /> */}
          {/* <div className="about__railway-carrage-info-container">
            <div>
            <span>{`Места ${data[seatsListIndex].coach}`}</span>
            </div>
          </div> */}
        { avaliableCarriages.length > 0 && <div className="about__railway-carrage-number-map"
          >{searchNumber(avaliableCarriages[selectedCarriage]?.name)}</div>}
              
      <MapRailwayCarriage seats={data[seatsListIndex].seats} />
      {totalPrice !==0 && <TotalPrice number={totalPrice} />}
    </>
  )
}

export default AboutRailwayCarriage;