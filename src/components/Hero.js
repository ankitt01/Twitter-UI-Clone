import React, { Component } from 'react';
import banner from './img/banner.jpg';
import './style/hero.css';
import ProfileCard from './profile-card';
import Settings from './Settings';
import Trends from './Trends';
import Follow from './Follow';

class Hero extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hero-section">
                <img className="banner-img" src={banner} alt="banner"/>
                <div className="feed">
                    <div>
                        <ProfileCard />
                        <div className="setting-cards">
                            <Settings label="Activity" source="https://img.icons8.com/ios-glyphs/26/000000/visible--v1.png" />
                            <Settings label="Moments" source="https://img.icons8.com/material/26/000000/the-flash-sign.png" />
                            <Settings label="Friends" source="https://img.icons8.com/ios-filled/26/000000/friends.png" />
                            <Settings label="Edit Profile" source="https://img.icons8.com/android/26/000000/settings.png" />
                        </div>
                    </div>
                    <div className="feed-posts">
                        <div className="nav">
                            <ul>
                                <li>Tweets</li>
                                <li>Tweets & Retweets</li>
                                <li>Media</li>
                                <li>Likes</li>
                                <li><img src="https://img.icons8.com/small/24/000000/more.png"/></li>
                            </ul>
                        </div>

                        <div className="feed-post">
                            <img className="profile-pic" src="https://randomuser.me/api/portraits/men/11.jpg" alt="dp"/>
                            <div className="post-content">
                                <span><img src="https://img.icons8.com/material-rounded/15/000000/retweet.png"/>Leonardo retweeted</span>

                                <div className="post-info">
                                    <p className="name">John Ramsey</p><img src="https://img.icons8.com/color/15/000000/verified-badge.png"/>
                                    <p className="user-tag">@john_ram</p>
                                    <p className="time"> <img src="https://img.icons8.com/pastel-glyph/12/000000/clock.png"/> 35 mins </p>
                                </div>
                                <span>Very good words..</span>
                                <div className="re-tweet">
                                    <div className="post-info">
                                    <p className="name"><img className="re-tweet-img" src="https://randomuser.me/api/portraits/men/13.jpg" alt="dp"/>Theodore Roosevelt</p>
                                    <p className="user-tag">@president_roosevelt</p>
                                    <p className="time"> <img src="https://img.icons8.com/pastel-glyph/12/000000/clock.png"/> Hour </p>
                                    </div>
                                    <p>In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is do nothing.</p>
                                </div>

                                <div className="post-footer">
                                    <div>
                                        <img src="https://img.icons8.com/material-outlined/18/000000/topic--v1.png"/>
                                        <span>32</span>
                                    </div>
                                    <div>
                                    <img src="https://img.icons8.com/material-rounded/18/000000/retweet.png"/>
                                        <span>68</span>
                                    </div>
                                    <div>
                                        <img src="https://img.icons8.com/metro/18/000000/like.png"/>
                                        <span>426</span>
                                    </div>
                                    <div>
                                        <img src="https://img.icons8.com/material-rounded/15/000000/share-3.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="feed-post">
                            <img className="profile-pic" src="https://randomuser.me/api/portraits/men/11.jpg" alt="dp"/>
                            <div className="post-content">

                                <div className="post-info">
                                    <p className="name">John Ramsey</p><img src="https://img.icons8.com/color/15/000000/verified-badge.png"/>
                                    <p className="user-tag">@john_ram</p>
                                    <p className="time"> <img src="https://img.icons8.com/pastel-glyph/12/000000/clock.png"/> 35 mins </p>
                                </div>
                                <span>Best views from vacations.  ❄ ⛄ ☃</span>
                                <div className="images">
                                    <img src="https://images.pexels.com/photos/2437286/pexels-photo-2437286.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
                                    <img src="https://images.pexels.com/photos/1035342/pexels-photo-1035342.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
                                    <img src="https://images.pexels.com/photos/698275/pexels-photo-698275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                                </div>

                                <div className="post-footer">
                                    <div>
                                        <img src="https://img.icons8.com/material-outlined/18/000000/topic--v1.png"/>
                                        <span>32</span>
                                    </div>
                                    <div>
                                    <img src="https://img.icons8.com/material-rounded/18/000000/retweet.png"/>
                                        <span>68</span>
                                    </div>
                                    <div>
                                        <img src="https://img.icons8.com/metro/18/000000/like.png"/>
                                        <span>426</span>
                                    </div>
                                    <div>
                                        <img src="https://img.icons8.com/material-rounded/15/000000/share-3.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="trends">
                        <div>
                            <div className="head">
                                <span> Trends for you</span>
                                <img src="https://img.icons8.com/small/16/000000/gear.png"/>
                            </div>
                            <Trends tag="ecommerce" count="71.4k Tweets" />
                            <Trends tag="apple" count="68.2k Tweets" />
                            <Trends tag="uefa" count="63k Tweets" />
                            <Trends tag="music" count="61k Tweets" />
                            <span className="more">SEE MORE</span>
                        </div>
                        <div className="suggestions">
                        <div className="head">
                                <span> Trends for you</span>
                                <img src="https://img.icons8.com/metro/13/000000/process.png"/>
                            </div>
                            <Follow name="Kate Lingard" tag="kate_14"/>
                            <Follow name="Crazy snowman" tag="crazy_snow"/>
                            <Follow name="Sharpova" tag="sharpova"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Hero;