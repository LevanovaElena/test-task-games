'use client';

import styled from "styled-components";
import {Flex, H1} from "../../styles/common";
import {ButtonComponent} from "../button";
import {SelectCategory} from "../select-category";
import {useContext} from "react";
import {GamesContext} from "../screen-home/screen-home";


const Wrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0 ;
  background-color: transparent;
  @media(min-width:576px){
    padding:30px 0 40px 0;   
  }
  @media(min-width:1400px){
    padding: 30px 0 40px   0;
  }
`;


const Filters = () => {
    const{getOrderingDate,getOrderingRating,orderingRating,orderingDate}=useContext(GamesContext);
    return (
        <Wrapper  >
            <H1>Find Your Game!</H1>
            <Flex flexwidth={'auto'} flexmargin={'20px 0 0 0'}>
                <SelectCategory/>
                <ButtonComponent icon={'date'}
                                 iconAfter={orderingDate?orderingDate.startsWith('-')?'up':'down':null}
                                 style={{'margin':'0 20px'}}
                                 onClick={ getOrderingDate}>
                    Release date
                </ButtonComponent>
                <ButtonComponent icon={'star'}
                                 iconAfter={orderingRating?orderingRating.startsWith('-')?'down':'up':null}
                                 onClick={getOrderingRating}>
                    Average rating
                </ButtonComponent>
            </Flex>


        </Wrapper>
    )
}

export default Filters
