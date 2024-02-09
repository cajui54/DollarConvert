import styled from "styled-components";

export const MainScreen = styled.div`
    background-color: #282c34;
    border-radius: 1rem;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    margin: 1rem auto;
    position: relative;
    h2 {
        color: #00e88f;
        font-size: 2.5rem;
        letter-spacing: .2rem;
        margin-bottom: 2rem;
    }
    button {
        position: absolute;
        top: 1rem;
        right: 2rem;
        font-size: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 1rem;
        border: none;
        cursor: pointer;
        color: #fff;
        background-color: #ef4444;
    }
`
export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    svg {
        font-size: 5rem;
        color: #00e88f;
    }
`

export const ItemResult = styled.div`
     margin: 1rem auto;
     width: 100%;
     display: flex;
     position: relative;
     justify-content: space-between;
     align-items: center;
     background-color: #334155;
     padding: 1rem;
     box-sizing: border-box;
     border-radius: 1rem;
    p:nth-child(1) {
        color: #00e88f;
        font-size: 1rem;
        font-weight: bold;
        position: absolute;
        top: .5rem
    }
    p:nth-child(2){
        font-size: 3rem;
    }
    img {
        width: 5rem;
        border-radius: 100%;
    }
`