import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background-color: #F1F3FF;
  border-radius: 2em;
  transition: 0.25s ease-in;

  :hover {
    background-color: #C6C5FF;
    cursor: pointer;
  }

  .box-checkbox {
    overflow: hidden;
    border-radius: 2em;
    padding: 8px;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 15px;
    
    input {
      width: 5px;
      cursor: pointer;
    }
    
    input:before {
      width: 15px;
      height: 15px;
      display: inline-block;
      border-radius: 50%;
      background-color: #E3E3E3;
      border-color: transparent;
      box-sizing: border-box;
      color: #3acfb6;
      content: close-quote;
      transition-duration: .5s;
      transition-timing-function: cubic-bezier(.075, .820, .165, 1);
      transition-property: background-color, border-color;
      cursor: pointer;
    }
    
    input:checked:before {
      background-color: #F9C23C;
    }

    p {
      text-decoration: ${props => props.concluido ? 'line-through' : 'none'};
      color: ${props => props.concluido ? '#616161' : '#333333'};
    }
  }

  span {
    width: 3rem;
    min-width: 3rem;
    height: 2rem;
    display: grid;
    place-items: center;
    background-color: transparent;
    border-radius: 2em;
    font-weight: 900;
    font-size: 1rem;
    color: red;
    border: none;
    cursor: pointer;
  }
`