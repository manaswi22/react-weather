

import React from 'react'
import Forecastitem from './forcastitem'

const Forecastlist = ({forecastdata}) => {
    console.log(forecastdata)
  return (
    <>
    {/* <ul className="list-group"> */}
        {forecastdata && forecastdata.list.map((item,index)=>(
            <Forecastitem key={index} forecastdata={item}/>
        ))}
    {/* // </ul> */}
    </>
  )
}

export default Forecastlist