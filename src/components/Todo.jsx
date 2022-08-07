import React, { useState } from 'react'; 
import { Container } from './styles';
import { Box } from './styles';
import Task from './task/Task';

function Todo() {
  const [tarefa, setTarefa] = useState({
    tarefa:'',
    concluido: false,
    id: ''
  }); 
  const [itens, setItens] = useState([]); 

  function inputTarefa(event) {
    const input = event.target.value;
    setTarefa({tarefa: input, concluido:false, id: Date.now()});
 }

 function addTarefa(event) {
   event.preventDefault();
  if (!tarefa.tarefa) {
    return
  };
  setItens([...itens, tarefa]);
  setTarefa({tarefa: '', concluido:false, id: ''});
}

function handleCheckbox(event, id) {
  const input = event.target.checked;
  const newItens = itens.map((itens) => {
    if(id === itens.id) {
      return {
        ...itens, concluido: input
      }
    }
    return itens;
  })
  setItens(newItens);
}

function clearTarefa(id) {
  const newItens = itens.filter((itens) => (
    itens.id !== id
  ));
  setItens(newItens);
}

  return (
    <Container>
      <h1> O QUE FAREMOS HOJE? ✨ </h1>
      <form onSubmit={addTarefa} >
        <input type='text' placeholder='Adicione uma tarefa' onChange={inputTarefa} value={tarefa.tarefa} />
        <button type='submit' id='btn-add'> + </button>
      </form>
      <Box>
        {itens.map((item) => (
          <Task handleCheckbox={handleCheckbox} clearTarefa={clearTarefa} concluido={tarefa.concluido} item={item} />
	    ))}
      </Box>
    </Container>
  );
}

export default Todo;