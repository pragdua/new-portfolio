import React from 'react'
import { StyledSocialLinks } from '../styles/SocialLinks.styled'
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <div className="social-link">
                <img src={twitter} alt="" />
                </div>
            <div className="social-link">
                <img src={linkedin} alt="" />
                </div>
            <div className="social-link">
                <img src={github} alt="" />
                </div>
            {/* <div className="social-link"></div> */}
        </StyledSocialLinks>
    )
}

export default SocialLinks
