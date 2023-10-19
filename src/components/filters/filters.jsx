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

const ButtonContainer = styled.div`
  width: 100%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem ;
  background-color: transparent;
  gap:1rem;
  
  @media(min-width:576px){
    flex-direction: row;
    align-items: center;
    justify-content:center;
    height: auto;
    padding: 3rem 0 0 0;
  }

`;


const Filters = () => {
    const{getOrderingDate,getOrderingRating,orderingRating,orderingDate}=useContext(GamesContext);
    return (
        <Wrapper  >
            <H1>Find Your Game!</H1>
            <ButtonContainer flexwidth={'auto'} flexmargin={'20px 0 0 0'}>
                <SelectCategory/>
                <ButtonComponent icon={'date'}
                                 iconAfter={orderingDate?orderingDate.startsWith('-')?'down':'up':null}

                                 onClick={ getOrderingDate}>
                    Release date
                </ButtonComponent>
                <ButtonComponent icon={'star'}
                                 iconAfter={orderingRating?orderingRating.startsWith('-')?'down':'up':null}
                                 onClick={getOrderingRating}>
                    Average rating
                </ButtonComponent>
            </ButtonContainer>


        </Wrapper>
    )
}

export default Filters
