import { CityProps } from "../types";
import { ItemRoutes } from "../typesRoutesBilets";

export interface DirectionStore {
  cityFrom: CityProps;
  cityTo: CityProps;
  items: ItemRoutes[];
  totalCount: number,
  dateStart: string;
  dateTo: string;
  limit: number;
  ofset: number;
  error: string;
  loading: boolean;
  status: string;
}