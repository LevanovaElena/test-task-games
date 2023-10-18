import styled from "styled-components";
import IconLeft from '../../assets/icons/arrow-left.svg';
import IconRight from '../../assets/icons/arrow-right.svg';

const SliderButtonWrapper=styled.div`
  border-radius: 12px;
  background-color: var(--white);
  border:1px solid var(--dark);
  width: 118px;
  height: 3rem;
  padding: 0.8rem;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  @media(min-width:576px){
    padding:1rem;
    width: 118px;
    height: 50px;
  }
  @media(min-width:1400px){

  }            
`
const ButtonLeft=styled.button`
  cursor: pointer;
  border:none;
  background: url("${IconLeft.src}") no-repeat left;
  width: auto;
  height: 18px;
  border-right: 1px solid var(--gray-600);
  &:hover{
    opacity: 50%;
  }
  &:disabled{
    opacity: 50%;
    cursor:default;
  }
`
const ButtonRight=styled.button`
  cursor: pointer;
  border:none;
  background: url("${IconRight.src}") no-repeat right;
  width: auto;
  height: 18px;
  border-left: 1px solid var(--gray-400);
  &:hover{
    opacity: 50%;
  }
  &:disabled {
    opacity: 50%;
    cursor:default;
  }
`

const SliderButton = ({onClickPrev,onClickNext,nextActive,prevActive}) => {
    return (
        <SliderButtonWrapper>
            <ButtonLeft onClick={onClickPrev} disabled={!prevActive}/>
            <ButtonRight onClick={onClickNext} disabled={!nextActive}/>
        </SliderButtonWrapper>
    )
}

export default SliderButton
