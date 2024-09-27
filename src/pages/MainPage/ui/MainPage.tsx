import { Directions, InternshipPlan, Mentors, Opinions, Welcome } from "@/widgets/Main"
import { FeedBack } from "@/features/Feedback"

const opinions = [
    {
        id: 1,
        name: 'Амирбек Амираев',
        position: 'Frontend Developer',
        image: '/assets/mentor.png',
        text: 'После буткемпа я быстро получила работу, но чувствовала себя на ней ужасно неуверенно. Глядя на опытных специалистов вокруг, я думала: “Боже, да куда мне до них?” и ловила себя на мысли, что мне здесь не место, что я каким-то чудом оказалась среди настоящих профессионалов. Справится самой мне не получилось, поэтому я пошла в академию. Я начала задавать вопросы своим менторам, закрыла пробелы в знаниях. А главное - во мне проснулась уверенность в собственных силах. Моей личной победой стал тот момент, когда в наш офис пришел новый заказчик и выбрал именно меня для работы над проектом!'
    },
    {
        id: 2,
        name: 'Амирбек Амираев',
        position: 'Frontend Developer',
        image: '/assets/mentor.png',
        text: 'После буткемпа я быстро получила работу, но чувствовала себя на ней ужасно неуверенно. Глядя на опытных специалистов вокруг, я думала: “Боже, да куда мне до них?” и ловила себя на мысли, что мне здесь не место, что я каким-то чудом оказалась среди настоящих профессионалов. Справится самой мне не получилось, поэтому я пошла в академию. Я начала задавать вопросы своим менторам, закрыла пробелы в знаниях. А главное - во мне проснулась уверенность в собственных силах. Моей личной победой стал тот момент, когда в наш офис пришел новый заказчик и выбрал именно меня для работы над проектом!'
    },
    {
        id: 3,
        name: 'Амирбек Амираев',
        position: 'Frontend Developer',
        image: '/assets/mentor.png',
        text: 'После буткемпа я быстро получила работу, но чувствовала себя на ней ужасно неуверенно. Глядя на опытных специалистов вокруг, я думала: “Боже, да куда мне до них?” и ловила себя на мысли, что мне здесь не место, что я каким-то чудом оказалась среди настоящих профессионалов. Справится самой мне не получилось, поэтому я пошла в академию. Я начала задавать вопросы своим менторам, закрыла пробелы в знаниях. А главное - во мне проснулась уверенность в собственных силах. Моей личной победой стал тот момент, когда в наш офис пришел новый заказчик и выбрал именно меня для работы над проектом!'
    },
]

const MainPage = () => {
    return (
        <div>
            <Welcome />
            <Directions />
            <InternshipPlan />
            <Mentors />
            <Opinions opinions={opinions} />
            <FeedBack />
        </div>
    )
}

export default MainPage