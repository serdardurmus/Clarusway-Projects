import React, { useState, useEffect } from "react";
import {Card} from "../Card";

export const CardList = () => {
    
    // TODO LİST
    // api call - axios
    // axios parameters api_key page query
    // data state - useState
    // data mapping - Card

    return (
        <StyledCardList>
           {movieList?.map(
               (movie, index) => (
               <Card 
                key={index} 
                title={movie.title}
                imgSrc={baseImageUrl + movie.poster_path}
                />)
            )}
        </StyledCardList>
    )
}

// nullish coalesence ?? 

/*
export const CardList = () => {
    const [movieData, setMovieData] = useState(null);
    useEffect(() =>{
        axios.get(baseUrl,{
            params:{
                api_key: apiKey,
                page:1,
                query:'Star Wars' //TODO: from input
            }
        })
        .then((res) => setMovieData(res.data.results))
        .catch((err) => console.log(err))
    },[])
    return (
        <>
            { movieData && movieData.map(movie =>{
                return <Card title={movie.title}/>
            } )
                
            }
        </>
    )
}
*/