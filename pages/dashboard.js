import Head from 'next/head'
import styled from 'styled-components'
import LogOut from '../components/LogOut.js'
import { useAuth } from '../contexts/AuthContext'

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
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    height: 100%;
    background-color: lightgray;
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


  return (
    <Container>
      <LeftColumn />
      <CenterColumn />
      <RightColumn>
        <UserBox>{currentUser?.email || 'Not Logged In'}</UserBox>
        <LogOut />
      </RightColumn>
    </Container>
  )
}
