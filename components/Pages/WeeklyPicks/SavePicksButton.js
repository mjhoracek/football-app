import React from 'react'
import { updatePicks } from '../../../api/updatePicks'
import NewButton from '../../Shared/NewButton'
import styled from 'styled-components'
import { useDispatch, useSelector} from 'react-redux'
import { setSnackbar } from '../../../redux/snackbarSlice'
import { setPlayerObject } from '../../../redux/playerObjectSlice'

const Wrapper = styled.div`

`

const SavePicksButton = ({checkForDuplicates, checkWinnersSelected, picksComplete}) => {
    const {playerObject} = useSelector(state => state.playerObject)
    const picks = playerObject?.picks
    const dispatch = useDispatch()

    console.log('picks', picks)

    const handleClick = async () => {
        const duplicates = checkForDuplicates()
        checkWinnersSelected()

        if((duplicates === false) && (picksComplete === true)){
            const response = await updatePicks(picks)
            const newPlayerObject = response?.data?.returnedObj
            dispatch(setPlayerObject(newPlayerObject))
            
            dispatch(setSnackbar(true));
            setTimeout(() => {
                dispatch(setSnackbar(false))
            }, 3000);
        }
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
