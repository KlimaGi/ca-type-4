import React, { useEffect, useState } from 'react';
import './styles.css'
import Container from './components/container';
import SideBar from './components/side-bar';

function App() {
  const items = [
    {
      xy: '00', color: 'white',
    }, {
      xy: '01', color: 'powderblue',
    }, {
      xy: '02', color: 'purple',
    }, {
      xy: '03', color: '',
    }, {
      xy: '04', color: '',
    }, {
      xy: '10', color: '',
    }, {
      xy: '11', color: '',
    }, {
      xy: '12', color: '',
    }, {
      xy: '13', color: '',
    }, {
      xy: '14', color: '',
    }, {
      xy: '20', color: '',
    }, {
      xy: '21', color: '',
    }, {
      xy: '22', color: '',
    }, {
      xy: '23', color: '',
    }, {
      xy: '24', color: '',
    }, {
      xy: '30', color: '',
    }, {
      xy: '31', color: '',
    }, {
      xy: '32', color: '',
    }, {
      xy: '33', color: '',
    }, {
      xy: '34', color: '',
    },
  ];

  const [boxes, setBoxes] = useState([]);
  const [selectedBox, setSelectedBox] = useState('00');
  let reservationStatus = (boxes.find(x => x.xy === selectedBox))?.color;

  useEffect(() => {
    // let arr = [...items];
    let arr = items.map(item => item);
    setBoxes(arr)
  }, []);

  function reserve(pickedColor) {
    const boxesUpdate = [...boxes];
    const selected = boxesUpdate.find(x => x.xy === selectedBox);
    selected.color = pickedColor;
    setBoxes(boxesUpdate);
  }

  function cancelReserve() {
    const boxesUpdate = [...boxes];
    const selected = boxesUpdate.find(x => x.xy === selectedBox);
    selected.color = '';
    setBoxes(boxesUpdate);
  }

  console.log('reservationStatus', reservationStatus);

  return (
    <>

      <h3>pick the day</h3>
      <div className="main d-flex">
        <Container boxes={boxes} setSelectedBox={setSelectedBox} selectedBox={selectedBox} />
        <SideBar
          reserve={reserve}
          cancelReserve={cancelReserve}
          reservationStatus={reservationStatus}
        />
      </div>
    </>
  );
}

export default App;
