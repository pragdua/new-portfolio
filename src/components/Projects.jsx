import React from 'react'
import { StyledCard } from '../styles/Card.styled'
import {StyledProjects} from "../styles/Projects.styled"


const Projects = () => {
    return (
        <>
        <StyledProjects>
        <div className="name">
            projects
        </div>
        <div className="desc">
        cool stuff i built in my free time.
        </div>

        <StyledCard>
            <div className="project-title">twitterBFF</div>
            <div className="project-description">a tool that uses engagement metrics from the Twitter API to find out who you interact with the most.</div>
            <div className="project-link"><a href="https://twitterbff.vercel.app" className='highlight'>twitterbff.vercel.app</a></div>
        </StyledCard>

        <StyledCard>
            <div className="project-title">lookforaspace</div>
            <div className="project-description">a web app for accessing and searching twitter spaces according to topics and host data</div>
            <div className="project-link"><a href="https://lookfora.space" className='highlight'>lookfora.space</a></div>
        </StyledCard>

        <StyledCard>
            <div className="project-title">[ untitled project ]</div>
            <div className="project-description">launching this week (shhh!)</div>
        </StyledCard>

        </StyledProjects>
        </>
    )
}

export default Projects
