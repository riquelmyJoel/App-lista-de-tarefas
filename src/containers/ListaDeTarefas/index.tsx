/* eslint-disable prettier/prettier */
import { useSelector } from "react-redux";

import Tarefas from "../../components/Tarefa"
import { MainContainer, Titulo2, Titulo } from "../../styles"


import { RootReducer } from '../../store'




/* eslint-disable react/no-unescaped-entities */
const ListaDeTarefas = () => {
  const { itens } = useSelector ((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector ((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    let tarefasFiltradas = itens;
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter( 
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if ( criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          item=> item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          item=> item.status === valor
        )
      }

      return tarefasFiltradas
      
    }else {
      return itens
    }
  }

  const exibeFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao = termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

      if (criterio === 'todas') {
        mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
      } else {
        mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${`${valor}`}"
        ${complementacao}`
      }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeFiltragem(tarefas.length)
  
  return (
    <MainContainer>
      <Titulo>Minhas Tarefas</Titulo>
    <Titulo2 as="p">{mensagem}</Titulo2>
    <ul>
      <li>{termo}</li>

      <li>{criterio}</li>

      <li>{valor}</li>
    </ul>
    <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Tarefas 
            id={t.id}
            titulo={t.titulo} 
            descricao={t.descricao} 
            prioridade={t.prioridade} 
            status={t.status} />
          </li>
        ))}

      </ul>
    </MainContainer>
  )
  
}
  


export default ListaDeTarefas

