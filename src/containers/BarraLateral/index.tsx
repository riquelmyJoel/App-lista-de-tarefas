/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import FiltroCard from '../../components/FiltroCard'
import { useNavigate } from 'react-router-dom'

import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { BotaoAcao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean;
}

const BarraLateral = ({mostrarFiltros}: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch() 
  const {termo} = useSelector((state: RootReducer) => state.filtro)  
  const [aberto, setAberto] = useState(false)
  return (
    <>
    <S.Hamburguer aria-label="Abrir menu" $aberto={aberto} onClick={() => setAberto(!aberto)}>
      <span />
      <span />
      <span />
    </S.Hamburguer>
    <S.Aside $aberto={aberto}>
      <div>
        {mostrarFiltros ? (
          <>
          <Campo type="text" 
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />
          <S.Filtros>
            <FiltroCard valor={enums.Status.PENDENTE} 
            criterio="status" 
            legenda="Pendentes"  
            />
            <FiltroCard 
            valor={enums.Status.CONCLUIDO} 
            criterio="status" 
            legenda="Concluídas" 
            />
            <FiltroCard 
            valor={enums.Prioridade.URGENTE} 
            criterio="prioridade" 
            legenda="Urgentes" 
            />
            <FiltroCard 
            valor={enums.Prioridade.IMPORTANTE} 
            criterio="prioridade" 
            legenda="Importantes" 
            />
            <FiltroCard 
            valor={enums.Prioridade.NORMAL} 
            criterio="prioridade" 
            legenda="Normal" 
            />
            <FiltroCard 
              criterio="todas"
              legenda="Todas"
              
              />
          </S.Filtros>
          </>
        ): (
          <BotaoAcao onClick={() => navigate('/')} type='button'>
            Voltar a lista de tarefas
          </BotaoAcao>
        )}
  
      </div>
    </S.Aside>
    </>
)
}

export default BarraLateral
