import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html{
        box-sizing: border-box;
    }

    :root{
        --color-primario: #202224;
        --color-secudario: #1071b1;
        --color-blanco:  #fff;
        --color-naranja: #db500deb;
        --transformY: 100%;
        --izquierda: 0%;
        --derecha: 0%;
        --opacity: 1;
        --visibility: visible;
        --face-rotate: 0deg;
        --back-rotate: 180deg;
    }
    
    body{
        position: relative;
        min-block-size: 100vh;
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-size: 16px;
        overflow: hidden;
        color: var(--color-blanco);
        background-color: var(--color-primario);
    }

    *,
    ::after,
    ::before{

        box-sizing: inherit;
    }

    img{
        max-inline-size: 100%;
        block-size: auto;
    }

    button{

        background: none;
        border: none;
    }
`;

export default GlobalStyle;
