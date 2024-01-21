import React, { useEffect, useState } from 'react'
import './Rawpost.css'
import axios from '../../constants/Axios'
import { imageurl, ApiKey } from '../../constants/constants'
import Youtube from 'react-youtube'
export const Rawpost = (props) => {
    const [movie, setmovie] = useState([])
    const [idd, setid] = useState('')


    useEffect(() => {
        axios.get(props.url).then((Response) => {
            

            setmovie(Response.data.results)
            
            
        })
    })
    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
            autoplay: 1
        }

    }
    const handleYoutube = () =>{
        setid('')

    }
    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${ApiKey}&language=en-US`).then((Response) => {
            console.log(Response.data)
            if (Response.data.results.length !== 0) {
                setid(Response.data.results[0])
            } else {
                console.log('array empty')
            }

        })

    }
    return (
        <div className='raw'>
            <h2 className='title'>{props.title}</h2>
            <div className="posters">
                {movie.map((movies) => {
                    return (<div>
                        <img src={`${imageurl + movies.backdrop_path}`}
                            alt="" className={props.isSmall ? 'smallposter' : "poster"} onClick={() => handleMovie(movies.id)} />
                           
                              <h4 className="name">{movies.name}</h4>
                         
                            </div>
                    )
                })}


            </div>
            {idd ? <button onClick={handleYoutube} className='CloseButton'>X</button> : <></>}
            {idd && <Youtube videoId={idd.key} opts={opts} />}
        </div>
    )
}
