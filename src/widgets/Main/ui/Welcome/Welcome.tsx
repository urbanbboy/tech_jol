import { RouteNames } from "@/app/providers/routerProvider"
import { Box, Button, Grid2, Link, Typography } from "@mui/material"

export const Welcome = () => {
    return (
        <Box>
            <Grid2 container mt={'60px'}>
                <Grid2 size={6} mt={'40px'}>
                    <Typography 
                        variant={'h2'}
                        sx={{
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            mb: '20px'
                        }}
                    >
                        Tech Jol
                    </Typography>
                    <Typography
                        sx={{
                            color: '#7A7979',
                            mb: '20px'
                        }} 
                        variant={'h4'}
                    >
                        акысыз IT стажировка
                    </Typography>
                    <Typography sx={{width: '60%'}} variant={'subtitle1'}>
                        Разработка эффективного решения за максимально короткие сроки по самым доступным и конкурентным в странах СНГ ценам.
                    </Typography>
                    <Button
                        variant={'contained'}
                        sx={{padding: '15px 30px', mt: '10px'}}
                    >
                        <Link
                            underline="none"
                            href={RouteNames.LOGIN_PAGE}
                            color="#FFF"
                        >
                            Tech jolго кошулуу
                        </Link>
                    </Button>
                </Grid2>
                <Grid2 size={6}>
                    <Box
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto',
                        }}
                        component={'img'}
                        src="/assets/welcome.png"
                    />
                </Grid2>
            </Grid2>
        </Box>
    )
}
