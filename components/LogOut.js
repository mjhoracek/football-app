import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'

const Wrapper = styled.div`
    display: flex;
    padding-top: 20px;
    width: 50%;
`




const LogOut = () => {
    const { logout,  setError } = useAuth()
    const router = useRouter()


async function handleLogout() {
    setError("")

    try {
        await logout()
        router.push('/')
    } catch {
        setError("Failed to log out")
    }
    }

    return (
        <Wrapper>
            <Button  
                    style={{ width: "100%"  }}
                    variant="outlined" 
                    type='submit'
                    onClick={e => handleLogout()}
            >
                    Log Out
            </Button>
        </Wrapper>
    )
}

export default LogOut
