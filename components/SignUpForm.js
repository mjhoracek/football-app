import React, { useState } from 'react'
import validator from 'validator'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Divider, Typography, Grid, Paper } from '@material-ui/core'
import getFirebase from '../firebase'


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

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 16px;
`

const useStyles = makeStyles({
    input: {
        margin: '3%',
        fontFamily: 'inherit'
    },
    root: {
        borderColor: 'red',
        color: 'black'
    }
})


function SignUpForm() {
    const classes = useStyles()
    const firebaseInstance = getFirebase()
    const [error, setError] = useState("")

    const [formInfo, setFormInfo] = useState({
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    });
    
    const signUp = async (event) => {
        event.preventDefault()
        setError("")

        if( email.length === 0) { 
            setError('You must provide a valid email.')
            alert(error)
            return
        }

        if( password.length === 0) return setError('You must provide a password')

        if( !validator.isEmail(email)) return setError("You must provide a valid email.")

        if( email !== confirmEmail ) return setError('Email and Confirm Email must match')

        if( password !== confirmPassword ) return setError('Passwords must match')

        try {
            if(firebaseInstance){
                const user = await firebaseInstance.auth().createUserWithEmailAndPassword(formInfo.email, formInfo.password)
                console.log('user', user);
                alert(`Welcome ${formInfo.email}`)
            }
            
        } catch (error) {
            console.log('error', error)
            alert(error.message)
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
            <Wrapper>
                <Typography className={classes.root} >Sign Up</Typography>
                <Typography style={{textAlign: 'right'}} className={classes.root}>Forgot Password?</Typography>
            </Wrapper>
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
                <Divider className={classes.root}/>
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
                <Divider className={classes.root}/>
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
                <Divider />
                <TextField 
                    className={classes.input} 
                    type='password'
                    id='confirmPassword'
                    label="Confirm Password"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <Divider />
                <Button  
                    variant="outlined" 
                    type='submit'
                >
                    Submit
                </Button>
            </form>
        </Container>
    )

    }

export default SignUpForm

