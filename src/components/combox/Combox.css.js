import styled from "styled-components";

export const mainCombox = styled.div`
    width: 100%;
    background-color: #282c34;
    width: 100%;
    margin: 1rem auto;
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
        font-size: 5rem;
        background-color: transparent;
        filter: drop-shadow(3px 3px 3px #00e88f);
        cursor: pointer;
        border: none;
        color: #00e88f;
   }
`
export const ContainerCurrency = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 5rem;
        border-radius: 2rem;
        filter: brightness(.8);
        filter: drop-shadow(7px 5px 3px #1e293b);
    }
    p {
        color: #00e88f;
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: -.7rem;
        text-shadow: 7px 5px 3px #1e293b;
        letter-spacing: 1.2px;
    }
`
