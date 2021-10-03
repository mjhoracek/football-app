import styled from 'styled-components'
import * as Styled from './style'
import UserModule from '../Dashboard/UserModule'
import Navbar from '../Dashboard/Navbar/index'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
 //for the snackbar
`

const Dashboard = ({ children, header, savepicks }) => {
    const {snackbar} = useSelector((state) => state.snackbar)


    return (
        <Wrapper>
            <Styled.Snackbar snackbar={snackbar}>Content Saved</Styled.Snackbar>
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
            </Styled.RightCol>
        </Styled.Container>
        </Wrapper>
    )
}

export default Dashboard



