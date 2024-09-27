import { Box, Stack, Typography } from "@mui/material"
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup
} from 'pure-react-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from "styled-components";
import { MentorCard } from "./Card";

const partners = [
    {
        id: 1,
        partnerLogo: '/public/assets/metascience.svg'
    },
    {
        id: 2,
        partnerLogo: '/public/assets/itc.svg'
    },
    {
        id: 3,
        partnerLogo: '/public/assets/ulutsoft.svg'
    },
    {
        id: 4,
        partnerLogo: '/public/assets/kodjaz.svg'
    },
]

const mentors = [
    {
        id: 1,
        name: "Нургул Чоюбекова",
        position: "Frontend Developer",
        image: '/assets/mentor.png'
    },
    {
        id: 2,
        name: "Жазгүл Арстанбек кызы",
        position: "Flutter Developer",
        image: '/assets/mentor.png'
    },
    {
        id: 3,
        name: "Амирбек Амираев",
        position: "Frontend Developer",
        image: '/assets/mentor.png'
    },
    {
        id: 4,
        name: "Нургул Чоюбекова",
        position: "Frontend Developer",
        image: '/assets/mentor.png'
    },
    {
        id: 5,
        name: "Жазгүл Арстанбек кызы",
        position: "Flutter Developer",
        image: '/assets/mentor.png'
    },
    {
        id: 6,
        name: "Амирбек Амираев",
        position: "Frontend Developer",
        image: '/assets/mentor.png'
    },
]

export const Mentors = () => {

    return (
        <Box
            sx={{
                display: {xs: 'none', md: 'block'}
            }}
        >
            <Box>
                <Typography
                    variant="h3"
                    sx={{
                        m: '85px 0 60px 0',
                        textAlign: 'center',
                    }}
                >
                    Өнөктөштөр
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: '90px'
                    }}
                >
                    {partners.map((partner) => (
                        <Box
                            key={partner.id}
                        >
                            <Box
                                component={'img'}
                                src={partner.partnerLogo}
                            />
                        </Box>

                    ))}
                </Stack>
            </Box>

            <Box>
                <Typography
                    variant="h3"
                    sx={{
                        m: '60px 0 40px 0',
                        textAlign: 'center',
                    }}
                >
                    Менторлор
                </Typography>
                <CarouselWrapper className="carousel-container" >
                    <CarouselProvider
                        visibleSlides={3}
                        step={1}
                        naturalSlideWidth={100}
                        naturalSlideHeight={144}
                        totalSlides={mentors.length}
                    >
                        <Slider>
                            {mentors.map((mentor) => (
                                <Slide className="wrap" key={mentor.id} index={mentor.id}>
                                    <MentorCard
                                        name={mentor.name}
                                        position={mentor.position}
                                        image={mentor.image}
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

  .wrap{
    display: flex;
    flex-wrap: wrap;
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