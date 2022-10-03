import React, { useEffect, useState } from 'react';
import ContainerItem from './container-item';

const Container = ({ boxes, setSelectedBox, selectedBox }) => {


  return (

    <div className='container'>
      {boxes.map(box => <ContainerItem key={box.xy} xy={box.xy} setSelectedBox={setSelectedBox} selectedBox={selectedBox} />)}
    </div>

  )
}

export default Container;
