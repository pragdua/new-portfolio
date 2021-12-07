import React from 'react'
import { StyledHero } from '../styles/Hero.styled'

const Hero = () => {
    return (

        <StyledHero>
        <div className="name">
            pragun dua
        </div>
        <div className="desc">
        border-radius enthusiast. frontend x design. currently working on:  
        <span className="live-stats"> this data will be generated live.</span>
        </div>
        </StyledHero>
    )
}

export default Hero
