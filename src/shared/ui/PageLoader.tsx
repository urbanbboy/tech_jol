import { Box, CircularProgress } from "@mui/material";

export const PageLoader = () => {
    return (
        <Box
            sx={{
                height: '100dvh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CircularProgress size={"3rem"} />
        </Box>
    );
};
