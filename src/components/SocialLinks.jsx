import React from 'react'
import { StyledSocialLinks } from '../styles/SocialLinks.styled'
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <div className="social-link">
                <a href="https://twitter.com/pragdua">
                <img src={twitter} alt="twitter icon" />
                </a>
                </div>
            <div className="social-link">
                <a href="https://www.linkedin.com/in/pragun-dua-0128031a8/">
                <img src={linkedin} alt="linkedin icon" />
                </a>
                </div>
            <div className="social-link">
                <a href="https://github.com/pragdua">
                <img src={github} alt="github icon" />
                </a>
                </div>
            {/* <div className="social-link"></div> */}
        </StyledSocialLinks>
    )
}

export default SocialLinks
