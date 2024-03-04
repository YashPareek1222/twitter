import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import './TweetBox.css';
import { collection, addDoc } from "firebase/firestore";
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const addPost = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, "posts"), {
            displayName: 'Elon Musk',
            username: 'elon',
            text: tweetMessage,
            verified: 'true',
            avatar: 'https://rb.gy/1d1vvn',
            image: tweetImage,
        });

        setTweetImage("");
        setTweetMessage("");
    };

return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://rb.gy/1d1vvn" />
                <input placeholder="What's happening" 
                    type='text'
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)}
                    />
            </div>
            <div className='tweetBox__imageInput'>
                <input placeholder='Optional: Enter image URL' 
                    type='text' required
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)} />
            </div>
            <Button className='tweetBox__button' onClick={addPost} type='submit'> Post </Button>
        </form>
    </div>
)
}

export default TweetBox