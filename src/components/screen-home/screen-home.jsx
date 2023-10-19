"use client"
import {createContext, useState} from "react";
import {Filters} from "../filters";
import ListGames from "../list-games/list-games";
import {useSearchParams} from "next/navigation";

export const GamesContext = createContext();
const ScreenHome = () => {
    const [orderingDate, setOrderingDate] = useState(null);
    const [orderingRating, setOrderingRating] = useState('-rating');
    const [genres, setGenres] = useState('');
    const searchParams = useSearchParams()

    const search = searchParams.get('search')
    const getGenres = (value) => setGenres(value);
    const getOrderingRating = () => {
        setOrderingRating(prevState => prevState && prevState.startsWith('-') ? 'rating' : '-rating');
        setOrderingDate(null);
    }
    const getOrderingDate = () => {
        setOrderingRating(null)
        setOrderingDate(prevState => prevState&&prevState.startsWith('-') ? 'released' : '-released');
    }


    return (
        <GamesContext.Provider
            value={{
                orderingDate,
                orderingRating,
                genres,
                search: search || '',
                getOrderingRating,
                getOrderingDate,
                getGenres,
            }}
        >
            <Filters/>
            <ListGames/>
        </GamesContext.Provider>
    );
}

export default ScreenHome
