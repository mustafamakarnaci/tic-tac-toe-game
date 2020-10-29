import React from 'react';
import '../App.css';

const Square = ({ value, onClick }) => {
  //const style = value ? `squares ${vlaue}` : `squares`;
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square;
