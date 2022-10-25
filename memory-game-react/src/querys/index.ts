import { gql } from "@apollo/client";

const INFO_CHARACTER = gql`
    query Char ($ListIds: [ID!]!){
        charactersByIds (ids: $ListIds) {
            id
            name
            image
        }
    }
`;

export default INFO_CHARACTER;