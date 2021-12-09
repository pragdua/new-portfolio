import styled, { keyframes } from "styled-components";

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

export const StyledCard = styled.div`

    margin-top: 1.5rem;
    background-color: #121212;
    padding: 1rem;
    border-radius: 5px;

    & .project-title {
        font-weight: 500;

    }

    & .project-description {
        color: grey;
    }

    & .highlight {
      color: white;
      text-decoration: none;
      font-weight: 400;
      animation: ${flash} 2s infinite;
   }




`;