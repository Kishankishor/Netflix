import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../constants/Axios'
import { ApiKey } from '../../constants/constants'
import { imageurl } from '../../constants/constants'
export const Banner = () => {
    const [movie,setmovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${ApiKey}&language=en-US`).then((Response)=>{
            setmovie(Response.data.results[0])
        })
    },)
  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageurl+movie.backdrop_path:''})`}}>
        <div className='content'>
            <h1 className='title'>{movie? movie.title:''}</h1>
            <div className='banner_buttons'>
                <button className='button' >play</button>
                <button className='button'>My list</button>
    
            <h1 className='description'>{movie? movie.overview:''}</h1>
            </div>
            <div className="fade"></div>
        </div>
    </div>
  )
}
