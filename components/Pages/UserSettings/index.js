import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as Styled from './style'
import FormRow from './Formrow'
import { colors } from '../../../styles/colors'
import NewButton from '../../Shared/NewButton'
import { setPlayerObject } from '../../../redux/playerObjectSlice'
import { useDispatch } from 'react-redux'
import { setSnackbar } from '../../../redux/snackbarSlice'
import { updateSettings } from '../../../hooks/api/updateSettings'


const UserSettings = () => {
    const dispatch = useDispatch()
    const [changemade, setChangeMade] = useState(false)
    const { playerObject } = useSelector(state => state.playerObject)
    const [settings, setSettings] = useState({
        email: '',
        playerName: ''
    })

    useEffect(() => {
            setSettings({
                email: playerObject?.email,
                playerName: playerObject?.playerName,
            })
    }, [playerObject])

    /// handles snackbar appear and disappear
    const handleSnack = () => {
        dispatch(setSnackbar(true));
        setTimeout(() => {
            dispatch(setSnackbar(false))
        }, 3000);
    }

    /// here we change the state, but what if the user does not save the changes?
    const handleChange = (update, field) => {
        setSettings({
            ...settings,
            [field]: update
        })

        setChangeMade(true)
    }


    /// run all the functions and update DB
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(changemade === false){
            return
        }
        ///save the response from mongodb into state, so that we know they're consistent across server an client
        const response = await updateSettings(settings)
        console.log('response', response)
        if(response.status === 200){
            const newPlayerObject = response?.data?.returnedObj
            dispatch(setPlayerObject(newPlayerObject)) 
            handleSnack()
            return
        }
        console.log('something went wrong with saving the new settings', response)
    }
    

    return (
        <Styled.Container>
            <Styled.FormContainer>
                <form onSubmit={handleSubmit}>
                <FormRow 
                    label='Email:'
                    name='email'  
                    placeholder={playerObject?.email} 
                    onChange={(e) => handleChange(e.target.value, e.target.name)} 
                    type='email'
                />
                <FormRow 
                    label='Name:' 
                    name='playerName' 
                    placeholder={playerObject?.playerName}
                    onChange={(e) => handleChange(e.target.value, e.target.name)} 
                    type='text'
                />
                <NewButton
                    bgColor={colors.purple}
                    text='Save Changes' 
                    type='submit'
                />
                </form>
            </Styled.FormContainer>
        </Styled.Container>
    )
}

export default UserSettings
