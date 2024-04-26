import { SeatsProps } from "../../../../../shared/types/typesSeats";
import { SeatPosition } from "./SeatItem";

export function filterSeatsArrOdd(seats: SeatsProps[]) {
  return seats.filter((el) => el.index % 2 !== 0 && el.index < 33)
}

export function filterSeatsArrEven(seats: SeatsProps[]) {
  return seats.filter((el) => el.index % 2 === 0 && el.index < 33)
}

export function filterSeatsArrOther(seats: SeatsProps[]) {
  return seats.filter((el) => el.index > 32)
}

export function filterSeatsArrEvenOther(seats: SeatsProps[]) {
  return seats.filter((el) => el.index % 2 === 0 && el.index > 32)
}

export function filterSeatsArrOddOther(seats: SeatsProps[]) {
  return seats.filter((el) => el.index % 2 !== 0 && el.index > 32) 
}

export function getPrice(pos: SeatPosition, index: number) {
  if (pos === "seat-luxary") 
    return 'price';
  if (pos === "sedentary") return 'top_price';
  if (pos === "seat-static") {
    if (index % 2 !== 0) return 'bottom_price';
    if (index % 2 === 0) return 'top_price';
  }
  if (pos === "seat-passage") return 'side_price';
  return 'price'
}
