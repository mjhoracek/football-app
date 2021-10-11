import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { useSelector } from 'react-redux'


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
    background-color: ${props => props.active ? colors.purple : colors.gray};
    text-align: center;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.55));
    cursor: pointer;
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

const Select = styled.select`
    background: ${colors.gray};
    color: white;
    font-size: 18px;
    border: none;
    font-family: inherit;

    option {
        background: ${colors.gray};
        border: none;
    }
`


const GameRow = ({index, game, week, handleTeamSelection, handlePointsSelection, numOfGames }) => {
    const [pickRadio, setPickRadio] = useState('')

    useEffect(() => {
        if(game.chosenWinner === game.hometeam) setPickRadio('home')
        if(game.chosenWinner === game.awayteam) setPickRadio('away')
    }, [])

    return (
        <Wrapper>
            {true &&
                <>
                    <TeamNameBox
                        active={pickRadio === 'away'} 
                        onClick={(e) => {
                            handleTeamSelection(game.awayteam, week, index)
                            setPickRadio('away')
                            }
                        }
                    >
                        {game.awayteam}
                    </TeamNameBox>

                    <VersusBox>vs</VersusBox>
                    <TeamNameBox 
                        active={pickRadio === 'home'} 
                        onClick={(e) => {
                            handleTeamSelection(game.hometeam, week, index)
                            setPickRadio('home')
                            }
                        }
                    >
                        {game.hometeam}
                    </TeamNameBox>

                    <PointsBox>
                        <Points>
                        <Select
                             name="pointsSelector"
                             placeholder={game.points}
                             onChange={e => {
                                    handlePointsSelection(e.target.value, week, index)
                                }}
                        >
                            <option value="" hidden>{game.points}</option>
                            {/* render one row per game and make sure that point values correspond to the number of games that week */}
                            <>
                                {[...Array(numOfGames)].map((elem, index)=> {
                                    return (
                                        <option key={index} value={index+1}>{index+1}</option> 

                                    )
                                })
                                }
                            </>
                        </Select>

                        </Points>
                    </PointsBox>
                </>
            }
        </Wrapper>
    )
}

export default GameRow
