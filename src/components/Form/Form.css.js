import styled from "styled-components";

export const MainForm = styled.div`
    background-color: #282c34;
    width: 100%;
    min-height: 20rem;
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    h2 {
        color: #00e88f;
        width: 90%;
        margin: 1rem auto;
        font-size: 2rem;
    }
`
export const Form = styled.form`
    width: 90%;
    margin: 2rem auto;
    label {
        position: relative;
        color: #fff;
        font-weight: bold;
        margin: 2rem 0;
        display: block;
        height: 8rem;
    }
    p {
        font-size: 1rem;
        position: absolute;
        left: 1rem;
        top: .6rem;
    }
    label p:nth-child(2) {
        position: absolute;
        top: 3rem;
        margin-left: -.6rem;
        font-size: 1.5rem;
    }
    label svg{
        position: absolute;
        right: 2rem;
        bottom: 3rem;
        font-size: 2.5rem;
        transition: all .3s ease-in;
    }
    input {
        width: 80%;
        padding: 2rem ;
        padding-left: 4rem;
        font-size: 3rem;
        font-weight: bold;
        color: #00e88f;
        background-color: #334155;
        border: none;
        border-radius: .5rem;
        outline: none;
        letter-spacing: .2rem;
        transition: all .3s ease-in;
    }
    input:focus {
        outline-style: solid;
        outline-color: #00e88f;
        box-shadow: 0 0 10px #00e88f;
        text-shadow: 3px 3px 5px #475569;
    }
    input:focus + svg {
        color: #00e88f;
        transform: scale(1.5);
    }
`
export const ButtonsContainer = styled.div`
    width: 90%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    button {
        margin: .5rem auto;
        width: 100%;
        border-radius: 1rem;
        border: none;
        padding: 1rem 0;
        font-weight: bold;
        cursor: pointer;
        color: #fff;
        letter-spacing: .1rem;
        text-shadow: 1px 1px 5px #334155;
    }
    button:first-child{
        background-color: #00e88f;    
    }
    button:last-child{
        background-color: #334155;
    }
`