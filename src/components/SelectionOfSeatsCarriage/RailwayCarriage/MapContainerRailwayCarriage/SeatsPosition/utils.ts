import { SeatsProps } from "../../../../../shared/types/typesSeats";

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
  return seats.filter((el) => el.index % 2 === 0 || el.index > 32)
}

export function filterSeatsArrOddOther(seats: SeatsProps[]) {
  return seats.filter((el) => el.index % 2 !== 0 || el.index > 32) 
}