import styled, { keyframes } from "styled-components";

const appear = keyframes`

0%{
   opacity: 0;
   transform: translateY(10px)  ;
}

100%{

}

`;


export const StyledProjects = styled.div`

   font-family: 'Inter', sans-serif;
   margin-top: 1.5rem;
   font-size: 1.2rem;
   animation: ${appear} 1s ease;

   & .name {
      font-size: 1.7rem;
      font-weight: 600;
   }

   & .desc {
      margin-top: 1rem;
   } 

   & .live-stats {
      color: grey;
   }



`;