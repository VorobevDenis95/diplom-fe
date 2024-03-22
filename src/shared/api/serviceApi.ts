import axios, { AxiosResponse } from "axios";
import { BASE_URL } from ".";
import { CitiesProps } from "../types/types";
import { ResponseRoutes } from "../types/typesRoutesBilets";


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

export const getRoute = async() => {
  try {
    // url: `${BASE_URL}/routes?from_city_id=${}&to_city_id=${}&date_start=${}&date_end={}`
    const response:  AxiosResponse<ResponseRoutes> = await axios({
      url: `${BASE_URL}/routes?from_city_id=65f7ee8d3e252100467cb2a3&to_city_id=65f7ee8e3e252100467cb2a4&date_start=2024-05-01&date_end=2024-05-12`,
      headers: {
        'Content-Type': 'application/json',
      },
    })

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
    
  }
}