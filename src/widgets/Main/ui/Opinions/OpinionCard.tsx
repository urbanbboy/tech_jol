import {
    Avatar,
    Box,
    Grid2,
    Typography
} from "@mui/material"

interface OpinionCardProps {
    name: string;
    position: string;
    image: string;
    text: string;
}

export const OpinionCard = (props: OpinionCardProps) => {
    const { name, position, image, text } = props

    return (
        <Box
            sx={{
                border: '1px solid #e5e5e5',
                padding: '50px 80px'
            }}
        >
            <Grid2
                container
                sx={{
                    mb: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid2
                    size={3}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Avatar
                        sx={{ width: 100, height: 100 }}
                        alt={name}
                        src={image}
                    />
                </Grid2>
                <Grid2 size={9}>
                    <Typography variant="h4">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1">
                        {position}
                    </Typography>
                </Grid2>
            </Grid2>
            <Box>
                <Typography variant="body1">
                    {text}
                </Typography>
            </Box>
        </Box>
    )
}
