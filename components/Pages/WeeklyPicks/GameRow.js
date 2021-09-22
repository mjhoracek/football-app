import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '../../../redux/userSlice'

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

const GameRow = ({index, game, week, handleTeamSelection, handlePointsSelection }) => {
    const {user} = useSelector((state) => state.user)
    const [pickRadio, setPickRadio] = useState('')

    return (
        <Wrapper>
            {user &&
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
                        <select
                             name="pointsSelector"
                             onChange={e => {
                                    handlePointsSelection(e.target.value, week, index)
                                }}
                        >
                            <option value="">-</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                        </select>

                        </Points>
                    </PointsBox>
                </>
            }
        </Wrapper>
    )
}

export default GameRow
