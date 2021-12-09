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
        frontend dev x design. <span className="highlight">community lead, twitter developer platform. </span>
        currently working with <span className="highlight"> react + redux </span> and learning <span className = "highlight">nextJS. </span>
        </div>
        </StyledHome>
        <SocialLinks />
        </>
    )
}

export default Home
