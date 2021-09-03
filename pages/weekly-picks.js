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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

`

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
    height: 700px;
`

const CenterCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
    
`

const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
    height: 700px;
`

const WeeklyPicks = () => {
    const { currentUser } = useAuth()
    const {user} = useSelector((state) => state.user)
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
    }, [currentUser])


    const games = playerObject?.picks[`${week - 1}`]
    
    const gamesQuantity = games?.length


    // console.log(playerObject?.picks[0][1].awayteam) /// week 1, game 2
    
    console.log(playerObject)
    
    const changer = () => {
        let existingPlayerObj = JSON.parse(JSON.stringify(playerObject))
        
        existingPlayerObj.picks[0][0].chosenWinner = 'AAAAAAAAAAAAAAAAAAAAAAA'
        
        setPlayerObject(existingPlayerObj)
        console.log('updated player obj', playerObject)
    }
    
    
    
    
    return (
        <Dashboard>
            {playerObject ? <WeeklyPicksBox week={week} setWeek={setWeek} games={games}/> : <h1 style={{color: 'white'}}>Loading...</h1>}
        </Dashboard>
    )
}

export default WeeklyPicks



