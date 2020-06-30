import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => { //props disini fungsinya untuk agar komponen bersifat dinamis
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/DSZxyum4X7k/maxresdefault.jpg" alt=""></img>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

//ini digunakan ketika user tidak memberikan nilai props pada component
YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'Desc Here'
}

export default YouTubeComp;