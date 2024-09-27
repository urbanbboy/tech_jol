import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Link,
    Stack,
    Typography
} from "@mui/material"

interface DirectionCardProps {
    image: string;
    direction: string;
    detail: string;
}

const directions = [
    {
        id: 1,
        image: '/assets/frontend.png',
        direction: 'Frontend',
        detail: '/'
    },
    {
        id: 2,
        image: '/assets/backend.png',
        direction: 'Backend',
        detail: '/'
    },
    {
        id: 3,
        image: '/assets/flutter.png',
        direction: 'Flutter',
        detail: '/'
    }
]

export const Directions = () => {
    const DirectionCard = (props: DirectionCardProps) => {
        const { image, direction, detail } = props

        return (
            <Card sx={{ maxWidth: '399px', maxHeight: '343px', bgcolor: 'primary.main', borderRadius: '10px' }}>
                <CardMedia
                    component={'img'}
                    alt={direction}
                    image={image}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography
                        sx={{
                            textTransform: 'uppercase',
                            color: '#FFF',
                            fontSize: '24px',
                            fontWeight: '700',
                            mb: '10px'
                        }}
                    >
                        {direction}
                    </Typography>
                    <Button
                        variant={'contained'}
                        sx={{padding: '7px 30px', bgcolor: '#CDA407'}}
                    >
                        <Link
                            underline="none"
                            color="#FFF"
                            href={detail}
                        >
                            Кененирээк
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Box sx={{ mt: '105px' }}>
            <Typography variant="h4" textAlign={'center'} mb={'45px'}>Багыттар</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                {directions.map((direction) => (
                    <DirectionCard
                        key={direction.id}
                        image={direction.image}
                        direction={direction.direction}
                        detail={direction.detail}
                    />
                ))}
            </Stack>
        </Box>
    )
}
