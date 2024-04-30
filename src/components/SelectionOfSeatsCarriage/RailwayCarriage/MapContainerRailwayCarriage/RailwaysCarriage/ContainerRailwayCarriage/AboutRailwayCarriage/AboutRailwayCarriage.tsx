import { useEffect, useState } from "react";
import { ContainerRailwayCarriageProps } from "../ContainerRailwayCarriage";
// import { TypeRailwayCarriage } from "../../../../../../../shared/types/typesTrain";
import { useAppDispatch, useAppSelector } from "../../../../../../../shared/redux/redux-hooks";
import MapRailwayCarriage from "../../../MapRailwayCarriage";
import NumberRailwayCarriage from "./NumberRailwayCarriage/NumberRailwayCarriage";
import './AboutRailwayCarriage.css';
import { searchNumber } from "./utils";
import RailwayCarriageInfoContainer from "./RailwayCarriageInfoContainer/RailwayCarriageInfoContainer";
// import SelectSeatsContainer2 from "../../../../../../TrainRoutes/SelectSeatsContainer/SelectSeatsContainer2";
import { setActiveNumberCars, setCoach } from "../../../../../../../shared/redux/slice/trainSlice";
import TotalPrice from "./TotalPrice";

export interface NumberCarriageProps {
  name: string,
  index: number,
}

const AboutRailwayCarriage = ({ data, typeDirection }: ContainerRailwayCarriageProps) => {

  const { arrival, departure } = useAppSelector(state => state.train);
  const [activeDirection, setActiveDirection] = useState(typeDirection === "departure" ? departure : arrival);

  useEffect(() => {
    typeDirection === "departure" ? setActiveDirection(departure) : setActiveDirection(arrival);
  }, [typeDirection, departure, arrival])

  useEffect(() => {

  }, [activeDirection.activeTypeRailwayCarriage])

  const dispatch = useAppDispatch();
  // const [avaliableClasses, setAvaliableClasses] = useState<TypeRailwayCarriage[]>([]);
  const [avaliableCarriages, setCarriages] = useState<NumberCarriageProps[]>([]);
  const [selectedCarriage, setSelectedCarriage] = useState(0);
  const [seatsListIndex, setSeatsListIndex] = useState(0);

  // function addAvilableClasses() {
  //   const arr: TypeRailwayCarriage[] = [];
  //   data.map((el) => {
  //     arr.push(el.coach.class_type)
  //   })
  //   return arr;
  // }

  function addAvilableCarriages() {
    console.log(data)
    const arr = data.filter(el => el.coach.class_type === activeDirection.activeTypeRailwayCarriage)
      .map((el, index) => ({ name: el.coach.name, index }));
    return arr;
  }

  // const [listRailwayCarriageName, setListRailwayCarriage] = useState([]);

  // useEffect(() => {
  //   const data = addAvilableClasses();
  //   setAvaliableClasses(data)
  // }, [data])

  useEffect(() => {
    const names = addAvilableCarriages();
    console.log(names)
    setCarriages(names)
    setSelectedCarriage(0);
    // dispatch(setActiveNumberCars)
    // if (activeDirection.activeTypeRailwayCarriage && avaliableCarriages) 
    // dispatch(setActiveNumberCars({numberCars: searchNumber(avaliableCarriages[selectedCarriage]?.name), typeDirection}))
  }, [activeDirection.activeTypeRailwayCarriage]);

  useEffect(() => {
    const i = data.findIndex((el) => el.coach.name === avaliableCarriages[0]?.name);

    console.log(i);
    if (i >= 0) setSeatsListIndex(i)
  }, [avaliableCarriages])

  useEffect(() => {
    // console.log(seatsListIndex);
    console.log(1243211111111)
    if (activeDirection.activeTypeRailwayCarriage) {
      console.log(data[seatsListIndex])
      dispatch(setActiveNumberCars({
        numberCars: searchNumber(data[seatsListIndex].coach.name),
        typeDirection
      }));
      dispatch(setCoach({ coach: data[seatsListIndex].coach, typeDirection }));
    }

  }, [seatsListIndex])



  useEffect(() => {
    if (!activeDirection.activeNumberCars && activeDirection.activeTypeRailwayCarriage) {
      dispatch(setActiveNumberCars({
        numberCars: searchNumber(data[seatsListIndex].coach.name),
        typeDirection
      }));
      dispatch(setCoach({ coach: data[seatsListIndex].coach, typeDirection }));
    }
  }, [activeDirection.activeTypeRailwayCarriage])


  const clickNumberCarriage = (item: NumberCarriageProps) => {
    setSelectedCarriage(item.index);
    // dispatch(setActiveNumberCars(searchNumber(avaliableCarriages[selectedCarriage]?.name)))
    // console.log(item.index)
    const i = data.findIndex((el) => el.coach.name === item.name);
    if (i >= 0) setSeatsListIndex(i)
    // console.log(avaliableCarriages)
  }

  return (
    <>

      {activeDirection.activeTypeRailwayCarriage &&
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
        {activeDirection.activeTypeRailwayCarriage && <RailwayCarriageInfoContainer item={data[seatsListIndex]}
         typeDirection={typeDirection}/>}
         
      </div>
      {avaliableCarriages.length > 0 && <div className="about__railway-carrage-number-map"
      >{searchNumber(avaliableCarriages[selectedCarriage]?.name)}</div>}

      <MapRailwayCarriage seats={data[seatsListIndex].seats}
        typeDirection={typeDirection} />
        
      {
        activeDirection.totalPrice !== 0 && <TotalPrice number={activeDirection.totalPrice!}
        />}
    </>
  )

}

export default AboutRailwayCarriage;