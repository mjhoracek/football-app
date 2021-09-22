import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../redux/userSlice'
// Api functions
import { getPlayerObject } from '../hooks/api/getPlayerObject'
// Components
import Dashboard from '../components/Layouts/Dashboard'
import WeeklyPicksBox from '../components/Pages/WeeklyPicks/WeeklyPicksBox'



const WeeklyPicks = () => {
    const { currentUser } = useAuth()
    const dispatch = useDispatch()
    const router = useRouter()
    const [playerObject, setPlayerObject] = useState(null)
    const [week, setWeek] = useState(1)
    
    
    useEffect(() => {
      const fetchData = async () => {
        const object = await getPlayerObject()
        setPlayerObject(object?.data[0])
        dispatch(setUser(object?.data[0]))
    }
    if(currentUser){
        fetchData()
    }
    getStreams()
}, [currentUser])


    const games = playerObject?.picks[`${week - 1}`]

        
    const handleTeamSelection = (favorite, week, index) => {
        let existingPlayerObj = JSON.parse(JSON.stringify(playerObject))

        existingPlayerObj.picks[week-1][index].chosenWinner = favorite

        setPlayerObject(existingPlayerObj)
        console.log('playerObject Changed Successfully', playerObject)
    }
    

    const handlePointsSelection = (points, week, index) => {
        let existingPlayerObj = JSON.parse(JSON.stringify(playerObject))

        existingPlayerObj.picks[week-1][index].points = points


        ///Check for duplicates - hasDuplicates returns TRUE if index of duplicates exists
                let pointValues = []
                existingPlayerObj.picks[week-1].map(game => pointValues.push(game.points))

                function hasDuplicates(arr) {
                    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
                }
                
                if (hasDuplicates(pointValues)) {
                    console.log("Duplicate elements found.");
                }
                else {
                    console.log("No Duplicates found.");
                }
        
        setPlayerObject(existingPlayerObj)
        console.log('playerObject Changed Successfully', playerObject)
    }

    
    return (
        <Dashboard 
            header='Enter Weekly Picks' 
            savepicks={true}
            playerObject={playerObject}
        >
                {playerObject ? 
                
                <WeeklyPicksBox 
                    week={week} 
                    setWeek={setWeek} 
                    games={games} 
                    setPlayerObject={setPlayerObject}
                    handleTeamSelection={handleTeamSelection}
                    playerObject={playerObject}
                    handlePointsSelection={handlePointsSelection}
                />

                : 

                <h1 style={{color: 'white'}}>Loading...</h1>}
        </Dashboard>
    )
}

export default WeeklyPicks



