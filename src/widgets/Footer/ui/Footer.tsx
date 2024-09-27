import {
    Avatar,
    Box,
    Container,
    Grid2,
    Stack,
    Typography
} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

const networks = [
    {
        id: 1,
        name: 'Instagram',
        icon: <InstagramIcon />,
        link: 'https://instagram.com'
    },
    {
        id: 1,
        name: 'Telegram',
        icon: <TelegramIcon />,
        link: 'https://telegram.com'
    },
    {
        id: 1,
        name: 'WhatsApp',
        icon: <WhatsAppIcon />,
        link: 'https://whatsapp.com'
    },
]

export const Footer = () => {

    return (
        <Box
            component={'footer'}
            sx={{
                mt: '150px',
                bgcolor: "primary.main",
                color: '#FFF'

            }}
        >
            <Container sx={{ p: '50px 0 80px 0' }}>
                <Grid2 container>
                    <Grid2 size={4}>
                        <Stack>
                            <Avatar
                                sx={{ width: '150px', height: '150px' }}
                                alt="Tech Jol"
                                src="/assets/logo.png"
                            />
                            <Typography variant="body1" width={'85%'} pt={'20px'}>
                                Разработка эффективного решения за максимально короткие сроки по самым доступным и конкурентным в странах СНГ ценам.
                            </Typography>
                        </Stack>
                    </Grid2>
                    <Grid2 size={3}>
                        <Stack>
                            <Typography
                                sx={{
                                    fontWeight: '700',
                                    fontSize: '18px',
                                    mb: '20px'
                                }}
                            >
                                Мы в соцсетях
                            </Typography>
                            <Box>
                                {networks.map((network) => (
                                    <Box key={network.id}>
                                        <Box
                                            component={'a'}
                                            href={network.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                display: 'flex',
                                                gap: '5px',
                                                mb: '10px'
                                            }}
                                        >
                                            {network.icon} {network.name}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Stack>
                    </Grid2>
                    <Grid2 size={2}>
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '18px',
                                mb: '20px'
                            }}
                        >
                            Контакты
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <PhoneIcon />
                            <Box
                                component={'a'}
                                href="tel:+996504188000"
                                sx={{ textDecoration: 'none', color: "#FFF" }}
                            >
                                +996 504 18-80-00
                            </Box>
                        </Box>
                    </Grid2>
                    <Grid2 size={3}>
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '18px',
                                mb: '20px'
                            }}
                        >
                            Адрес
                        </Typography>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '5px',
                                    mb: '10px'
                                }}
                            >
                                <LocationOnIcon />
                                <Typography>Максима Горкого 97</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '5px',
                                }}
                            >
                                <MailIcon />
                                <Box
                                    component={'a'}
                                    href="mailto: info@techjol.kg"
                                    sx={{ color: '#FFF', textDecoration: 'none' }}
                                >
                                    info@techjol.kg
                                </Box>
                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}
