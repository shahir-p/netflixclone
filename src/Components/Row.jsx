import React, { useEffect, useState } from 'react'
import instance from '../instance';

import './row.css'


const Row = ({ title, fetchURL }) => {

  const [allmovies, setAllmovies] = useState()
  console.log("url :", fetchURL);
  const imgbase_url = "https://image.tmdb.org/t/p/original";

  const fetchData = async () => {
    const response = await instance.get(fetchURL)
   
    console.log("response :", response);
    setAllmovies(response.data.results)

  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log("datalist :", allmovies);


  return (
    <div className='row  mt-5 ms-1' style={{ width: "100%", height:"360px" }}>
      <h2 style={{ color: "black",marginLeft:"20px" }}>{title}</h2>
      <div className='movieRow' >
        {
          allmovies?.map(item=>(
            <img className='movies' src={`${imgbase_url}${item?.poster_path}`} alt="" />

          ))
        }
     
    </div>
    </div>
    
  )
}

export default Row