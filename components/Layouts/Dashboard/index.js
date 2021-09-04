import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import * as Styled from './style'

import UserModule from '../Dashboard/UserModule'
import Navbar from '../Dashboard/Navbar/index'



const Dashboard = ( {children} ) => {

    return (
        <Styled.Container>
            <Styled.LeftCol>
                <Navbar />
            </Styled.LeftCol>
            <Styled.CenterCol>
                {children}
            </Styled.CenterCol>
            <Styled.RightCol>
                <UserModule />
            </Styled.RightCol>
        </Styled.Container>
    )
}

export default Dashboard



