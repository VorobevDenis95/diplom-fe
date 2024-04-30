import axios, { AxiosResponse } from "axios";
import { BASE_URL } from ".";
import { CitiesProps } from "../types/types";
import { ItemRoutes, ResponseRoutes } from "../types/typesRoutesBilets";
import { paramsRoutesSelection } from "../typesParamsUrl";
import { SeatsRequestProps } from "../types/typesSeats";


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
      console.log(error);
  }
}

export const getRoute = async(params: paramsRoutesSelection) => {
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
    // url: `${BASE_URL}/routes?from_city_id=${}&to_city_id=${}&date_start=${}&date_end={}`
    const response:  AxiosResponse<ResponseRoutes> = await axios({
      // url: `${BASE_URL}/routes?from_city_id=${params.cityFrom}&to_city_id=${params.cityTo}
      // ${params.dateStart ? `&date_start=${params.dateStart}` : ''}
      // ${params.dateEnd ? `date_end=${params.dateEnd}` : ''}
      // `,
      // url: `${BASE_URL}/routes?from_city_id=${params.cityFrom}&to_city_id=${params.cityTo}`,
      url: `${BASE_URL}${currentAdress}`,

      headers: {
        'Content-Type': 'application/json',
      },
    })
      console.log(currentAdress)
      console.log(response.data)
    return response.data;

  } catch (error) {
    console.log(error);
  }
}

export const subscribe = async(mail: string) => {
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
    console.log(error);
  }
}

export const lastTickets = async() => {
  try {
    const response: AxiosResponse<ItemRoutes[]> = await axios({
      url: `${BASE_URL}/routes/last`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getSeats = async(id: string) => {
  try {
    const response: AxiosResponse<SeatsRequestProps[]> = await axios({
      url: `${BASE_URL}/routes/${id}/seats`,
      headers: {
        "Content-Type": 'application.json',
      }
    })
    return response.data;
  } catch (error) {
    console.log(error);
  }
}