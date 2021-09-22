import React, { useState, useEffect } from 'react'
import * as Styled from './style'
import FormRow from './Formrow'
import { colors } from '../../../styles/colors'
import NewButton from '../../Shared/NewButton'
import { updatePlayerObject } from '../../../hooks/api/updatePlayerObject'

const UserSettings = ({ playerObject, setPlayerObject }) => {
    const [changemade, setChangeMade] = useState(false)
    console.log('player obj', playerObject)


    const handleChange = (update, field) => {
        setChangeMade(true)
        let existingPlayerObj = JSON.parse(JSON.stringify(playerObject))

        existingPlayerObj[field] = update

        setPlayerObject(existingPlayerObj)
        console.log('playerObject Changed Successfully', playerObject)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(changemade === false){
            return
        }
        updatePlayerObject(playerObject)
        console.log('update submitted')
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
