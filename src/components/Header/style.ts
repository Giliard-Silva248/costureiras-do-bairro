import styled from "styled-components";




export const header = styled.header`
    width: 100%;
    background: #99582A;
    height: 4rem;
    padding: 0 1rem;
    position: fixed;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const title = styled.h1`
    font-family: "Leckerli One", cursive;
    font-weight: 400;
    font-style: normal;


    @media (max-width: 643px){
        font-size: 1.5rem;
    }
`

export const btnContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const btn = styled.button`
    width: 10rem;
    height: 2rem;
    border-radius: 7px;
    cursor: pointer;
    font-size: 1.3rem;
    border: none;

    background: #FFE6A7;
    color: #6F1D1B;
    transition: .5s;

    font-family: "Ysabeau Office", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;    

    &:hover{
        background: #BB9457;
        color: #fff;
        transition: .5s;
    }
`


export const hamburger = styled.button`
  padding: 10px;
  font-size: 24px;
  color: #333;
  background: none;
  border: none;
  cursor: pointer;
`;
