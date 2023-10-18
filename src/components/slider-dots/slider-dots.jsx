import styled from "styled-components";
import {useContext} from "react";
import {SliderContext} from "../slider/slider";
import {Dot} from "../dot";

const DotsContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 6px;
  width: 50vw;
`
const SliderDots = ({idGame}) => {
    const { slidesCount } = useContext(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Dot key={`dot-${i}`} number={i} />);
        }

        return dots;
    };

    return <DotsContainer className="dots">{renderDots()}</DotsContainer>;
}

export default SliderDots
