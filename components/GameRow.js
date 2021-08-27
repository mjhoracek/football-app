import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '../redux/userSlice'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: ${colors.darkblue};
`
const GameBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 50px;
    background-color: ${colors.purple};
    text-align: center;
`

const GameRow = ({index, game }) => {
    const {user} = useSelector((state) => state.user)
    
    console.log('game', game)

    return (
        <Wrapper>
        {
           user && <> 
            <GameBox>{game.awayteam}</GameBox>
            <GameBox>{game.hometeam}</GameBox>
           </>
        }  
        </Wrapper>
    )
}

export default GameRow
