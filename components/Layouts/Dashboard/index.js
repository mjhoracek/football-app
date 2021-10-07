import styled from 'styled-components'
import * as Styled from './style'
import Navbar from '../Dashboard/Navbar/index'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
 //for the snackbar
`

const Dashboard = ({ children, header }) => {
    const {snackbar} = useSelector((state) => state.snackbar)


    return (
        <Wrapper>
        <Styled.Container>
            <Styled.LeftCol>
                <Navbar />
            </Styled.LeftCol>
            <Styled.CenterCol>
                <Styled.Snackbar snackbar={snackbar}>Content Saved</Styled.Snackbar>
                <Styled.Header>
                    {header}
                </Styled.Header>
                {children}
            </Styled.CenterCol>
            <Styled.RightCol>
                {/* empty gutter for now */}
            </Styled.RightCol>
        </Styled.Container>
        </Wrapper>
    )
}

export default Dashboard



