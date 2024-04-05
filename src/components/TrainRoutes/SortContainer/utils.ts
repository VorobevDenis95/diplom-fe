import { SortRouteObject, SortRoutes } from "./SortContainer";

export function sortArr(arr: SortRouteObject[], title: SortRoutes) {
  function compareByTitle(a: SortRouteObject, b: SortRouteObject) {
    if (a.name === title && b.name!== title) {
      return -1;
    } else if (a.name !== title && b.name === title) {
      return 1;
    } else {
      return 0
    }
  }
  console.log(arr.sort(compareByTitle))
  return arr.sort(compareByTitle);
}