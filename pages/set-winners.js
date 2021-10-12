import { useSelector } from 'react-redux'
import Dashboard from '../components/Layouts/Dashboard'
import SetWinnersBox from '../components/Pages/SetWinner/SetWinners'

const SetWinners = () => {
    const { playerObject } = useSelector(state => state.playerObject)

    return (
        <Dashboard 
            header='Enter Weekly Picks' 
            savepicks={true}
        >
                {playerObject ?  <SetWinnersBox/>  :  <h1 style={{color: 'white'}}>Loading...</h1>}

        </Dashboard>
    )
}
export default SetWinners