import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {NavbarSection,Logo,LogoText,UlList,ListItem,Anchor} from'./style.js'


const Navbar = () => {
    return (
        <NavbarSection>
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><Anchor><Link to='/'>Home</Link></Anchor></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><Anchor><Link to='/contact'>Contact</Link></Anchor></ListItem>
                </UlList>

            </NavbarSection>
        
    )
}
export default Navbar