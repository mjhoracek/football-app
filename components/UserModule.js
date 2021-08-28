import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import LogOut from './LogOut'
import { colors } from '../styles/colors'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 150px;
    border-radius: 10px;
    margin-top: 10px;
    margin-right: 10px;
    background: linear-gradient(180deg, #31343B 0%, #444444 100%);
    box-shadow: 0px 0px 37px #000000;
`

const Username = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    color: white;
    text-align: center;
    font-size: 16px;
`

const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    color: white;
    text-align: center;
`

const UserModule = () => {
    const { currentUser } = useAuth()

    return (
        <Container>
            <Username>Welcome, {currentUser ? currentUser.email : 'No User'}</Username>
            <Links>
                <LogOut />
            </Links>
        </Container>
    )
}

export default UserModule
