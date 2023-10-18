"use client"
import {createContext, useContext, useEffect, useState} from "react";
import {SliderContext} from "../slider/slider";
import {Filters} from "../filters";
import ListGames from "../list-games/list-games";
import {getAllGames, PAGE_SIZE} from "../../api/games";
import {mockScreenshots} from "../../../mocks/games";

const initValue = {
    ordering: '', genres: '', search: '', page: 1, listGames: null,
    setOrdering: null,
    setGenres: null,
    setSearch: null,
}
export const GamesContext = createContext();
const ScreenHome = () => {
    const [orderingDate, setOrderingDate] = useState(null);
    const [orderingRating, setOrderingRating] = useState('-rating');
    const [genres, setGenres] = useState('');
    const [search, setSearch] = useState('');
    const getGenres = (value) => setGenres(value);
    const getOrderingRating = () => {
        setOrderingRating(prevState => prevState&&prevState.startsWith('-') ? 'rating' : '-rating');
        setOrderingDate(null);
    }
    const getOrderingDate = () => {
        setOrderingRating(null)
        setOrderingDate(prevState => prevState&&prevState.startsWith('-') ? 'released' : '-released');
    }
    const getSearch = (value) => setSearch(value);


    return (
        <GamesContext.Provider
            value={{
                orderingDate,
                orderingRating,
                genres,
                search,
                getOrderingRating,
                getOrderingDate,
                getGenres,
                getSearch,
            }}
        >
            <Filters/>
            <ListGames/>
        </GamesContext.Provider>
    );
}

export default ScreenHome
