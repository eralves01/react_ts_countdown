import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../botao";
import style from './Formulario.module.scss';
import { v4 as uuid_v4 } from 'uuid';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00:01"
    }

    addTarefa(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuid_v4()
                }
            ])
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render(){
        return (
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        value={this.state.tarefa}
                        onChange={(value) => this.setState({...this.state, tarefa: value.target.value})}
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.tempo}
                        onChange={
                            (value) => this.setState({...this.state, tempo: value.target.value})}
                        required />
                </div>
                <Botao>
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario