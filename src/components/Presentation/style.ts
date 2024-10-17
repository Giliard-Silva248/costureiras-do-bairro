import styled from "styled-components";

export const containerPresentation = styled.section`
    max-width: 2000px;
    margin: 0 auto;
    padding: 6rem 3rem 0;
    text-align: justify;
    background: #FFE6A7;
    display: flex;
    gap: 4rem;

    
    
    @media  (max-width: 750px) {
        flex-wrap: wrap;
        
    }
`

export const title = styled.h2`
    font-size: 2rem;
    font-family: "Ysabeau Office", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: italic;
`

export const containerParagraph = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    text-indent: 1rem;
    line-height: 2rem;
    
    
    p{
        font-size: 1.5rem;
        font-family: "Ysabeau Office", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }
    
`