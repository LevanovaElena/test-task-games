import styled from "styled-components";
import {useEffect, useState, createContext} from "react";
import {mockScreenshots} from "../../../mocks/games";
import {SliderButton} from "../slider-button";
import {SliderDots} from "../slider-dots";
import {Slide} from "../slide";
import {Flex} from "../../styles/common";
import {getScreens} from "../../api/games";
import {useParams} from "next/navigation";
import {Loader} from "../loader";


const SliderContainer = styled.section`
  overflow: hidden;
  position: relative;
  background-color: var(--white);
  padding: 0.5rem;
  border-radius: 24px;
  box-shadow: 39px 12px 59px 0 rgba(199, 199, 199, 0.60);
  width: 100%;
  height: auto;
  margin-top: 1rem;
  @media (min-width: 576px) {
    padding: 1.5rem;
  }
  @media (min-width: 1400px) {
    padding: 3rem;
  }
`
const TitleGame = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--dark);
  padding: 1rem;
  @media (min-width: 576px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1400px) {
    font-size: 2rem;
  }
`
export const SliderContext = createContext();

const Slider = ({ nameGame}) => {
    const [listImages, setListImages] = useState(mockScreenshots.results);
    const [total, setTotal] = useState(mockScreenshots.count);
    const [slide, setSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const {slug}=useParams();

    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true)
            const images = await getScreens(slug);
            setListImages(images.results);
            setIsLoading(false)
        };
        loadData();
    }, [slug]);

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

    if(isLoading)return <Loader/>
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
                <Flex>
                    <TitleGame>{nameGame || ''} <p>screenshots</p></TitleGame>
                    <SliderButton
                        onClickPrev={() => changeSlide(-1)}
                        onClickNext={() => changeSlide(1)}
                        nextActive
                        prevActive
                    />
                </Flex>
                <Slide slide={listImages[slide]} animation={animation}/>
                <SliderDots/>
            </SliderContext.Provider>
        </SliderContainer>
    )
}

export default Slider
