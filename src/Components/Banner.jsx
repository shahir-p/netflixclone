import React, { useEffect, useState } from 'react'
import instance from '../instance';

              // destructirung//
const Banner = ({fetchURL}) => {
  console.log(fetchURL);
  const imgbase_url = "https://image.tmdb.org/t/p/original";

  const [movies,setMovies] = useState()
  const fetchData=async()=>{
    const {data}= await instance.get(fetchURL)
    // console.log("api result");
    // console.log(data);
    const res =data.results[Math.floor(data.results.length*Math.random())]
    setMovies(res)
    console.log("background :",res.backdrop_path);
    
  }
 

  useEffect(()=>{
    setInterval(()=>{
      fetchData()
    },5000)
  // fetchData()

  },[])

  // console.log("movies :", movies);
  
  
  return (
    <>
      <div>
        
          {/* <h2 style={{color:"green"}}>Banner</h2> */}
          <div style={{backgroundImage: `url(${imgbase_url}${movies?.backdrop_path})`, height:"600px", backgroundSize:"cover", backgroundPosition:"center", borderRadius:"10px", transition:"3s ease"}}>
          <img style={{width:"200px", paddingLeft:"30px"}} src="https://cdn.iconscout.com/icon/free/png-512/free-netflix-icon-download-in-svg-png-gif-file-formats--logo-brand-world-logos-vol-1-pack-icons-282224.png?f=webp&w=512" alt="" />
         <div style={{paddingTop:"180px", paddingLeft:"40px"}}>
          <h1 style={{color:"white", }}>{`${movies?.title}`}</h1>
          <button className='btn btn-danger' style={{marginLeft:"10px"}}>Play <i className="fa-solid fa-play"></i></button>
          <button className='btn btn-outline-secondary' style={{marginLeft:"10px", color:"white"}}>More Info <i className="fa-solid fa-caret-down"></i></button>
          <p style={{width:"50%", marginLeft:"10px" ,marginTop:"15px" ,color:"white"}}>{`${movies?.overview?.slice(0,200)}...`}</p>
         </div>
          </div>
        
      </div>
    </>
  )
}

export default Banner