import styled from 'styled-components';

export const Ventana = styled.div`
    position: absolute;
    top: 0;
    bottom:0;
    inline-size: 50%;
    block-size: 100%;
    ${(props) => (props.izquierda ? 'left: 0;' : 'right: 0;')}
    background-image: url(assets/img/heroImg.jpg);
    background-position:  ${(props) => (props.izquierda ? 'left' : 'right;')};
    background-repeat: no-repeat;
    background-size: cover;
    transform: ${(props) => (props.izquierda ? 'translateX(var(--izquierda));' : 'translateX(var(--derecha));')} ;    
    transition: transform 2s ease-in-out;
    z-index: 1;
`;

export const SectionPresentacion = styled.section`

    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
    inline-size: 85%;
    margin: 0 auto;
    padding: 1.4rem;
    text-align: center;
    color: var(--color-blanco);
    outline: 4px solid var(--color-naranja);
    border-radius: 4px;
    background-color: #141414bd;
    mix-blend-mode: hard-ligth;
    opacity: var(--opacity);
    visibility: var(--visibility);
    transition: opacity 1s ease-in,
    visibility 1s ease-in;
    z-index: 2;

    footer{

        display: flex;
        flex-direction: column;
        & button{
            
            min-inline-size: 227px;
            margin: .9rem auto;
            padding: 1em;
            border: 2px solid #bb1717;
            border-radius: 8px;
            color: var(--color-blanco);
            background-color: #141414bd;
            transition: background-color 1s ease;

            @media(hover:hover){

                &:hover{
    
                    background-color: #bb1717;
                }
            }
 
        }
    }

    @media screen and (min-width: 950px){

        &{
            max-inline-size: 935px;
        }
    }

`;

export const Reglas = styled.div`

    position: absolute;
    inset-block: 0 0;
    inset-inline: 0 0;
    text-align: center;
    line-height: 35px;
    background-color: var(--color-naranja);
    transform : translateY(var(--transformY)) ;
    transition: transform 1s ease-in;
    z-index: 3;

    header{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 45px;

        h2{
            margin-right: 1em;
            font-size: 3rem;
        }

        button{
            padding: 1em 1.2em;
            border-radius: 50%;
            background-color: #bb1717;

        }
    }

    ul{

        inline-size: 17%;
        margin: 0 auto;
    }

`;
