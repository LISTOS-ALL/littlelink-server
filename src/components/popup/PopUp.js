import React from 'react';
import Popout from 'react-popout';
const PopUp = ({ url, title, setClose }) => {
  return (
    <Popout url={url} title={'title'} onClosing={setClose}>
      <div>Popped out content!</div>
    </Popout>
  );
};

export default PopUp;
