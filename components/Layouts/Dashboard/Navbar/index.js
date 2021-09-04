import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import MenuItem from './MenuItem'
import SVG from '../../../SVG'
import SubmenuAccordian from './SubmenuAccordian'

//Navbar Index
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
                link1='/weekly-picks'
                label1='Weekly Picks'
                label2='Old ass dashboard'
                link2='/dashboard'
            >
                <SVG.Home style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={true}
                link1='/weekly-picks'
                label1='Weekly Picks'
                label2='Old ass dashboard'
                link2='/dashboard'
                link3='/weekly-picks'
                label3='Weekly Picks'
                label4='Old ass dashboard'
                link4='/dashboard'
            >
                <SVG.Picks style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={true}
                link1='/weekly-picks'
                label1='Weekly Picks'
                label2='Old ass dashboard'
                link2='/dashboard'
            >
                <SVG.Leaderboards style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
                link1='/weekly-picks'
                label1='Weekly Picks'
                label2='Old ass dashboard'
                link2='/dashboard'
            >
                <SVG.Stats style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
                link1='/weekly-picks'
                label1='Weekly Picks'
                label2='Old ass dashboard'
                link2='/dashboard'
            >
                <SVG.Info style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
            <MenuItem
                defaultOpen={false}
                link1='/weekly-picks'
                label1='Weekly Picks'
                label2='Old ass dashboard'
                link2='/dashboard'
            >
                <SVG.Gear style={{ width: svgSize }} fill={colors.purple}/>
            </MenuItem>
        </Container>
    )
}

export default Navbar
