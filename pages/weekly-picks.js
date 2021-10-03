import { useSelector } from 'react-redux'
import Dashboard from '../components/Layouts/Dashboard'
import WeeklyPicksBox from '../components/Pages/WeeklyPicks/WeeklyPicksBox'

const WeeklyPicks = () => {
    const { playerObject } = useSelector(state => state.playerObject)

    return (
        <Dashboard 
            header='Enter Weekly Picks' 
            savepicks={true}
        >
                {playerObject ?  <WeeklyPicksBox/>  :  <h1 style={{color: 'white'}}>Loading...</h1>}

        </Dashboard>
    )
}
export default WeeklyPicks