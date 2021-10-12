import styled from 'styled-components'
import * as Styled from './style'
import Navbar from '../Dashboard/Navbar/index'
import { useSelector } from 'react-redux'
import useMediaQuery from '../../../hooks/useMediaQuery'

const Wrapper = styled.div`
 //for the snackbar
`

const ScreenTooSmall = styled.div`
    position: relative;
    margin-top: 40%;
    left: 25%;
    width: 50%;
    height: 200px;
    overflow: none;
    color: white;
    text-align: center;
`

const Dashboard = ({ children, header }) => {
    const {snackbar} = useSelector((state) => state.snackbar)
    let isMobile = useMediaQuery('(max-width: 1000px)');

    if(isMobile === false){
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

    if(isMobile === true) {
        return (
            <Styled.Container>
                <ScreenTooSmall>
                    We're sorry, Mitch's football app is currently only accessible on Desktop at this time!
                </ScreenTooSmall>
            </Styled.Container>
        )
    }
}

export default Dashboard



