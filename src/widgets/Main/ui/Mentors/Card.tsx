import {
    CardMedia,
    CardContent,
    Typography,
    Card,
    Box
} from "@mui/material";

interface MentorCardProps {
    name: string;
    position: string;
    image: string;
}

export const MentorCard = (props: MentorCardProps) => {
    const { name, position, image } = props

    return (
        <Card
            sx={{
                maxWidth: 378,
                borderRadius: '8px',
            }}
        >
            <Box>
                <CardMedia
                    sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                    }}
                    component="img"
                    image={image}
                    alt={name}

                />
            </Box>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {position}
                </Typography>
            </CardContent>
        </Card>
    );
};
