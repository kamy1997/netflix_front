import gql from "graphql-tag";

export const getProduct = gql`
    mutation createProduct({
        createProduct (id:$id){
       
        title,
        price,
        img}
    }
    `