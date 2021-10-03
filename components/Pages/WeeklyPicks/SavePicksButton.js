import React from 'react'
import { updatePicks } from '../../../hooks/api/updatePicks'
import NewButton from '../../Shared/NewButton'
import styled from 'styled-components'
import { useDispatch, useSelector} from 'react-redux'
import { setSnackbar } from '../../../redux/snackbarSlice'
import { setPlayerObject } from '../../../redux/playerObjectSlice'

const Wrapper = styled.div`

`

const SavePicksButton = () => {
    const {playerObject} = useSelector(state => state.playerObject)
    const picks = playerObject?.picks
    const dispatch = useDispatch()

    const handleClick = async () => {
        checkForDuplicates()
        const response = await updatePicks(picks)
        const newPlayerObject = response?.data?.returnedObj
        dispatch(setPlayerObject(newPlayerObject))
        
        dispatch(setSnackbar(true));
        setTimeout(() => {
            dispatch(setSnackbar(false))
        }, 3000);
    }

    return (
        <Wrapper>
            <NewButton 
                onClick={() => handleClick()}
                text='Save Picks'
            />
        </Wrapper>
    )
}

export default SavePicksButton
