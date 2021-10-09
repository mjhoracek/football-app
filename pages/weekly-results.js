import Dashboard from '../components/Layouts/Dashboard'
import WeeklyResultsBox from '../components/Pages/WeeklyResults'

const WeeklyResults = ({  }) => {
    console.log()

    return (
        <Dashboard 
            header='Weekly Results' 
            savepicks={false}
        >
            <WeeklyResultsBox  />
        </Dashboard>
    )
}

export default WeeklyResults
