
import { ButtonBack, ButtonNext, CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import { Box } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from "styled-components";
import { MentorProps, OpinionProps } from "@/widgets/Main/model/types/IMainPage";
import { MentorCard } from "@/widgets/Main/ui/Mentors/Card";

interface ImageCarouselProps {
    images: MentorProps[] | OpinionProps[];
    
}

export const ImageCarousel = (props: ImageCarouselProps) => {
    const {
        images
    } = props

    return (
        <CarouselWrapper className="carousel-container" >
            <CarouselProvider
                visibleSlides={3}
                step={1}
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={images.length}
            >
                <Slider>
                    {images?.map((image) => (
                        <Slide key={image.id} index={image.id}>
                            <MentorCard
                                name={image.name}
                                position={image.position}
                                image={image.image}
                            />
                        </Slide>
                    ))}
                </Slider>
                <Wrapper>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <ButtonBack>
                            <ArrowBackIosNewIcon />
                        </ButtonBack>
                        <DotGroup className="dot-group" />
                        <ButtonNext className="btn-arrow">
                            <ArrowForwardIosIcon />
                        </ButtonNext>
                    </Box>
                </Wrapper>
            </CarouselProvider>
        </CarouselWrapper>
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
`