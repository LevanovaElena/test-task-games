import styled from "styled-components";
import Image from 'next/image'
import {Flex} from "../../styles/common";
import {getDateFromString} from "../../utils/date";
import IconStar from '../../assets/icons/star.svg';
import Link from "next/link";
import {useEffect, useLayoutEffect, useRef} from "react";

const Card = styled.article`
  background-color: var(--white);
  padding: 18px;
  
  display: grid;
  grid-template-columns: 50% 48%;
  grid-column-gap: 20px;
  
  border-radius: 24px;
  box-shadow: 39px 12px 59px 0 rgba(199, 199, 199, 0.60);
  
  width: 100%;
  height: auto;
  
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

const TitleGame = styled.span`
  font-weight: 600;
  font-size: 21px;
  color: var(--dark);
  margin-top:10px ;
  text-decoration: none;
  `


const ImagePoster = styled(Image)`
  border-radius: 24px;
  object-fit: cover;
  width: 100%;
  height: 600px;
`


const GameCardBig = ({game}) => {
    const refAbout=useRef(null);
    useEffect(() => {
        if(refAbout&&refAbout.current) {
              refAbout.current.innerHTML = game.description;
        }
    }, []);
    return (
            <Card>
                <ImagePoster  src={game.background_image} alt={'poster'} width={600} height={600}/>
                <AboutGameContainer>
                    <TitleGame href={`/game/${game.slug||game.id}`}>{game.name}</TitleGame>
                    {refAbout?
                    <div ref={refAbout}></div>:'...loading'}
                    <Flex flexmargin={'10px 0 0 0'} jcontent={'center'} >
                        <Flex direction={'column'} items={'start'}>
                            <span>Release date:</span>
                            <strong>{getDateFromString(game.released)}</strong>
                        </Flex>
                        <Flex direction={'column'} items={'start'}>
                            <Link href={game.website} target={'_blank'}>Website</Link>
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

export default GameCardBig
