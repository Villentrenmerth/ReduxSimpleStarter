import axios from 'axios';

const ROOT_URL = 'https://api.punkapi.com/v2/beers';

export const FETCH_BEERS = 'fetch_beers';
export const FETCH_BEER = 'fetch_beer';
export const SEARCH_BEERS = 'search_beers';

export function fetchBeers(page) {
    const request = axios.get(`${ROOT_URL}?page=${page || 1}&per_page=20`);

    return {
        type: FETCH_BEERS,
        payload: request
    }
}

export function beersSearch(term) {
    const request = axios.get(`${ROOT_URL}?beer_name=${term}`);

    return {
        type: FETCH_BEERS,
        payload: request
    }
}

export function fetchBeer(id) {
    const request = axios.get(`${ROOT_URL}/${id}`);

    return {
        type: FETCH_BEER,
        payload: request
    }
}