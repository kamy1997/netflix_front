import gql from "graphql-tag";

export const getMovies = gql`
    query {
        getMovies{
        id,
        title,
        title,
       description,
       categorie,
       img ,
      video,
       iswich
        
       
       }
    }
`

export const getMovie = gql`
    query getMovie($id:ID){
        getMovie (id:$id){
        id,
        title,
       
        img}
    }
    `