import React, { useState,useEffect } from 'react'
import '../App.css'
import Moviecard from './Moviecard'


const List = ({data, movies, input, rateFilter }) => {

    return (
        <>
            <div className='ListMovie'>
                {movies.filter(el => (el.titre.toLowerCase().includes(input.toLowerCase().trim()) ||  el.rating===rateFilter.toString())).map((movie, index) => (
                    <Moviecard movie={movie} />
                ))
                }


                
            </div>

           
        </>
    )
}

export default List
