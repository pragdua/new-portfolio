import React from 'react'
import {StyledBlogs} from "../styles/Blogs.styled"
import { StyledCard } from '../styles/Card.styled'

const Blogs = () => {
    return (
        <>
        <StyledBlogs>
        <div className="name">
        blogs
        </div>
        <div className="subtitle">
        i write sometimes.
        </div>

        <StyledCard>

            <div className="blog-title">
                
            </div>

        </StyledCard>

        </StyledBlogs>
        </>
    )
}

export default Blogs
