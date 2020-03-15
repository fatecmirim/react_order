import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import fundo from "../../src/assests/img/fundo.jpg";
export default createGlobalStyle`::after
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
html, border-style, #root {
    min-height: 100%;
}
body {
    background-image: url(${fundo});
    -webkit-font-smoothing: antialiased !important;
}
body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif
}
button {
    cursor: pointer
}
`;
