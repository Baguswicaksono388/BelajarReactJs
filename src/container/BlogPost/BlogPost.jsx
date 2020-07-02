import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [] //menyiapkan array kosong
    }

    componentDidMount() {
        //pemanggilan API dengan fetch
        // fetch('https://jsonplaceholder.typicode.com/posts') //krn disini menggunakan contoh url post pd jsonplaceholder
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        //pemanggilan API dengan axios, untuk menambahkan buka folder project dgn cmd lalu ketik nmp add axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => { //res itu adlh nama function yang kita namai sendiri
                console.log(res.data); //data adlh berisikan data", jika dihilangkan akan memunculkan config, dll saat diconsole
                this.setState({
                    post: res.data
                })
            })
    }

    render() {
        return (
            //Fragment disini berfungsi jika lebih dari satu parent harus menggunakan fragment
            <Fragment>
                <p className="section-title">Blog Post</p>
                {/* memisahkan ke dlm statles commponent krn ini hanya berfungsi return saja */}
                {
                    this.state.post.map(post => { //map ini berfungsi unk mengulang array sepanjang post
                        return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;