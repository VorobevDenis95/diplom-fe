import { paramsRoutesSelection } from "../typesParamsUrl";

export function getAddress (params: paramsRoutesSelection, currentAdress: string) {
  for (const key in params) {
    const value: paramsRoutesSelection[keyof paramsRoutesSelection] = params[key as keyof paramsRoutesSelection];
    if (Object.keys(params)[0] === key) {
      currentAdress += `${key}=${value}`;
      continue;
    }
    currentAdress += `&${key}=${value}`
  }
  return currentAdress;
}