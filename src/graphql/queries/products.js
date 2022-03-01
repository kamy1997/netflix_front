import gql from "graphql-tag";

export const getProducts = gql`
    query {
        getProducts{
        id,
        title,
       
        img}
    }
`

export const getProduct = gql`
    query getProduct($id:ID){
        getProduct (id:$id){
        id,
        title,
       
        img}
    }
`