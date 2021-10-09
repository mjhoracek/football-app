import Dashboard from '../components/Layouts/Dashboard'
import WeeklyWinnersBox from '../components/Pages/WeeklyWinners'

const WeeklyWinners = ({  }) => {
    console.log()

    return (
        <Dashboard 
            header='Weekly Winners' 
            savepicks={false}
        >
            <WeeklyWinnersBox />
        </Dashboard>
    )
}

export default WeeklyWinners
