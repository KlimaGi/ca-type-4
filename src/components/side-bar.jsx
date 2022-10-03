import React, { useRef } from 'react'

const SideBar = ({ reserve, cancelReserve }) => {
  const colorRef = useRef();

  return (
    <div className='side-bar'>
      <div>
        <input ref={colorRef} type='color' className='container-item' />
      </div>
      <div>
        <button className='button' onClick={() => reserve(colorRef.current.value)}>Make reservation</button>
      </div>
      <div>
        <button className='button' onClick={cancelReserve}>Delete reservation</button>
      </div>
    </div>
  )
}

export default SideBar
