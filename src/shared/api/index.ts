import axios from 'axios';

export const BASE_URL = 'https://students.netoservices.ru/fe-diplom';

const $api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export {$api};