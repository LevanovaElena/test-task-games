import styled from "styled-components";
import Image from 'next/image';
import {useContext, } from "react";
import {SliderContext} from "../slider/slider";

const SliderListWrapper=styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  @media (min-width: 576px) {

  }
  @media (min-width: 1400px) {

  }
`
const ImageSlide = styled(Image)`
  border-radius: 24px;
  object-fit: contain;
  display: flex;
  margin: 0 auto;
  max-height: 300px;
  width: 100%;
`
const SlidesList = () => {
    const { slideNumber, listImages } = useContext(SliderContext);

    return (
        <SliderListWrapper
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {listImages.map((slide) => (
                <ImageSlide key={slide.id} src={slide.image} alt={'slide'} width={slide.width} height={slide.height}/>
            ))}
        </SliderListWrapper>
    );
}

export default SlidesList
