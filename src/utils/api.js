import { data } from "autoprefixer";
import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: 'AIzaSyC5Y5EnIA0-oVJ-pzoJzHCgRlgDpP88CwE',
    cx: '058dcd74f01e1462b',
};


export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload},
    });
    
    return data;
};
