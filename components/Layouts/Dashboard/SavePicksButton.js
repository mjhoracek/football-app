import React from 'react'
import { updatePlayerObject } from '../../../hooks/api/updatePlayerObject'
import NewButton from '../../Shared/NewButton'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-top: 95px;
`

const SavePicksButton = ({playerObject}) => {
    return (
        <Wrapper>
            <NewButton 
                onClick={() => (updatePlayerObject(playerObject))}
                text='Save Picks'
            />
        </Wrapper>
    )
}

export default SavePicksButton
