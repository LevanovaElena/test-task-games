'use client';

import styled from "styled-components";
import Link from "next/link";
import {mockGames} from "../../../mocks/games";
import GameCard from "../game-card/game-card";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: transparent;
  //padding-top:100px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap:67px;
  padding: 30px;

  @media (min-width: 992px){
      padding: 32px 68px;
  }
  @media (min-width: 1400px){
      padding: 46px 96px;
  }
  
`;

const ListGames = ({list=mockGames}) => {
    return (
        <Wrapper  >
            {list.results&&list.results.length>0&&list.results.map(game=>(
                <GameCard game={game} key={game.id}/>
            ))}

        </Wrapper>
    )
}

export default ListGames
