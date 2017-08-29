import axios from 'axios';

const API_KEY = 'b7bf2069c56587884297db2c16872ae3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}