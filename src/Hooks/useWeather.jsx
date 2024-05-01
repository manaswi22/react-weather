
//importing the required hooks
import {useState,useEffect} from 'react'
import axios from 'axios';
//creating the custom hook for fetching the weather api data
export default function useWeather({city}){ //mounting
    console.log(city);
    const [weatherloading,setWeatherloading]=useState(true)
    const [weathererror,setWeathererror]=useState(null)
    const [weatherdata,setWeatherdata]=useState(null)

//api information
// const apiKey='e0a90b6f2e1c245f892d797c5b908e7d'
const apiKey='bd5e378503939ddaee76f12ad7a97608'
const apiUrl='https://api.openweathermap.org/data/2.5/weather'


    useEffect(()=>{
        
        const fetchData=async()=>{
            try {
                setWeatherloading(true) //initial loading at time of fetching
                setWeathererror(null) //initially no error
                const response = await axios.get(apiUrl,{
                    params:{
                        q:city,
                        appid:apiKey
                       
                    }
                });
                console.log(response);
                setWeatherdata(response.data) //passing the data from the result obtained
                // setWeathererror(null)
                // setWeatherloading(false)

              } catch (error) {
                // setWeatherloading(false)
                setWeathererror(error)


              }finally{
                setWeatherloading(false)

              }
        }
        //calling the function
        fetchData()
        return ()=>{} //unmounting cleaning


    },[city])  //updating phase
    return {weatherdata,weatherloading,weathererror}
}