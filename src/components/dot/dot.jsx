import styled from "styled-components";
import {useContext} from "react";
import {SliderContext} from "../slider/slider";

const DotDiv = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  border-radius: 50%;
  transition: all 1s;
  background-color: var(--dark);
  cursor: pointer;

  &.selected {
    background-color: var(--gray-600);
  }
`
const Dot = ({number}) => {
    const {goToSlide, slideNumber} = useContext(SliderContext);

    return (
        <DotDiv
            className={`${slideNumber === number ? "selected" : ""}`}
            onClick={() => goToSlide(number)}
        />
    );
}

export default Dot
