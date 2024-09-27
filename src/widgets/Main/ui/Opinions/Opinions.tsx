import styled from "styled-components";
import { ButtonBack, ButtonNext, CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import { Box, Typography } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { OpinionCard } from "./OpinionCard";
import { Opinion } from "../../model/types/IMainPage";
import 'pure-react-carousel/dist/react-carousel.es.css';

interface OpinionsProps {
    opinions: Opinion[];
}

export const Opinions = (props: OpinionsProps) => {
    const { opinions } = props

    return (
        <Box>
            <Typography
                variant="h3"
                sx={{
                    m: '60px 0 40px 0',
                    textAlign: 'center',
                }}
            >
                Пикирлер
            </Typography>
            <CarouselWrapper className="carousel-container">
                <CarouselProvider
                    visibleSlides={1}
                    step={1}
                    naturalSlideWidth={100}
                    naturalSlideHeight={33}
                    totalSlides={opinions.length}
                >
                    <Slider>
                        {opinions.map((opinion) => (
                            <Slide key={opinion.id} index={opinion.id}>
                                <OpinionCard
                                    name={opinion.name}
                                    position={opinion.position}
                                    image={opinion.image}
                                    text={opinion.text}
                                />
                            </Slide>
                        ))}
                    </Slider>
                    <Wrapper>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: '30px'
                            }}
                        >
                            <ButtonBack className="buttons">
                                <ArrowBackIosNewIcon />
                            </ButtonBack>
                            <DotGroup className="dot-group" />
                            <ButtonNext className="buttons">
                                <ArrowForwardIosIcon />
                            </ButtonNext>
                        </Box>
                    </Wrapper>
                </CarouselProvider>
            </CarouselWrapper>
        </Box>
    )
}

const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2));

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1344px;
    }
  }

  .carousel__inner-slide {
    /* width: 100% - margin */
    width: calc(100% - 16px);
    /* margin-left: margin/2 */
    /* margin is required to adjust positioning as the width is diminished*/
    margin-left: 8px;

    @media (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`


const Wrapper = styled.div`
.dot-group {
    display: flex;
    align-items: center;
    justify-content: center;

    .carousel__dot {
    width: 8px;
    height: 8px;
    border: none;
    border-radius: 50%;
    margin: 0 4px;
    padding: 0;
    background-color: #c3c4ca;
    }

    .carousel__dot--selected {
    width: 16px;
    height: 8px;
    border-radius: 10px;
    background-color: #6267a1;
    transition: background 0.4s ease;
    }
}

.buttons {
    border: none;
    background: none;
    color: #6267A1;
}
`