import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { teamNames } from '../../../utils/dictionaries/teamNames'
import { colors } from '../../../styles/colors'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 50px;
    background: ${props => props.highlight ? colors.purple : colors.row  };
    box-shadow: 0px 0px 37px #000000;
    border-radius: 10px;
    margin: 10px 0;
`

const NameBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 100%;
    border-right: 1px solid;
    border-color: ${props => props.highlight ?  colors.white : colors.purple};
`

const Label = styled.p`
    color: white;
    font-size: 14px;
    text-align: center;
    padding: 10% 10%;
`

const Game = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 100%;
`

const TeamAbv = styled.p`
    color: white;
    font-size: 14px;
    text-align: center;
    padding: 3px 3px;
`

const PlayerPicksRow = ({player, week}) => {
    const {playerObject} = useSelector(state => state.playerObject)
    const picks = player.picks[`${week - 1}`]


    return (
        <Container highlight={(player.playerName == playerObject?.playerName)}>
            <NameBox highlight={(player.playerName == playerObject?.playerName)}>
                <Label>{player.playerName}</Label>
            </NameBox>
                {picks &&
                    picks.map((pick, index) => {
                        return (
                            <Game key={index}>
                                {pick.points > 0 && <TeamAbv>{pick.points}</TeamAbv>}
                                {pick.chosenWinner.length > 0 && <TeamAbv>{teamNames[pick.chosenWinner]}</TeamAbv>}
                            </Game>
                        )
                })}
        </Container>
    )
}

export default PlayerPicksRow
