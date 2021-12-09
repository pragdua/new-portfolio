import styled, { keyframes } from "styled-components";

const appear = keyframes`

0%{
   opacity: 0;
   transform: translateY(10px);
}

100%{

}

`;

const flash = keyframes`

0%{
   color: white;
}

25%{
   color: #D0FFEB;
}

50%{
   color: #D0E3FF;

}

75%{
   color: #FFB2B6;

}

100%{
   color: white;
}

`;

export const StyledHome = styled.div`

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
      color: #B5B5B5;
   } 

 

   & .highlight {
      color: white;
      text-decoration: none;
      font-weight: bold;
      animation: ${flash} 4s infinite;
   }



`;