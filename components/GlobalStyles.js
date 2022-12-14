import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
html {
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2 {
        font-size: 3rem;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }

    h4{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem 0rem 0rem;
    }

    h5 {
        font-size: .8rem;
        color: #ff7676;
        padding: 0rem 0rem 1rem 0rem;
        text-decoration: underline;
        cursor: pointer;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input {
        font-weight: bold;
        font-family: "montserrat", sans-serif;
    }

}`;

export default GlobalStyles;
