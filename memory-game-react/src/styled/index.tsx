import styled, { css } from "styled-components";
/*
Paleta de Cores:
#3D373C - Marrom Escuro
#2f9331 - Verde
#477385 - Azul Fechado
#926f44 - Marrom Claro
#afdc29 - Verde Claro
#c19978 - Bege
#00b4cb - Azul Claro
#e5d29f - Amarelo Claro
#e7e0bd - Bege Claro
*/
export const TitlePage = styled.h1 `
    color: red;
    font-size: 50px;
    font-family: CustomFont;
    color: #00b4cb;
    font-weight: bold;
    text-shadow: 1px 3px #afdc29;
    -webkit-text-stroke-width: 0.001px;
    -webkit-text-stroke-color: black;
`;

export const Container = styled.div `
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 0fr);
    grid-template-rows: repeat(5, 0fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 0fr);
        grid-template-rows: repeat(3, 0fr);
    }
`;

export const Card = styled.div `
    
`;

export const List = styled.ul `
    list-style: none;
`;

export const Item = styled.li `
    list-style: none;

    .card-back {
        position: absolute;
        width: 100px;
        height: 100px;
        background: #e7e0bd;
        border-radius: 10px;
        box-shadow: 0 0 10px #e7e0bd;
        transition: 0.5s;
        cursor: pointer;
    }

    .card-front {
        width: 100px;
        height: 100px;
        background: #e7e0bd;
        border-radius: 10px;
        box-shadow: 0 0 10px #e7e0bd;
        transition: 0.5s;
        cursor: pointer;
    }

    &:hover .card-front__flip {
        transform: rotateY(180deg);
    }

    &:hover .card-back__flip {
        transform: rotateY(180deg);
        transform-style: preserve-3d;
        backface-visibility: hidden;
    }
`;

export const Image = styled.img `
    width: 100px;
    border-radius: 5px;
    box-shadow: 0 0 10px #477385;
    cursor: pointer;
`;

export const HeaderPage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

export const FooterPage = styled.div `
    background-image: linear-gradient(to left, #00b4cb, #e5d29f);
    text-align: center;
    padding: 5px;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 5vh;

    ul {
        display: flex;
        justify-content: center;
            li {
                list-style: none;
                img {
                    width: 20px;
                    margin-left: 10px;
                }
            }
       }
`;