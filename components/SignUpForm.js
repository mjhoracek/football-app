import React, { useState } from 'react'
import validator from 'validator'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Divider, Typography, Grid, Paper } from '@material-ui/core'

import { useAuth } from '../contexts/AuthContext'

import InputField from './Shared/InputField'

const Container = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    background-color: gray;
    border-radius: 15px;
`


const useStyles = makeStyles({
    root: {
        marginTop: '1%',
        marginBottom: '1%',
        cursor: 'pointer',
        borderColor: 'red',
        color: 'white'
    }
})


function SignUpForm({ error, setError, setMessage }) {
    const classes = useStyles()
    const { signup, currentUser } = useAuth()

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
            setMessage(currentUser.email)

        } catch (error) {
            setError(error.message)
            console.log('error', error)
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
                    className={classes.root} 
                    type='email'
                    id='email'
                    label="Email"
                    variant="standard"
                    color='primary' 
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <TextField 
                    className={classes.root} 
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
                    className={classes.root} 
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
                    className={classes.root}
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
                    color='secondary'
                    style={{ width: "100%"  }}
                    variant="outlined" 
                    type='submit'
                >
                    Sign Up
                </Button>
                <InputField
                                    type='password'
                                    id='confirmPassword'
                                    label="Confirm Password"
                                    variant="standard"  
                >Hello</InputField>
            </form>
        </Container>
    )

    }

export default SignUpForm

