import React, { useState } from 'react'
import validator from 'validator'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

import { useAuth } from '../contexts/AuthContext'



const Container = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    background-color: gray;
    border-radius: 15px;
`


const useStyles = makeStyles({
    input: {
        marginTop: '1%',
        marginBottom: '1%',
        color: 'white'
    },
    root: {
        borderColor: 'red',
        color: 'black'
    }
})


function LogIn({ error, setError }) {
    const classes = useStyles()
    const { login, logout } = useAuth()

    const [formInfo, setFormInfo] = useState({
        email: "",
        password: "",
    });
    
    const logIn = async (event) => {
        event.preventDefault()
        setError("")

        if( formInfo.email.length === 0) return setError('You must provide a valid email.')

        if( formInfo.password.length === 0) return setError('You must provide a password')

        if( !validator.isEmail(formInfo.email)) return setError("You must provide a valid email.")

        try {
            const user = await login(formInfo.email, formInfo.password)
        
            console.log('user', user);
            
        } catch (error) {
            setError(error.message)
            console.log('error', error)
        }
    }

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
        } catch {
          setError("Failed to log out")
        }
      }


    const handleChange = (id, value) => {
        setFormInfo({
            ...formInfo,
            [id]: value
        })
    }  
    

    return (
        <Container>
            <form onSubmit={logIn}>
                <TextField 
                    className={classes.input} 
                    type='email'
                    id='email'
                    label="Email"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <TextField 
                    className={classes.input}
                    style={{ paddingBottom: "30px"  }}
                    type='password'
                    id='password'
                    label="Password"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <Button
                    className={classes.input}
                    style={{ width: "100%"  }}
                    variant="outlined" 
                    type='submit'
                >
                    Log In
                </Button>
            </form>
        </Container>
    )

    }

export default LogIn

