import React, { useState } from 'react'
import validator from 'validator'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Divider, Typography, Grid, Paper } from '@material-ui/core'

import { useAuth } from '../contexts/AuthContext'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    background-color: gray;
    border: 20px black;
    border-radius: 15px;
`

const Message = styled.p`
    font-weight: 500;
    letter-spacing: 2px;
    height: 30px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
`

const useStyles = makeStyles({
    input: {
        marginTop: '1%',
        marginBottom: '1%',
    },
    root: {
        borderColor: 'red',
        color: 'black'
    }
})


function SignUpForm() {
    const classes = useStyles()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const message = "Hello User"

    const [formInfo, setFormInfo] = useState({
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    });
    
    const signUp = async (event) => {
        event.preventDefault()
        setError("")

        if( formInfo.email.length === 0) return setError('You must provide an email.')

        if( !validator.isEmail(formInfo.email)) return setError("You must provide a valid email.")
        
        if( formInfo.email !== formInfo.confirmEmail ) return setError('Email and Confirm Email must match')

        if( formInfo.password.length === 0) return setError('You must provide a password')

        if( formInfo.password !== formInfo.confirmPassword ) return setError('Passwords must match')

        try {

            const user = await signup(formInfo.email, formInfo.password)
            console.log('user', user);

        } catch (error) {
            console.log('error', error)
        }
    }

    const errorChecker = () => {
        if (error.length === 0) {
            return        
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
            <form onSubmit={signUp}>
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
                    type='email'
                    id='confirmEmail'
                    label="Confirm Email"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <TextField 
                    className={classes.input} 
                    type='password'
                    id='password'
                    label="Password"
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
                    id='confirmPassword'
                    label="Confirm Password"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <Button 
                    style={{ width: "100%"  }}
                    variant="outlined" 
                    type='submit'
                >
                    Submit
                </Button>
            </form>
                {error.length > 0 ?
                    <Message> {error} </Message> : <Message> {message} </Message> 
                } 
        </Container>
    )

    }

export default SignUpForm

