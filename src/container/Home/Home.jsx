import React, { Component } from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        //baris didalm function ini digunakan untuk menghilangkan component selama 5 detik
        setTimeout(() => {
            this.setState({
                showComponent: false
            })
        }, 5000)
    }

    render() {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr></hr>
                <YouTubeComp
                    time="7.12"
                    title="Tutorial menggambar - Bagian 1"
                    desc="4x ditonoton. 1 hari yang lalu"
                />
                <YouTubeComp
                    time="8.02"
                    title="Tutorial menggambar - Bagian 2"
                    desc="300x ditonoton. 5 hari yang lalu"
                />
                <YouTubeComp
                    time="5.04"
                    title="Tutorial menggambar - Bagian 3"
                    desc="200x ditonoton. 7 hari yang lalu"
                />
                <YouTubeComp
                    time="4.12"
                    title="Tutorial menggambar - Bagian 1"
                    desc="500x ditonoton. 8 hari yang lalu"
                />
                <YouTubeComp /> */}
                {/* <p>Counter</p>
                <hr></hr>
                <Product></Product> */}

                <p>Lifeycle Component</p>
                <hr></hr>
                {
                    this.state.showComponent
                        ?
                        <LifeCycleComp />
                        : null
                }
            </div>
        )
    }
}

export default Home;