import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Type } from "typescript";
import INFO_CHARACTER from "../../querys";
import { Item, List, Image, Container } from "../../styled";

export interface CardProps {
    id: number;
    flipped?: boolean;
    result: Array<Type>;
    handleClick?: (id: number) => void;
}
/*CONTINUAR AQUI, PEGAR O ID A PARTIR DO RESULT*/
export function Card ({ flipped = false, result, handleClick, id}: CardProps) {
    const cardBackClassName = ['card-back'];
    const cardFrontClassName = ['card-front'];

    flipped && cardBackClassName.push('card-back__flip');
    flipped && cardFrontClassName.push('card-front__flip');

    const handleClickFunction = () => {
        if (handleClick) {
            handleClick(id);
        }
    }   

    return (
        <Container>
        {result.map((character: any, index: any) => (
            <List key={index}>
              <Item>
                <div className={cardBackClassName.join(' ')}><Image onClick={handleClickFunction} src="../images/tag.jpeg" alt={character.name} /></div>
                <div className={cardFrontClassName.join(' ')}><Image onClick={handleClickFunction} src={character.image} alt={character.name} /></div>
              </Item>
            </List>
          ))}
        </Container>
    );
};