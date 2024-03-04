import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What's happening?!</h2>
        <TwitterTweetEmbed tweetId='1763331059175890973' />
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="historyinmemes"
        options={{height: 400}}
        />
        <TwitterShareButton
        url={'https://facebook.com/saurabhnemade'}
        options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />
      </div>
    </div>
  )
}

export default Widgets