import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayerObject } from '../../../redux/playerObjectSlice'
import {colors} from '../../../styles/colors'
import styled from 'styled-components'
import GameRow from './GameRow'
import WeekSelector from './WeekSelector'
import SavePicksButton from './SavePicksButton'

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


const WeeklyPicksBox = () => {
    const {playerObject} = useSelector(state => state.playerObject)
    const [week, setWeek] = useState(1)
    const [warning, setWarning] = useState(false)
    const [picksComplete, setPicksComplete] = useState(null)
    const [duplicates, setDuplicates] = useState([])
    const games = playerObject?.picks[`${week - 1}`]
    const numOfGames = games?.length
    const dispatch = useDispatch()

    console.log('picksComplete', picksComplete)

    /////////////////////////
    const checkForDuplicates = () => {
        let pointValues = []

        let existingPlayerObj = JSON.parse(JSON.stringify(playerObject))

        if(existingPlayerObj.picks[week-1]){
            existingPlayerObj.picks[week-1].map(game => pointValues.push(parseInt(game.points)))
        }
        
        const findDuplicates = (arr) => {
            let sorted_arr = arr.slice().sort();
            let results = [];
            for (let i = 0; i < sorted_arr.length - 1; i++) {
              if (sorted_arr[i + 1] == sorted_arr[i]) {
                results.push(sorted_arr[i]);
              }
            }
            return results;
          }
        
        const duplicateSet = [...new Set(findDuplicates(pointValues))]
        setDuplicates(duplicateSet)

        if(duplicateSet.length > 0){
            setWarning(true)
            return true
        } else {
            setWarning(false)
            return false
        }
    }
    
    console.log('picksComplete', picksComplete)
    const checkWinnersSelected = () => {
        const checkGames = games.some(game => game.chosenWinner === "")
        console.log('checkGames', checkGames)
        if(checkGames === false){
            setPicksComplete(true)
        } else {
            setPicksComplete(false)
        }
    }



    ////////////////   
    const handleTeamSelection = (favorite, week, index) => {
        let existingPlayerObj = JSON.parse(JSON.stringify(playerObject))

        existingPlayerObj.picks[week-1][index].chosenWinner = favorite

        dispatch(setPlayerObject(existingPlayerObj))
    }
    //////////////////////////
    
    const handlePointsSelection = (points, week, index) => {
        let existingPlayerObj = JSON.parse(JSON.stringify(playerObject))

        existingPlayerObj.picks[week-1][index].points = points

        dispatch(setPlayerObject(existingPlayerObj))
        checkForDuplicates()
    }
    ////////////////////////////////////////////////


    return (
        <Container>
            <WeekSelector week={week} setWeek={setWeek} />
            <ButtonContainer>
                <SavePicksButton
                    checkForDuplicates={checkForDuplicates}
                    checkWinnersSelected={checkWinnersSelected}
                    picksComplete={picksComplete}
                />
                {warning &&
                    <DuplicateFlag>
                        Duplicate point values for:
                        {duplicates.map((dup, index) => <span key={index}> {dup}  </span>)}
                    </DuplicateFlag> }
                {picksComplete === false &&
                    <DuplicateFlag>
                        Please select winners for each game
                    </DuplicateFlag> }
            </ButtonContainer>
            <GamesWrapper>
            { games &&
                games.map((game, index) => (
                    <GameRow
                    key={index}
                    numOfGames={numOfGames}
                    index={index}
                    game={game}
                    week={week}
                    handleTeamSelection={handleTeamSelection}
                    handlePointsSelection={handlePointsSelection}
                    />
                ))
            }  
            </GamesWrapper>

        </Container>
    )
}

export default WeeklyPicksBox
