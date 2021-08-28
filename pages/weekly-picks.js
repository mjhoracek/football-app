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
import WeeklyPicksBox from '../components/WeeklyPicksBox'
import UserModule from '../components/UserModule'
import Navbar from '../components/Navbar'

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

    const games = playerObject?.picks.week1


    return (
        <Container>
           <LeftCol>
                <Navbar />
           </LeftCol>
           <CenterCol>
               {playerObject ? <WeeklyPicksBox games={games}/> : <h1>Loading...</h1>}
           </CenterCol>
           <RightCol>
                <UserModule />
           </RightCol>
        </Container>
    )
}

export default WeeklyPicks
