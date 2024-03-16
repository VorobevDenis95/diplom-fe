import axios, { AxiosResponse } from "axios";
import { BASE_URL } from ".";
import { CitiesProps } from "../types/types";

export const getCities = async (city: string) => {
  try {
    const response: AxiosResponse<CitiesProps['list']> = await axios({
      url: `${BASE_URL}/routes/cities`,
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