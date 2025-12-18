/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

import * as enums from '../../utils/enums/Tarefa';
import { BotaoAcao } from '../../styles';


type TagProps = {
    $prioridade?: enums.Prioridade
    $status?: enums.Status
    $parametro: 'status' | 'prioridade'
}   


const corDeFundo = (props: TagProps): string => {
    if (props.$parametro === 'prioridade') {
        if (props.$prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho;
        if (props.$prioridade === enums.Prioridade.IMPORTANTE) return variaveis.amarelo2;
        if (props.$prioridade === enums.Prioridade.NORMAL) return '#396d90ff';
    } else  {
        if (props.$status === enums.Status.PENDENTE) return variaveis.amarelo;
        if (props.$status === enums.Status.CONCLUIDO) return variaveis.verde;
    }

    return '#ccc'
}

export const Card = styled.div`
    background-color: #e6e5e5ff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    padding: 16px;
    margin-bottom: 32px;
    border-radius: 16px;

    label {
        display: flex;
        align-items: center;    
        margin-bottom: 16px;
    }
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-left: 8px;
`;

export const Tag = styled.span <TagProps>`
    background-color: #eee;
    color: #fff;
    padding: 4px 8px;
    font-weight: bold;
    border-radius: 4px;
    font-size: 10px;
    background-color: ${(props) => corDeFundo(props)};
    border-radius: 8px;
    margin-right: 8px;
    display: inline-block;
`;

export const Description = styled.textarea`
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    font-family: 'Roboto Mono', monospace;
    color: #8b8b8b;
    margin-bottom: 16px;
    margin-top: 16px;
    resize: none;
    border: none;
    background-color: transparent;
`;

export const BarraAcoes = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 16px;
`;


export const BotaoCancelarRemover = styled(BotaoAcao)`
    background-color: ${variaveis.vermelho};
`;