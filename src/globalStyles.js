import { createGlobalStyle } from 'styled-components' ;   
 
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: #333333;
    font-family: 'Nunito', sans-serif
  }

  body {
    height: 100%;
    background-color: #ff91cb;
    background-image: linear-gradient(0deg, #ff91cb 1%, #8288ff 100%);
    background-attachment: fixed;
  }
`;