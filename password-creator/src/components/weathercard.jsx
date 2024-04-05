import React, { useState } from 'react'
import { useEffect } from 'react'
import { api_key } from '../consts'

export default function Weathercard(props) {

    const [cityTemp,setCityTemp]=useState(null)
    const [cityCloud, setCityCloud]=useState(null)
    const [humidity,setHumidity]=useState(null)
    const [rain,setRain]=useState(null)
    const [error, setError]=useState(false)
    const[loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)
        const fetchData= async()=>{
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.locationProps}&appid=${api_key}`)
                const res= await response.json();

                setCityTemp(res.main.temp)
                setCityCloud(res.clouds.all)
                setHumidity(res.main.humidity)
                setRain(res.wind.speed)
                setLoading(false)
            }
            catch(error){
                setError(true)
                setLoading(false)
                console.log(error)
        }
        }
        
        fetchData()
    },[props.locationProps, cityTemp, cityCloud])

  return (
    <div className="card bg-inherit shadow-2xl mt-10">
    <div className="flex flex-col space-y-5 card-body items-center text-center"  >
      <h2 className="text-5xl font-bold text-white-700"> {props.locationProps}</h2>
      {loading && (
        <span className="loading loading-spinner loading-xs"></span>
        )}
        {!loading && error && <p className='text-lg'>unable to load data</p>}
      {cityTemp!=null && !error && <>
      <div className="pt-4 felx flex-row items-center justify-center">
        <p className="text-5xl font-medium">{cityTemp.toFixed(0)} °C</p>
      </div>
      <div className="flex flex-row items-center justify-center w-64 ">
        <div className='flex flex-col items-center justify-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
     <  path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
        </svg>
        <p className="text-1xl">{`${cityCloud}%`}</p>
         </div>


        <div className='flex flex-col items-center justify-center mr-5 ml-5'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>

        <p className="text-1xl">{rain.toFixed(0)}m/s</p>
        </div>


        <div className='flex flex-col items-center justify-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>

        <p className="text-1xl">{humidity.toFixed(0)}%</p>
        </div>

      </div>
      
      </>}
    </div>
    
  </div>
  )
}
