import React from 'react'
import './App.css'
import axios from 'axios'
import { useState, useEffect} from 'react'

export default function App() {
  const [location, setLocation] = useState('')
  const [data, setData] = useState({})
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b68101a73b6cbb68b4a60718cf5a5f3d`
 

  
  const SearchLocation =(event)=>{
    if (event.key === "Enter") {
      
      axios.get(url).
      then((res)=>{
        setData(res.data)
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
        alert(err.message)
      })
      setLocation("")
    }
      
    
  }
  
  
  return (
    <>
    <div className="container-fluid first">
      <div className="row">
        <div className="col-lg-12 col-md-6 col-sm-12">
          <p></p>
          <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 m-auto">
              <div className="form-floating">
              <input type="text"
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={SearchLocation}
              className='form-control mt-5 rounded-pill text-center'
              placeholder='input city name' />
              <label htmlFor="">input city name</label>
              </div>
            </div>
          <h1 className='text-center text-white mt-5 location'>{data.name}</h1>
         <div className='container-fluid col-lg-6 col-md-4 col-sm-4 flex'>
         <div>
         {data.main ? <h1>{data.main.temp}F</h1>:null}
         <p>Temperature</p>
         </div>
        <div>
        {data.weather ? <p>{data.weather[0].main}</p>:null}
        <p>Weather</p>
        </div>
         <div>
         {data.main ? <p>{data.main.feels_like}F</p>:null}
         <p>Feels</p>
         </div>
         <div>
         {data.main ? <p>{data.main.humidity}%</p>:null}
         <p>Humidity</p>
         </div>
         <div>
         {data.main ? <p>{data.wind.speed}MPH</p>:null}
         <p>Wind Speed</p>
         </div>
         </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
