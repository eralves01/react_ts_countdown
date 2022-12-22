import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []> ([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelacionada: ITarefa){
    setSelecionado(tarefaSelacionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selected: tarefa.id === tarefaSelacionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selected: false,
              completed: true
            }
          }
          return tarefa
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
