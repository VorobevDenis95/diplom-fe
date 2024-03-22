import axios, { AxiosResponse } from "axios";
import { BASE_URL } from ".";
import { CitiesProps } from "../types/types";
import { ResponseRoutes } from "../types/typesRoutesBilets";
import { paramsRoutesSelection } from "../typesParamsUrl";


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
  try {
    // url: `${BASE_URL}/routes?from_city_id=${}&to_city_id=${}&date_start=${}&date_end={}`
    const response:  AxiosResponse<ResponseRoutes> = await axios({
      url: `${BASE_URL}/routes?from_city_id=${params.cityFrom}&to_city_id=${params.cityTo}&date_start=${params.dateStart}&date_end=${params.dateEnd}`,
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