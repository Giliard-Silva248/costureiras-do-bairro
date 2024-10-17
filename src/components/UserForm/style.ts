import styled from "styled-components";

export const form = styled.form`
    position: fixed ;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #FFE6A7;
    padding: 2rem;
    border-radius: 5px;
    border: 4px solid #6F1D1B;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    input{
        width: 100%;
        border-radius: 5px;
        border: none;
        padding: .5rem;
        font-family: "Ysabeau Office", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;  
    }

    button{
        width: 10rem;
        height: 2rem;
        border-radius: 7px;
        cursor: pointer;
        font-size: 1.3rem;
        border: none;
        padding: 0 0 2rem;
        background: #FFE6A7;
        color: #6F1D1B;
        transition: .5s;

        font-family: "Ysabeau Office", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;    
        border-bottom: 1px solid #6F1D1B;

        &:hover{
            background: #BB9457;
            color: #fff;
            transition: .5s;
            border: none;
        }
    }
`

