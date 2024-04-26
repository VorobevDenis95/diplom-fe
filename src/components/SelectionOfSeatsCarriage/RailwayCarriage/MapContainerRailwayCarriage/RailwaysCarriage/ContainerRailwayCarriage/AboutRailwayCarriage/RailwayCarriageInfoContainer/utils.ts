import { SeatsProps } from "../../../../../../../../shared/types/typesSeats"

export function getLowerSeats (seats: SeatsProps[]) {
  return seats.filter(el => el.available 
    && el.index % 2 !== 0 
  ).length

} 

export function getUpperSeats(seats: SeatsProps[]) {
  return seats.filter(el => el.available 
    && el.index % 2 === 0 ).length
}

// export function getLateralSeats(seats: SeatsProps[]) {
//   return seats.filter(el => el.available === true 
//     && el.index > 32).length
// }
