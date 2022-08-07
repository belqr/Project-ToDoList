import { Container } from './style';

function Task({handleCheckbox, clearTarefa, concluido, item}) {

  return(
    <Container concluido={item.concluido}>
      <div className='box-checkbox'>
        <input type='checkbox' onChange={(event) => handleCheckbox(event, item.id)} value={item.concluido}/>
        <p key={item.id} > {item.tarefa} </p> 
      </div>
      <span onClick={() => clearTarefa(item.id)} id='btn-delete'> X </span>
    </Container>
  )
}

export default Task