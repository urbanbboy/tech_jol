import {
    Box,
    Button,
    Stack,
    TextField,
    Typography
} from "@mui/material"

interface FeedBackInputProps {
    label?: string;
    multiline?: boolean;
    rows?: number;
    placeholder?: string;
}

const FeedBackInput = (props: FeedBackInputProps) => {
    const { placeholder, ...others } = props

    return (
        <TextField
            variant="outlined"
            placeholder={placeholder}
            sx={{
                bgcolor: '#FFF',
                width: { sm: '100%', md: '100%' },
                maxWidth: '100%',
                borderRadius: '7px'
            }}
            {...others}
        />
    )
}

export const FeedBack = () => {
    return (
        <Box mt={'80px'}>
            <Box
                sx={{
                    borderRadius: '10px',
                    bgcolor: 'primary.main'
                }}>
                <Typography
                    sx={{
                        padding: '25px',
                        color: '#FFF',
                        textAlign: 'center',
                    }}
                    variant="h4"
                >
                    Кайтарым байланыш
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',

                    }}
                >
                    <Stack gap={'12px'} direction={'column'} >
                        <FeedBackInput
                            placeholder={"Аты-жөнү"}
                        />
                        <FeedBackInput
                            placeholder={'Телефон'}
                        />
                        <FeedBackInput
                            placeholder={'E-mail'}
                        />
                    </Stack>
                    <Box
                        sx={{
                            padding: { xs: '0', md: '10px' },
                            
                        }}
                    >
                        <FeedBackInput
                            multiline
                            rows={7}
                            placeholder="Комментарий..."
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', p: '30px 0' }}>
                    <Button
                        variant="outlined"
                        sx={{
                            width: '200px',
                            height: '50px',
                            bgcolor: '#FFF',
                            color: 'primary.main',
                            fontWeight: '500'
                        }}
                        size="large"
                    >
                        Жөнөтүү
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
