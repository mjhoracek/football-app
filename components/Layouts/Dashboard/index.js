import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import * as Styled from './style'

import UserModule from '../Dashboard/UserModule'
import Navbar from '../Dashboard/Navbar/index'
import SavePicksButton from './SavePicksButton'



const Dashboard = ({ children, header, savepicks, playerObject }) => {

    return (
        <Styled.Container>
            <Styled.LeftCol>
                <Navbar />
            </Styled.LeftCol>
            <Styled.CenterCol>
                <Styled.Header>
                    {header}
                </Styled.Header>
                {children}
            </Styled.CenterCol>
            <Styled.RightCol>
                <UserModule />
                {savepicks && <SavePicksButton playerObject={playerObject}/>}
            </Styled.RightCol>
        </Styled.Container>
    )
}

export default Dashboard



