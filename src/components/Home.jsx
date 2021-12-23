import React from 'react'
import { StyledHome } from '../styles/Home.styled'
import SocialLinks from './SocialLinks'


const Home = () => {

    return (
        <>
        <StyledHome>
        <div className="name">
            pragun dua
        </div>
        <div className="desc">
        code x design. working with <span className="highlight"> react + typescript + framer </span>
        as a <span className="highlight"> ux engineer</span> at <span className = "highlight">headout</span>
        </div>
        </StyledHome>
        <SocialLinks />
        </>
    )
}

export default Home
