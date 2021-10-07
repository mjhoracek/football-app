import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../../contexts/AuthContext'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { colors } from '../../../styles/colors'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75px;
    border-bottom: 1px solid ${colors.purple};
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
    font-size: px;
    text-align: center;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        text-decoration-thickness: 2px;
    }
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
                    <LinkText>Edit Account</LinkText>
                </Link>
                    <LinkText onClick={e => handleLogout()}>Log Out</LinkText>
            </LinksBox>
        </Container>
    )
}

export default UserModule
