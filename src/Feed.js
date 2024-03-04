import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore'
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
       
        await getDocs(collection(db, "posts"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => doc.data());
                setPosts(newData);                
                console.log(posts, newData);
            })
       
    }

    useEffect(() => {
        fetchPost();
    }, [])

return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>

        <TweetBox />

        <FlipMove>
        {posts.map((post) => (
            <Post 
                key = {post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
            />
        ))}
        </FlipMove>
    </div>
);
}

export default Feed