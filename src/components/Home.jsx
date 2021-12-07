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
        border-radius enthusiast. frontend x design. currently working on  
        <span className="live-stats"> this data will be generated live.</span>
        </div>
        </StyledHome>
        <SocialLinks />
        </>
    )
}

export default Home
