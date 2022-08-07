import styled from 'styled-components';

export const Container = styled.div `
  margin: 2rem auto;
  max-width: 30rem;
  padding: 1rem;

  h1 {
    margin: 1rem auto;
    padding-bottom: 5px;
    max-width: 30rem;
    text-align: center;
    font-weight: 900;
    border-bottom: 1px solid #333333;
  }

  form {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 5px;

    input {
      padding: 10px 15px;
      width: 80%;
      border: none;
      border-radius: 5px;
      font-size: 1.25rem;
      font-weight: 600;

      ::placeholder {
        color: #C6C5FF;
      }
    }

    button {
      width: 3rem;
      border: none;
      border-radius: 5px;
      background-color: #ffffff;
      font-size: 2rem;
      font-weight: 900;
      background: #8288FF;
      background: radial-gradient(circle farthest-side at center center, #8288FF 0%, #FF91CB 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: 0.4s ease;
      cursor: pointer;

      :hover {
        transform: scale(1) rotate(90deg);
      }
    }
  }
`;

export const Box =styled.div `
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 5px;

`