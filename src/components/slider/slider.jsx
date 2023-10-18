import styled from "styled-components";
import {useEffect, useState, createContext} from "react";
import {mockScreenshots} from "../../../mocks/games";
import {SliderButton} from "../slider-button";
import {SliderDots} from "../slider-dots";
import {Slide} from "../slide";


const SliderContainer = styled.section`
  overflow: hidden;
  position: relative;
  background-color: var(--white);
  padding: 0.5rem;
  border-radius: 24px;
  box-shadow: 39px 12px 59px 0 rgba(199, 199, 199, 0.60);
  width: 100%;
  height: 80vh;
  margin-top: 1rem;
  @media (min-width: 576px) {

  }
  @media (min-width: 1400px) {

  }
`
export const SliderContext = createContext();

function Dots() {
    return null;
}

const Slider = ({idGame}) => {
    const [listImages, setListImages] = useState(mockScreenshots.results);
    const [total, setTotal] = useState(mockScreenshots.count);
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);

    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const images = mockScreenshots.results; //await getImages();
            setListImages(images);
        };
        loadData();
    }, []);
    /*    useEffect(() => {
            if (listImages.length) {
                preloadImages();
            }
        }, [slide, listImages]);*/
    /*    const preloadImages = () => {
            const prevItemIndex = slide - 1 < 0 ? listImages.length - 1 : slide - 1;
            const nextItemIndex = (slide + 1) % listImages.length;

            new Image().src = listImages[slide].url;
            new Image().src = listImages[prevItemIndex].url;
            new Image().src = listImages[nextItemIndex].url;
        }*/

    const changeSlide = (direction = 1) => {
        setAnimation(false);
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = listImages.length - 1;
        } else {
            slideNumber = (slide + direction) % listImages.length;
        }

        setSlide(slideNumber);

        const timeout = setTimeout(() => {
            setAnimation(true);
        }, 0);

        return () => {
            clearTimeout(timeout)
        }
    };

    const goToSlide = (number) => {
        setAnimation(false);
        setSlide(number % listImages.length);

        const timeout = setTimeout(() => {
            setAnimation(true);
        }, 0);

        return () => {
            clearTimeout(timeout)
        }
    };

    if (!total)
        return (
            <SliderContainer>
                <span>Not Found</span>
            </SliderContainer>
        )
    return (
        <SliderContainer>
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: listImages.length,
                    slideNumber: slide,
                    listImages,
                }}
            >
                <SliderButton
                    onClickPrev={() => changeSlide(-1)}
                    onClickNext={() => changeSlide(1)}
                    nextActive
                    prevActive
                />
                <Slide slide={listImages[slide]} animation={animation}/>
                <SliderDots/>
            </SliderContext.Provider>
        </SliderContainer>
    )
}

export default Slider
