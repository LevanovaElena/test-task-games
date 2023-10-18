'use client';
import styled from "styled-components";
import GameCardBig from "../game-card-big/game-card-big";
import {Slider} from "../slider";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {getGame} from "../../api/games";
import {Loader} from "../loader";



const GameContainer = styled.section`
  background-color: var(--gray-100);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  

  padding:30px 30px;

  @media (min-width: 992px){
    padding: 30px 68px;
  }
  @media (min-width: 1400px){
    padding: 40px 96px;
  }
`

const ScreenGame = () => {
    const [game, setGame] = useState(null);
    const {slug}=useParams();

    useEffect(() => {
        getGame(slug).then(result => setGame(result)).catch(error => console.warn(error));
    }, [slug]);

    if(!game) return  <GameContainer><Loader/></GameContainer>
    return (
        <GameContainer>
            <GameCardBig game={game}/>
            <Slider nameGame={game.name}  />
        </GameContainer>
    )
}

export default ScreenGame
