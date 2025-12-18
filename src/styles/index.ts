/* eslint-disable prettier/prettier */
import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }
`
export const Container = styled.div`
    display: grid;
    grid-template-columns: 224px  auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

`
export const MainContainer = styled.main`
    padding: 0 40px;
    height: 100vh;
    overflow-y: scroll;
    background-color: #b7b7b7ff;

    @media (max-width: 768px) {
        padding: 20px;
        grid-template-columns: 1fr;
    }
`;

export const Titulo2 = styled.h2`
    display: block;
    color: #000f;
    font-weight: bold;
    
`
export const Titulo = styled.h1`
    margin-top: 32px;
    text-align: center;
    font-size: 30px;
    background-color: #3c6382;
    color: #fff;
`
export const Campo = styled.input`
    width: 100%;
    margin-top: 32px;
    padding: 8px;
    background-color: #ffff;
    border-radius: 8px;
    border: 2px solid #a1a1a1;
    font-size: 16px;
    font-weight: bold;
    color: #292929ff;
    border-color: #7777;
`

export const BotaoAcao = styled.button`
    font-weight: bold;
    font-size: 12px;
    color: #fefefe;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    background-color: ${variaveis.backgroundButton};
    border-radius: 8px;
    margin-right: 8px;
`;

export const BotaoSalvar = styled(BotaoAcao)`
    background-color: ${variaveis.verde};
`;

export default EstiloGlobal;