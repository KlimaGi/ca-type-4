import React, { useRef } from 'react'

const SideBar = ({ reserve, cancelReserve, reservationStatus }) => {
  const colorRef = useRef();

  return (
    <div className='side-bar'>
      {reservationStatus ?
        <div>
          <button className='button' onClick={cancelReserve}>Delete reservation</button>
        </div>
        :
        <>
          <div>
            <input ref={colorRef} type='color' className='container-item' />
          </div>
          <div>
            <button className='button' onClick={() => reserve(colorRef.current.value)}>Make reservation</button>
          </div>
        </>}



    </div>
  )
}

export default SideBar
