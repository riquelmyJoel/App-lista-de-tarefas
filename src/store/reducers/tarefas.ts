/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Tarefa from "../../models/Tarefa"
import * as enums from "../../utils/enums/Tarefa"

type TarefasState = {
    itens: Tarefa[]
}

// 🔹 CARREGAR DO LOCALSTORAGE
const carregarTarefas = (): Tarefa[] => {
    const tarefas = localStorage.getItem('tarefas')
    return tarefas ? JSON.parse(tarefas) : []
}

// 🔹 SALVAR NO LOCALSTORAGE
const salvarTarefas = (tarefas: Tarefa[]) => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

const initialState: TarefasState = {
    itens: carregarTarefas()
}

const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState,
    reducers: {
    remover: (state, action: PayloadAction<number>) => {
        state.itens = state.itens.filter(
        (tarefa) => tarefa.id !== action.payload
        )
        salvarTarefas(state.itens)
    },

    editar: (state, action: PayloadAction<Tarefa>) => {
        const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
        )

        if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
        salvarTarefas(state.itens)
        }
    },

    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
        const tarefaJaExiste = state.itens.find(
        (tarefa) =>
            tarefa.titulo.toLowerCase() ===
            action.payload.titulo.toLowerCase()
        )

        if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
        } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova: Tarefa = {
            ...action.payload,
            id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.itens.push(tarefaNova)
        salvarTarefas(state.itens)
        }
    },

    alteraStatus: (
        state,
        action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
        const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
        )

        if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
            ? enums.Status.CONCLUIDO
            : enums.Status.PENDENTE

        salvarTarefas(state.itens)
        }
    }
    }
})

export const { remover, editar, cadastrar, alteraStatus } =
    tarefasSlice.actions

export default tarefasSlice.reducer
