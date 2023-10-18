import styled from "styled-components";
import Image from 'next/image'
import {Flex} from "../../styles/common";
import {getDateFromString} from "../../utils/date";
import IconStar from '../../assets/icons/star.svg';
import Link from "next/link";

const Card = styled.figure`
  background-color: var(--white);
  padding: 18px;
  
  display: grid;
  grid-template-rows: auto 1fr;
  
  border-radius: 24px;
  box-shadow: 39px 12px 59px 0 rgba(199, 199, 199, 0.60);
  
  max-width: 282px;
  min-height: 405px;
  
  &:hover{
    box-shadow: 39px 12px 59px 0 rgba(199, 199, 199, 0.80);
  }

  @media (min-width: 576px) {

  }
  @media (min-width: 1400px) {

  }
`
const AboutGameContainer = styled.figcaption`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
`

const TitleGame = styled(Link)`
  font-weight: 600;
  font-size: 21px;
  color: var(--dark);
  margin-top:10px ;
  text-decoration: none;
  &:hover{
    opacity: 50%;
  }
`


const ImagePoster = styled(Image)`
  border-radius: 24px;
  object-fit: cover;
  width: 250px;
  height: 250px;
`


const GameCard = ({game}) => {
    return (
            <Card>
                <ImagePoster  src={game.background_image} alt={'poster'} width={270} height={270}/>
                <AboutGameContainer>
                    <TitleGame href={`/game/${game.slug||game.id}`}>{game.name}</TitleGame>
                    <Flex flexmargin={'10px 0 0 0'} jcontent={'center'} >
                        <Flex direction={'column'} items={'start'}>
                            <span>Release date:</span>
                            <strong>{getDateFromString(game.released)}</strong>
                        </Flex>
                        <Flex items={'center'} jcontent={'flex-end'}>
                            <Image src={IconStar} alt={'rating'} />
                            <strong> {game.rating}</strong>
                        </Flex>
                    </Flex>
                </AboutGameContainer>
            </Card>
    )
}

export default GameCard