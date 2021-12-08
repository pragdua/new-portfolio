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
        border-radius enthusiast. frontend x design. community lead, twitter developer platform. 
        currently working on <span className="live-stats"> <a href="https://lookfora.space">lookfora.space</a> and <a href="twitterbff.vercel.app">twitterbff</a>. </span>
        </div>
        </StyledHome>
        <SocialLinks />
        </>
    )
}

export default Home
