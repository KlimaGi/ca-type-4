import React, { useEffect, useState } from 'react';
import DayItem from './day-item';

const Container = ({ boxes }) => {


  return (

    <div className='container'>
      {boxes.map(box => <div className='container-item' key={box.xy}>{box.xy}</div>)}
    </div>

    // <div className='container'>
    //   {boxes.map((box) => (
    //     <div className='container-item' key={box.xy}>  {box.xy} {box.color} </div>
    //   ))}
    // </div>
    // <br />
    // <div className='container'>
    //   {boxes.map((box) => {
    //     return (<DayItem key={box.xy} data={box} />)
    //   })}
    // </div>



  )
}

export default Container;
