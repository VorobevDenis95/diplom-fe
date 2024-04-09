import { createAsyncThunk } from "@reduxjs/toolkit";
import { paramsRoutesSelection } from "../../typesParamsUrl";
import axios, { AxiosResponse } from "axios";
import { ResponseRoutes } from "../../types/typesRoutesBilets";
import { BASE_URL } from "../../api";
import { getAddress } from "../../api/utils";

export const fetchRoutes = createAsyncThunk(
  'direction/fetchRoutes',
  async function (params: paramsRoutesSelection, thunkAPI) {
    try {
      const response: AxiosResponse<ResponseRoutes> = await axios({
        url: `${BASE_URL}${getAddress(params, '/routes?')}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // console.log(`${BASE_URL}${getAddress(params, '/routes?')}`)
      // console.log(response)
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);