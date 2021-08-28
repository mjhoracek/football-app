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
import LogOut from '../components/LogOut.js'
import GameRow from '../components/GameRow'
import InputField from '../components/Shared/InputField'
import { updatePlayerObject, updatePlayerWinners } from '../hooks/api/updatePlayerObject'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: gray;
`

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;
    background-color: darkgrey;
`

const CenterColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 70%;
    height: 100%;
    background-color: lightgray;
    margin-top: 5%;
    overflow: scroll;
`

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
    height: 90%;
    background-color: darkblue;
    margin: 20px;
    border-radius: 20px; 
`

const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 75px;
    background-color: #000010;
    margin: 20px;
    color: white;
    border-radius: 20px; 
    font-size: 18px;
`

export default function Home() {
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
  
    const page = 1
    const games = playerObject?.picks.week1

  
  return (
    <Container>
      <LeftColumn />
      <CenterColumn>
      {playerObject && games.map((game, index) => (
            <GameRow
              key={index} 
              index={index} 
              game={game}
            />
            ))
      }  
      </CenterColumn>
      <RightColumn>
        <UserBox>{playerObject?.playerName || 'Not Logged In'}</UserBox>
        <UserBox>
          {playerObject && <p style={{textAlign: 'center'}}>Player Object Loaded</p>}
        </UserBox>
        <UserBox>
          <button onClick={() => updatePlayerObject({email: 'jonnnnnnnyBoncennnnnnn', playerName: 'Bill', team : 'THE ATLANTA BRAVES'})}>Random</button>
        </UserBox>
        <LogOut />
      </RightColumn>
    </Container>
  )
}
