import React, { useEffect, useState } from 'react'
import { StyledHome } from '../styles/Home.styled'
import SocialLinks from './SocialLinks'

const endpoint = `https://api.github.com/users/pragdua/repos`;


const Home = () => {

    const [ghData, setGhData] = useState([]);

    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then((...data) => {

                const info = data[0]
                .sort(
                    (a, b) => Number(new Date(b.updated_at)) - Number(new Date(a.updated_at))
                )
                .slice(0, 2);

                setGhData(info);
            });

    },[])


    console.log(ghData);

    return (
        <>
        <StyledHome>
        <div className="name">
            pragun dua
        </div>
        <div className="desc">
        border-radius enthusiast. frontend x design. currently working on  
        <span className="live-stats"> <a href={ghData[0].html_url}>{ghData[0].name}</a>, {ghData[0].description} and <a href={ghData[1].html_url}>{ghData[1].name}</a>, {ghData[1].description}.</span>
        </div>
        </StyledHome>
        <SocialLinks />
        </>
    )
}

export default Home
