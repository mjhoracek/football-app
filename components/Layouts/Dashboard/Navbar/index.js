import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import MenuItem from './MenuItem'
import SVG from '../../../SVG'
import SubmenuAccordian from './SubmenuAccordian'

//Navbar Index
// MenuItem holds each icon and submenu links related to that icon
// Prop link1 refers to the link of the submenu item, and label1 is the label for that link in the submenu
// Prop iconlink is the link for the icon itself
//////////////////////////////


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10%;
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
            <MenuItem
                defaultOpen={true}
                link1='/home'
                label1='Football Pool Home'
                link2='/weekly-picks'
                label2='Weekly Picks'
                link3='/current-picks'
                label3='Current Picks'
            >
                <SVG.Home style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={true}
            >
                <SVG.Picks style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={true}
            >
                <SVG.Leaderboards style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
            >
                <SVG.Stats style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
            >
                <SVG.Info style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
            >
                <SVG.Gear style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
        </Container>
    )
}

export default Navbar
