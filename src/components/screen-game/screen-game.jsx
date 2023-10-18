import styled from "styled-components";
import GameCardBig from "../game-card-big/game-card-big";
import {mockGame} from "../../../mocks/games";
import {Slider} from "../slider";



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

    return (
        <GameContainer>
            <GameCardBig game={mockGame}/>
            <Slider idGame={mockGame.id} nameGame={mockGame.name}/>
        </GameContainer>
    )
}

export default ScreenGame
