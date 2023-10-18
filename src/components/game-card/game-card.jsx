'use client';
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
  
  width: 282px;
  
  &:hover{
    box-shadow: 39px 12px 59px 0 rgba(199, 199, 199, 0.80);
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
    const {background_image=null,name='Unknown Name',slug=null,id=null,released=null,rating=0}=game;
    return (
            <Card>
                {background_image?
                <ImagePoster  src={background_image} alt={'poster'} width={270} height={270}/>:null}
                <AboutGameContainer>
                    <TitleGame href={slug||id?`/game/${game.slug||game.id}`:'#'}>{name}</TitleGame>
                    <Flex flexmargin={'10px 0 0 0'} jcontent={'center'} >
                        <Flex direction={'column'} items={'start'}>
                            <span>Release date:</span>
                            <strong>{getDateFromString(released)}</strong>
                        </Flex>
                        <Flex items={'center'} jcontent={'flex-end'}>
                            <Image src={IconStar} alt={'rating'} />
                            <strong> {rating}</strong>
                        </Flex>
                    </Flex>
                </AboutGameContainer>
            </Card>
    )
}

export default GameCard
