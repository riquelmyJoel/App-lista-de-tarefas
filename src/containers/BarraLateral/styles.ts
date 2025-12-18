/* eslint-disable prettier/prettier */

import styled from 'styled-components'

export const Hamburguer = styled.button<{ $aberto?: boolean }>`
    position: fixed;
    top: 12px;
    left: 12px;
    width: 40px;
    height: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 6px;
    background: transparent;
    border: none;
    z-index: 1001;
    cursor: pointer;

    span {
        display: block;
        height: 3px;
        background: #222;
        border-radius: 2px;
        transition: transform 220ms cubic-bezier(.2,.8,.2,1), opacity 150ms ease;
    }

    span:nth-child(1) {
        transform-origin: left center;
        width: ${props => (props.$aberto ? '18px' : '100%')};
        transform: ${props => (props.$aberto ? 'translateY(7px) rotate(45deg)' : 'none')};
    }
    span:nth-child(2) {
        width: ${props => (props.$aberto ? '14px' : '100%')};
        opacity: ${props => (props.$aberto ? '0' : '1')};
        transform: ${props => (props.$aberto ? 'scaleX(0)' : 'none')};
    }
    span:nth-child(3) {
        transform-origin: left center;
        width: ${props => (props.$aberto ? '18px' : '100%')};
        transform: ${props => (props.$aberto ? 'translateY(-7px) rotate(-45deg)' : 'none')};
    }

    @media(min-width: 769px) {
        display: none;
    }
`

export const Aside = styled.aside<{ $aberto?: boolean }>`
        padding: 16px;
        background-color: #c9c9c9ff;
        height: 100vh;
        position: sticky;
        top: 0;
        transition: transform 240ms ease;

        @media(max-width: 768px) {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width: 260px;
            transform: translateX(${props => (props.$aberto ? '0' : '-110%')});
            box-shadow: 2px 0 8px rgba(0,0,0,0.12);
            z-index: 1000;
        }
`

export const Filtros = styled.div`
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px;
`
