import React from 'react'
// import avatar from "../images/anim.gif"
import avatar from "../images/face.png"
import { StyledNavbar } from '../styles/Navbar.styled'

const Navbar = () => {
    return (
        <StyledNavbar>
            <img className = "avatar" src={avatar} alt="" />
            <div className="navs">
                <div className="nav-link"> home</div>
                <div className="nav-link"> projects</div>
                <div className="nav-link"> resume</div>
                <div className="nav-link"> blogs</div>
            </div>
        </StyledNavbar>
    )
}

export default Navbar
