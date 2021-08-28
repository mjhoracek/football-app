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
    height: 70px;
    color: white;
    size: 18px;
`
const TeamNameBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 50px;
    margin: 2%;
    background-color: ${colors.gray};
    text-align: center;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.55));
`
const VersusBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 50px;
    margin: 2%;
    text-align: center;
`
const PointsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 50px;
    margin: 2%;
    text-align: center;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.55));
`

const Points = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 2%;
    text-align: center;
    border-radius:10px;
    background-color: ${colors.gray};
`

const GameRow = ({index, game }) => {
    const {user} = useSelector((state) => state.user)

    return (
        <Wrapper>
            {user &&
                <>
                    <TeamNameBox>{game.awayteam}</TeamNameBox>
                    <VersusBox>vs</VersusBox>
                    <TeamNameBox>{game.hometeam}</TeamNameBox>
                    <PointsBox>
                        <Points>-</Points>
                    </PointsBox>
                </>
            }
        </Wrapper>
    )
}

export default GameRow
