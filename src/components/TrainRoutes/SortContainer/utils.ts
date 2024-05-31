import { SortRouteObject, SortRoutesType } from "./SortContainer";

export function sortArr(arr: SortRouteObject[], type: SortRoutesType) {
  function compareByTitle(a: SortRouteObject, b: SortRouteObject) {
    if (a.type === type && b.type!== type) {
      return -1;
    } else if (a.type !== type && b.type === type) {
      return 1;
    } else {
      return 0
    }
  }
  return arr.sort(compareByTitle);
}