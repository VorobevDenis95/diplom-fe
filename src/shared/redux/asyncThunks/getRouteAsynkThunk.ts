import { createAsyncThunk } from "@reduxjs/toolkit";
import { paramsRoutesSelection } from "../../typesParamsUrl";
import axios, { AxiosResponse } from "axios";
import { ResponseRoutes } from "../../types/typesRoutesBilets";
import { BASE_URL } from "../../api";
import { getAddress } from "../../api/utils";

// export const fetchRoutes = createAsyncThunk(
//   'direction/fetchRoutes',
//   async function (params: paramsRoutesSelection, thunkAPI) {
//     try {
//       const response: AxiosResponse<ResponseRoutes> = await axios({
//         url: `${BASE_URL}${getAddress(params, '/routes?')}`,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       return response.data;
//       console.log
//     } catch (error) {
//       if (error instanceof Error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//       return thunkAPI.rejectWithValue('Unknown error');
//     }
//   }
// );

export const fetchRoutes = createAsyncThunk(
  'direction/fetchRoutes',
  async function (params: paramsRoutesSelection, { signal, rejectWithValue }) {
    const controller = new AbortController();
    console.log(controller)
    signal.addEventListener('abort', () => {
      controller.abort();
    });

    try {
      const response: AxiosResponse<ResponseRoutes> = await axios({
        url: `${BASE_URL}${getAddress(params, '/routes?')}`,
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
      });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return rejectWithValue('Request was canceled');
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  }
);

// export const getCities = async (city: string, controller: AbortController) => {
//   try {
//     const response: AxiosResponse<CitiesProps['list']> = await axios({
//       url: `${BASE_URL}/routes/cities`,
//       signal: controller.signal,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       },
//       params: { name: city },
//     });
//     return response.data;
    
//   } catch (error) {
//       console.log(error);
//   }
// }