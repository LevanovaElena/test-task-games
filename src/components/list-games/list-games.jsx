'use client';

import styled from "styled-components";
import Link from "next/link";
import {mockGames} from "../../../mocks/games";
import GameCard from "../game-card/game-card";
import {Loader} from "../loader";
import {useContext, useEffect, useRef, useState} from "react";
import {getAllGames, PAGE_SIZE} from "../../api/games";
import {GamesContext} from "../screen-home/screen-home";

const Wrapper = styled.section`

  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 67px;
  justify-items: center;
  padding: 30px;

  @media (min-width: 992px) {
    padding: 32px 68px;
  }
  @media (min-width: 1400px) {
    padding: 46px 96px;
  }

`;

const ListGames = () => {
    const {genres, search, orderingDate, orderingRating} = useContext(GamesContext);
    const [listGames, setListGames] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const loadData = async () => {
        try {
            const params = {
                ordering: orderingDate || orderingRating || '',
                genres: genres,
                search: search,
                page_size: PAGE_SIZE,
                page: page
            }
            const games = await getAllGames(params);
            setListGames(prevList => {
                return [...prevList, ...games.results || []]
            });
            setTotal(games.count);
        } catch (err) {
            console.warn(err);
        }
    };
    useEffect(() => {
        setListGames([]);
        setPage(1);

    }, [genres, search, orderingRating, orderingDate]);

    useEffect(() => {
        if(page>1)loadData();
    }, [page]);

    const observerTarget = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setPage(prevState => prevState + 1);

                }
            },
            {threshold: 1}
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [observerTarget]);

    return (
        <>
            <Wrapper>
                {listGames && listGames.length > 0 && listGames.map(game => (
                    <GameCard game={game} key={game.id}/>
                ))}
            </Wrapper>

            <div ref={observerTarget} style={{'margin-bottom':'50px'}}>
                <Loader/>
            </div>
        </>
    )
}

export default ListGames
