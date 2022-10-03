import React from 'react';

const DayItem = ({ xy, color = 'white' }) => {
  // console.log('xy', xy);
  return (
    <div className='container-item'>
      {xy} | {color}
    </div>
  );
}

export default DayItem;
