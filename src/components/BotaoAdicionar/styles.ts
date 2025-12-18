/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 64px;
    width: 64px;
    background-color: ${variaveis.backgroundButton};
    color: #fff;
    position: fixed;
    bottom: 40px;
    right: 40px;
    font-size: 40px;
`