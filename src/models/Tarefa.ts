/* eslint-disable prettier/prettier */
import *  as enums from '../utils/enums/Tarefa'

export default interface Tarefa {
    titulo: string
    prioridade: enums.Prioridade
    status: enums.Status
    descricao: string
    id: number
}
