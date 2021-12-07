import styled from "styled-components";

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
        height: 10vh;
        border-radius: 999px;
    }

    & .navs {
        text-align: right;
    }


`;