import React from 'react';
import './HelloComponent.css';

// Dapat kita sebut ini adalah functional component (penulisan standart)
const HelloComponent = () => {
    return <p className="text-p">Hello Functional component</p>
}

export default HelloComponent; //Agar Component dapat di akses dimana saja