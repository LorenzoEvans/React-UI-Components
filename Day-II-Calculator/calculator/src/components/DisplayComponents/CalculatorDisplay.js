import React from 'react';

const calcBorder = {
    border:' 2px solid gray' ,
}
const CalcDisplay = {
    border: '1px solid black' ,
    width: '99.9%' ,
    height: '120px' ,
    margin: '0 auto' ,
    background: '#222222' ,
    color: 'white' ,
    fontSize: '7rem' ,
    textAlign: 'right' ,
    
}

const CalcBorder = {
    border: "2px solid gray" 
}

const Display = () => {
    return (
        <div style={CalcBorder}> <div style={CalcDisplay}>0</div></div>
       
    )
}

export default Display ;