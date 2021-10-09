import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import MenuItem from './MenuItem'
import SVG from '../../../SVG'
import UserModule from '../UserModule'

//Navbar Index
// MenuItem holds each icon and submenu links related to that icon
// Prop link1 refers to the link of the submenu item, and label1 is the label for that link in the submenu
// Prop iconlink is the link for the icon itself
//////////////////////////////


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: fit-content;
    min-height: 850px;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: 10px;
    background: linear-gradient(180deg, #31343B 0%, #22252C 100%);
    box-shadow: 0px 0px 37px #000000;
`

const Navbar = () => {

    const svgSize = '30px'

    return (
        <Container>
            <UserModule />
            <MenuItem
                defaultOpen={true}
                link1='/home'
                label1='Football Pool Home'
                link2='/weekly-picks'
                label2='Weekly Picks'
                numOfLinks={2}
            >
                <SVG.Home style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={true}
                link1='/current-picks'
                label1='Current Picks'
                link2='/weekly-results'
                label2='Weekly Results'
                link3='/weekly-winners'
                label3='Weekly Winners'
                numOfLinks={3}
                >
                <SVG.Picks style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
                link1='/home'
                label1='Season Standings'
                link2='/home'
                label2='Season Summary'
                numOfLinks={2}
            >
                <SVG.Leaderboards style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
                link1='/home'
                label1='User Stats'
                link2='/home'
                label2='User Pick History'
                numOfLinks={2}
            >
                <SVG.Stats style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
                link1='/home'
                label1='Help'
                link2='/home'
                label2='Rules'
                link3='/home'
                label3='About'
                link4='/home'
                label4='Feedback'
                numOfLinks={4}
            >
                <SVG.Info style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
                link1='/home'
                label1='Settings'
                numOfLinks={1}
            >
                <SVG.Gear style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
        </Container>
    )
}

export default Navbar
