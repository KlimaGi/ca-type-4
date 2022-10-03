import React from 'react';

const ContainerItem = ({ xy, setSelectedBox, selectedBox }) => {

  const selectedItem = xy === selectedBox
    ? "container-item selected"
    : "container-item";


  return (
    <div
      className={selectedItem}
      onClick={() => setSelectedBox(xy)}
      selectedBox={selectedBox}
    >
      {xy}
    </div>
  );
}

export default ContainerItem;
