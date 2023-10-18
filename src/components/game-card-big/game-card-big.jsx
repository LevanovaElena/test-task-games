'use client';
import styled from "styled-components";
import Image from 'next/image'
import {Flex} from "../../styles/common";
import {getDateFromString} from "../../utils/date";
import IconStar from '../../assets/icons/star.svg';
import IconLink from '../../assets/icons/link.svg';
import Link from "next/link";
import Description from "../description/description";
import {useEffect, useRef, useState} from "react";
import {getGame} from "../../api/games";
import {useParams} from "next/navigation";
import {Loader} from "../loader";

const Card = styled.article`
  background-color: var(--white);
  padding: 0.6rem;

  display: flex;
  flex-direction: column;


  border-radius: 24px;
  box-shadow: 39px 12px 59px 0 rgba(199, 199, 199, 0.60);

  width: 100%;
  height: auto;

  @media (min-width: 576px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 48%;
    grid-column-gap: 1.5rem;
    padding: 2rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 70% 28%;
    padding: 3rem;
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
  margin-top: 10px;
  text-decoration: none;
`


const ImagePoster = styled(Image)`
  border-radius: 24px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  transition: all 1s;
  @media (min-width: 1400px) {
    max-height: 70vh;
    object-fit: cover;
    object-position: center;
  }
`
const Website = styled(Link)`
  background: url("${IconLink.src}") no-repeat center;
  width: 26px;
  height: 26px;
`
const GameCardBig = ({game}) => {
    const refText=useRef();
    useEffect(()=>{
        if(!game.description_raw&&refText.current)refText.current.innerHTML=game.description;
    },[refText])

    if(!game)return null;
    const {
        background_image = null,
        name = 'Unknown Name',
        slug = '',
        id = '',
        description_raw = '',
        released = '',
        website = null,
        rating = 0,
        description=null
    } = game;
    return (
        <Card>
            {background_image&&<ImagePoster src={background_image} alt={'poster'} width={800} height={600}/>}
            <AboutGameContainer>
                <Flex direction={'column'} items={'start'}>
                    <TitleGame>{name}</TitleGame>
                    {description_raw&& <Description description={description_raw}/>}
                    {!description_raw&&description&& <p ref={refText}></p>}
                </Flex>
                <Flex flexmargin={'10px 0 0 0'} jcontent={'center'}>
                    <Flex direction={'column'} items={'start'}>
                        <span>Release date:</span>
                        <strong>{getDateFromString(released)}</strong>
                    </Flex>
                    <Flex items={'center'} jcontent={'flex-end'}>
                        {website&&<Website href={website} target={'_blank'} title={'Website'}></Website>}
                        <Image src={IconStar} alt={'rating'} style={{margin: '0 10px'}}/>
                        <strong>{rating}</strong>
                    </Flex>
                </Flex>
            </AboutGameContainer>
        </Card>
    )
}

export default GameCardBig
