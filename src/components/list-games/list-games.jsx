'use client';

import styled from "styled-components";
import Link from "next/link";
import {mockGames} from "../../../mocks/games";
import GameCard from "../game-card/game-card";
import {Loader} from "../loader";
import {useContext, useEffect, useState} from "react";
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
    const {genres,search,orderingDate,orderingRating}=useContext(GamesContext);
    const [listGames, setListGames] = useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        console.log('genres',genres)
        const loadData = async () => {
            try {
                const params={
                    ordering:  orderingDate||orderingRating||'',
                    genres: genres,
                    search: search,
                    page_size: PAGE_SIZE,
                    page: page
                }
                const games = await getAllGames(params);
                setListGames(games.results||[]);
                setTotal(games.count);
            } catch (err) {
                console.warn(err);
            }
        };

        loadData();
    }, [genres,search,orderingRating,orderingDate]);

    return (
        <>
            <Wrapper>
                {listGames&& listGames.length > 0 && listGames.map(game => (
                    <GameCard game={game} key={game.id}/>
                ))}

            </Wrapper>

            <Loader/>
        </>
    )
}

export default ListGames
