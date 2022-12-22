import { ITarefa } from '../../../types/tarefa'
import style from './item.module.scss'

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelacionada: ITarefa) => void
}

export default function Item(
    {
        tarefa, 
        tempo,
        selected,
        completed,
        id,
        selecionaTarefa
    }: Props) {
    return (
        <li className={`
            ${style.item} 
            ${selected ? style.itemSelecionado : ''}
            ${completed ? style.itemCompletado : ''}`} 
            onClick={() => !completed && selecionaTarefa({
                tarefa,
                tempo,
                selected,
                completed,
                id
            })} 
        >
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
            {completed && <span
            className={style.concluido}
            arial-label="Tarefa Realizada!"></span>}
        </li>
    )
}