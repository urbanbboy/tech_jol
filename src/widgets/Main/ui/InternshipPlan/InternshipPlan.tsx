import {
    Accordion,
    AccordionDetails,
    Box,
    styled,
    Typography
} from "@mui/material"
import MuiAccordionSummary, {AccordionSummaryProps} from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

interface InternshipAccordionProps {
    header: string;
    accordionInfo: string;
    defaultExpanded: boolean;
}

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '18px', color: '#000' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const InternshipAccordion = (props: InternshipAccordionProps) => {
    const { header, accordionInfo, defaultExpanded } = props

    return (
        <Accordion sx={{ borderRadius: '10px', mb: '10px' }} defaultExpanded={defaultExpanded}>
            <AccordionSummary>
                <Typography fontWeight={'600'} fontSize={'18px'}>{header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {accordionInfo}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export const InternshipPlan = () => {

    const accordions = [
        {
            id: 1,
            header: "Получаешь теоретические знания",
            accordionInfo: 'После каждой живой лекции тебя ждет обязательная минимальная домашняя работа, и бонусные практические задания.',
            defaultExpanded: true
        },
        {
            id: 2,
            header: "Получаешь теоретические знания",
            accordionInfo: 'После каждой живой лекции тебя ждет обязательная минимальная домашняя работа, и бонусные практические задания.',
            defaultExpanded: false
        },
        {
            id: 3,
            header: "Получаешь теоретические знания",
            accordionInfo: 'После каждой живой лекции тебя ждет обязательная минимальная домашняя работа, и бонусные практические задания.',
            defaultExpanded: false
        },
        {
            id: 4,
            header: "Получаешь теоретические знания",
            accordionInfo: 'После каждой живой лекции тебя ждет обязательная минимальная домашняя работа, и бонусные практические задания.',
            defaultExpanded: false
        },
        {
            id: 5,
            header: "Получаешь теоретические знания",
            accordionInfo: 'После каждой живой лекции тебя ждет обязательная минимальная домашняя работа, и бонусные практические задания.',
            defaultExpanded: false
        },
    ]

    return (
        <Box
            sx={{
                mt: '120px',
            }}
        >
            <Box
                sx={{
                    padding: '50px',
                    bgcolor: '#031634',
                    borderRadius: '10px'
                }}
            >
                <Typography variant="h4" color="#FFF">Стажировка кандай өтөт?</Typography>
                <Box mt={'40px'}>
                    {accordions.map((accordion) => (
                        <InternshipAccordion
                            key={accordion.id}
                            header={accordion.header}
                            accordionInfo={accordion.accordionInfo}
                            defaultExpanded={accordion.defaultExpanded}
                        />
                    ))}
                </Box>
            </Box>

        </Box>
    )
}
