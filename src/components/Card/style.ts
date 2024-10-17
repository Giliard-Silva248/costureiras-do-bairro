import styled from "styled-components";

export const card = styled.div`
    width: 11.5rem;
    height: 16.5rem;

    border: 2px solid #99582A;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .3rem;

    background: #FAEDCD;
    box-shadow: 10px 10px 15px -1px rgba(212,163,115,1);
    
    span{
    font-family: "Ysabeau Office", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    }


`
export const name = styled.span`
    display: flex;
    align-items: center;
    gap: .2rem;


`
export const phone = styled.span`
    display: flex;
    align-items: center;

`
export const address = styled.span`
    display: flex;
    align-items: center;
    gap: .3rem;

`

export const img = styled.img`
  border-radius: 15px;
  width: 150px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 8px;
  background: #FFE6A7;
`;