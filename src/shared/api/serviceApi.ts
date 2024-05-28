import axios, { AxiosResponse } from "axios";
import { BASE_URL } from ".";
import { CitiesProps } from "../types/types";
import { ItemRoutes, ResponseRoutes } from "../types/typesRoutesBilets";
import { paramsRoutesSelection } from "../typesParamsUrl";
import { SeatsRequestProps } from "../types/typesSeats";
import { OrderDataProps } from "../types/typesOrder";
import { handleRequestError } from "./utils";


export const getCities = async (city: string, controller: AbortController) => {
  try {
    const response: AxiosResponse<CitiesProps['list']> = await axios({
      url: `${BASE_URL}/routes/cities`,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      params: { name: city },
    });
    return response.data;

  } catch (error) {
    handleRequestError(error);
  }
}

export const getRoute = async (params: paramsRoutesSelection) => {
  let currentAdress = '/routes?';
  for (const key in params) {
    const value: paramsRoutesSelection[keyof paramsRoutesSelection] = params[key as keyof paramsRoutesSelection];
    if (Object.keys(params)[0] === key) {
      currentAdress += `${key}=${value}`;
      continue;
    }
    currentAdress += `&${key}=${value}`;
  }
  try {
    const response: AxiosResponse<ResponseRoutes> = await axios({
      url: `${BASE_URL}${currentAdress}`,

      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data;

  } catch (error) {
    handleRequestError(error);
  }
}

export const subscribe = async (mail: string) => {
  try {
    const response = await axios({
      url: `${BASE_URL}/subscribe`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: mail,
    })
    return response.data;

  } catch (error) {
    handleRequestError(error);
  }
}

export const lastTickets = async () => {
  try {
    const response: AxiosResponse<ItemRoutes[]> = await axios({
      url: `${BASE_URL}/routes/last`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export const getSeats = async (id: string) => {
  try {
    const response: AxiosResponse<SeatsRequestProps[]> = await axios({
      url: `${BASE_URL}/routes/${id}/seats`,
      headers: {
        "Content-Type": 'application.json',
      }
    })
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export const sendOrder = async (data: OrderDataProps) => {
  try {
    const response = await axios({
      url: `${BASE_URL}/order`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    })
    return response.data;

  } catch (error) {
    handleRequestError(error);
  }
}