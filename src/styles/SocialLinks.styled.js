import styled, { keyframes } from "styled-components";

const appear = keyframes`

0% {
    opacity: 0%;
}

100% {
    opacity: 100%;
} 

`;

export const StyledSocialLinks = styled.div`

   font-family: 'Inter', sans-serif;
   margin-top: 1.5rem;
   font-size: 1rem;
   display: flex;
   justify-content: flex-start;
   align-items: center;

   & .social-link + .social-link {
       margin-left: 20px;
   }

   & .social-link {

    /* animation: ${appear} 3s ease-in; */
       
   }


   & img {
    filter: invert(100%) sepia(8%) saturate(94%) hue-rotate(313deg) brightness(112%) contrast(80%);
    width: 25px;
}

`; 