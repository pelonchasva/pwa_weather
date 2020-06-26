import axios from 'axios';
import { UNITS } from '../AppConstants';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: UNITS,
            APPID: process.env.REACT_APP_API_KEY
        }
    });

    return data;
};