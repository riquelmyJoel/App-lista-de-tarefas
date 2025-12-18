/* eslint-disable prettier/prettier */
import styled from "styled-components";



type Props = {
    $ativo: boolean
}

export const Card = styled.div <Props>`
    padding: 8px;
    border: 2px solid ${props => props.$ativo ? '#1e90ff' : '#a1a1a1'};
    background-color:  ${props => props.$ativo ? '#ffffffff' : '#fcfcfc'};
    border-radius: 8px;
    color: ${props => props.$ativo ? '#1e90ff' : '#555555'};
    cursor: pointer;

`

export const Contador = styled.span`
    font-weight: bold;
    font-size: 24px;
    display: block;
`

export const Label = styled.span`
    font-size: 14px;
`