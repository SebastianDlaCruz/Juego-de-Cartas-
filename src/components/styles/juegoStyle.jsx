import styled from 'styled-components';

export const Span = styled.span`
    position: absolute;
    bottom: 0%;
    left: 0;
    display: inline-block;
    padding:  1.8em 5em;   
    color: #fff; 
    background-color: #0462bb;
    z-index: -3;
    border-start-end-radius: 10px;

`


export const Grid = styled.div`

    display: grid;
    grid-template-columns: repeat(7,1fr);
    row-gap: 2%;
    block-size: 86vh;
    inline-size: 100%;
    place-items: center;
    @media(max-width:950px){

        grid-template-columns: repeat(4,1fr);
    }

`;

export const DivUno = styled.div`
    position: relative;
    width: 200px;
    height: 176px;
    transform: scale(100%);
    transition: transform .7s ease-out;
      &:hover{

        transform: scale(113%);
    }
    
    @media(max-width:950px){
        
        width: 53px;
        height:  77px;
    }
    
   .face{

        position: absolute;
        display: flex;
        justify-content: center;

        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        overflow: hidden;
        transition: .5s;
   }

    .front{

        transform: perspective(600px)
        ${({ rota }) => rota ? 'rotateY(180deg);' : 'rotateY(0deg);'}
        
   }

    .front img{
    position: absolute;
    
   }
   .back img{
    position: absolute;
    
   }

   .back{

        transform: perspective(600px)
        ${({ rota }) => rota ? 'rotateY(360deg);' : 'rotateY(180deg);'}

   }
`



export const Img = styled.img`
 
    block-size: 100%;
    max-inline-size: 100%;
    object-fit: cover;
  
`
