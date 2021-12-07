import { keyframes } from "styled-components";
import styled from "styled-components";

const appear = keyframes`

0% {
    opacity: 0%;
}

/* 10% {
    opacity: 60%;
  }

20% {
    opacity: 10%;
  }
40% {
    opacity: 100%;
  }

50% {
    opacity: 0%;
  } */

100% {
    opacity: 100%;
} 

`;

export const StyledNavbar = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /* font-family: 'Inter', sans-serif; */
    font-family: 'Epilogue', sans-serif;
    font-weight: 500;
    /* border: 2px solid red; */
    margin-top: 10vh;
    line-height: 1.3rem;
    
    & .avatar {
        height: 14vh;
        border-radius: 999px;

        animation: ${appear} 3s ease-in;
        
    }

    & .navs {
        text-align: right;

    }

    & .nav-link {
      text-decoration: none;
      color: white;
      cursor: pointer;
    }

    & .nav-link:hover {
      color: grey;
      transition: all 0.5s ease;
    }



    
`;