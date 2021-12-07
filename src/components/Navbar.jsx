import React from 'react'
// import avatar from "../images/anim.gif"
import avatar from "../images/face.png"
import { StyledNavbar } from '../styles/Navbar.styled'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <StyledNavbar>
            <img className = "avatar" src={avatar} alt="" />
            <div className="navs">
                <div> <Link to="/" className="nav-link">home</Link> </div>
                <div> <Link to="/projects" className="nav-link">projects</Link> </div>
                <div> <Link to="/blogs" className="nav-link">blogs</Link> </div>
                <div> <a href="google.com" className="nav-link">resume</a>  </div>
            </div>
        </StyledNavbar>
    )
}

export default Navbar
