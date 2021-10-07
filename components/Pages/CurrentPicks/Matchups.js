import React from 'react'
import styled from 'styled-components'
import { teamNames } from '../../../utils/dictionaries/teamNames'
import { colors } from '../../../styles/colors'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 75px;
    background: linear-gradient(180deg, #31343B 0%, #444444 100%);
    box-shadow: 0px 0px 37px #000000;
    border-radius: 10px;
    margin-bottom: 10px;
`

const HomeVisitor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 100%;
    border-right: 1px solid ${colors.purple};
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
    padding: 10% 10%;
`

const Matchups = ({schedule, week}) => {
    const games = schedule[`${week - 1}`]

    return (
        <Container>
            <HomeVisitor>
                <Label>Visitor</Label>
                <Label>Home</Label>
            </HomeVisitor>
                {games &&
                    games.map((game, index) => {
                        return (
                            <Game key={index}>
                                <TeamAbv>{teamNames[game.awayteam]}</TeamAbv>
                                <TeamAbv>{teamNames[game.hometeam]}</TeamAbv>
                            </Game>
                        )
                })}
        </Container>
    )
}

export default Matchups
