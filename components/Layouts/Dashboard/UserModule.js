import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../../contexts/AuthContext'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 75px;
    border-radius: 10px;
    margin-top: 10px;
    margin-right: 10px;
    background: linear-gradient(180deg, #31343B 0%, #444444 100%);
    box-shadow: 0px 0px 37px #000000;
    font-size: 14px;
`

const Username = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    height: fit-content;
    color: white;
    text-align: center;
    font-size: 14px;
`

const LinksBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50%;
`

const LinkText = styled.h1`
    color: white;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
`

const UserModule = () => {
    const { currentUser, logout,  setError } = useAuth()
    const router = useRouter()

    async function handleLogout() {
        setError("")
    
        try {
            await logout()
            localStorage.clear()
            sessionStorage.clear()
            router.push('/')
        } catch {
            setError("Failed to log out")
        }
        }

    return (
        <Container>
            <Username>Welcome, {currentUser ? currentUser.email : 'No User'}</Username>
            <LinksBox>
                <Link href="/settings">
                    <LinkText onclick>User</LinkText>
                </Link>
                    <LinkText onClick={e => handleLogout()}>Log Out</LinkText>
            </LinksBox>
        </Container>
    )
}

export default UserModule
