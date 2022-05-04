import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayerObject } from '../../../redux/playerObjectSlice'
import {colors} from '../../../styles/colors'
import styled from 'styled-components'
import GameRow from './GameRow'
import WeekSelector from '../WeeklyPicks/WeekSelector'
import SavePicksButton from '../WeeklyPicks/SavePicksButton'
import NewButton from '../../Shared/NewButton'
import { updateWinner } from '../../../api/updateWinner'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const GamesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 97%;
    padding-bottom: 5%;
`

const DuplicateFlag = styled.div`
    padding: 15px 25px;
    width: 30%;
    margin-bottom: 3%;
    border-radius: 10px;
    color: white;
    text-align: center;
    background-color: ${colors.red};
`


const SetWinnersBox = () => {
    const {playerObject} = useSelector(state => state.playerObject)
    const [week, setWeek] = useState(1)
    const games = playerObject?.picks[`${week - 1}`]
    const [winners, setWinners] = useState([])

    
    const handleClick = () => {
        console.log('works')
        updateWinner( 'mitchell', 0, 0)
    }


    return (
        <Container>
            <WeekSelector week={week} setWeek={setWeek} />
            <ButtonContainer>
                <NewButton text='Save winner' onClick={() => handleClick()}/>
            </ButtonContainer>
            {/* <GamesWrapper>
            { games &&
                games.map((game, index) => (
                    <GameRow
                    key={index}
                    index={index}
                    game={game}
                    week={week}
                    handleTeamSelection={handleTeamSelection}
                    />
                ))
            }  
            </GamesWrapper> */}

        </Container>
    )
}

export default SetWinnersBox
