const BASE_URL = 'https://api.rawg.io/api';
const KEY = '322d9a74e2fa45e796ad3979911c5442';
export const PAGE_SIZE = 10;

const getAllGames = (_params)=>{
    const params = new URLSearchParams({..._params,key:KEY});
    if(!_params.genres)params.delete('genres');
    if(!_params.ordering)params.delete('ordering');
    if(_params.search){
        params.delete('ordering');
        params.delete('genres');
    }

    return fetch(`${BASE_URL}/games?${params.toString()}`).then(response=>response.json());
}
const getCategories = ()=>{
    const params = new URLSearchParams({key:KEY});
    return fetch(`${BASE_URL}/genres?${params.toString()}`).then(response=>response.json());
}
const getGame = (slug)=>{
    const params = new URLSearchParams({key:KEY});
    return fetch(`${BASE_URL}/games/${slug}?${params.toString()}`).then(response=>response.json());
}

const getScreens = (slug)=>{
    const params = new URLSearchParams({key:KEY});
    return fetch(`${BASE_URL}/games/${slug}/screenshots?${params.toString()}`).then(response=>response.json());
}

export {
    getAllGames,
    getCategories,
    getGame,
    getScreens
}
