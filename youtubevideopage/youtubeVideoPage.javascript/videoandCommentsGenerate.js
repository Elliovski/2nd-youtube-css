import { allVideoData } from "../../data/allVideoData.js";

export function renderVideoAndComment (){
    let html = `
                                <div class="videos-div">
                               <!-- <video src="videos/Night Drive - A Chillwave Mix.mp4" controls></video> -->
                                <img src="thumbnails/thumbnail-1.webp" alt="">
    
                                
                            </div>
                            <DIV class="Details">
                                <DIv class="title-div">
                                    Night Drive - A Chillwave Mix
                                </DIv>
                                <DIv class="Subscriptions-likes-dislikes-div">
                                    <div class="Subscriptions-buttons-Div">
                                        <img src="profile pics/channels4_profile.jpg" alt="" class="current-profilepic">
                                        <div>
                                        <div class="chekmarkandthumnail">
                                            <p>Odysseus</p>
                                            <p class="chekmark">&#10003;</p>
                                        </div>
                                            <p class="amountofsubscribers">236K abunəçi</p>
                                        </div>
                                        <button class="SUBSCRIBE-button">SUBSCRIBE!</button>
                                    
                                        
                                    </div>
                                
                                    <Div class="likes-Div">
                                        <button class="like">&#128077; 74K</button>
                                        <BUtton class="dislike">&#128078;</BUtton >
                                        <BUtton class="likes">SHARE</BUtton >
                                        <BUtton class="likes">...</BUtton >
                                            
                                    </Div>
                                    
                                </Div>
                                <Div class="more-details-div">
                                    <div class="visible-up">
                                        <div class="Big-text">4,9 mln baxiş 5 il öncə</div>
                                        <div class="little-text">Art by me</div>
                                        
                                    </div>
                                    <div class="invisible-down">
                                        
                                        <p class="little-text" style="margin: 20px 0px 20px 0px;">👉  [listen on spotify, shop the store, support on patreon, & more] https://linktr.ee/odysseusclub</p>
                                        <p class="little-text">Tracklist:</p>
                                        <p class="little-text">00:00 Unfound - Arrival</p>
                                        <p class="little-text">03:32 Emil Rottmayer - Limit</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                        <p class="little-text">4,9 mln baxiş 5 il öncə</p>
                                    </div>
                                </Div>
                                <Div class="comment-sectionDiv">
                                    <div class="amountofcomments">
                                        <p style="font-weight: bold;">1.753 sehr</p>
                                    </div>
                                    <div class="yourcomment"> 
                                        <img src="profile pics/channel-1.jpeg" alt="" class="yourcommentprofilepic">
                                        <p>sehr elave edin </p>
                                    </div>

                                    <div class="all-other-comments">
                                        <div class="one-single-comment">
                                            <img src="profile pics/channel-2.jpeg" alt="" class="comenter-profileppic">
                                            <div style="margin-left: 13px;">
                                                <div class="upofthecomment">
                                                    <p class="comenter">@OdysseusOfficial</p>
                                                    <p class="whenwasitsend">2 il öncə</p>
                                                </div>
                                                <div class="THE-comment">
                                                    4.5M views 🙏👉  [listen on spotify, shop the store, support on patreon, & more]https://linktr.ee/odysseusclub
                                                </div>
                                                <Div class="comments-buttons">                                                    
                                                    <div class="like-and-dislike">
                                                        <button class="like-and-dislike">&#128077;</button>
                                                        <button class="like-and-dislike">&#128078;</button>
                                                    </div>
                                                    <button class="Cevab-ver-button ">Cavab ver</button>
                                                </Div>
                                            </div>

                                        </div>
                                        <div class="one-single-comment">
                                            <img src="profile pics/channel-2.jpeg" alt="" class="comenter-profileppic">
                                            <div style="margin-left: 13px;">
                                                <div class="upofthecomment">
                                                    <p class="comenter">@OdysseusOfficial</p>
                                                    <p class="whenwasitsend">2 il öncə</p>
                                                </div>
                                                <div class="THE-comment">
                                                    4.5M views 🙏👉  [listen on spotify, shop the store, support on patreon, & more]https://linktr.ee/odysseusclub
                                                </div>
                                                <Div class="comments-buttons">                                                    
                                                    <div class="like-and-dislike">
                                                        <button class="like-and-dislike">&#128077;</button>
                                                        <button class="like-and-dislike">&#128078;</button>
                                                    </div>
                                                    <button class="Cevab-ver-button ">Cavab ver</button>
                                                </Div>
                                            </div>

                                        </div>
                                        <div class="one-single-comment">
                                            <img src="profile pics/channel-2.jpeg" alt="" class="comenter-profileppic">
                                            <div style="margin-left: 13px;">
                                                <div class="upofthecomment">
                                                    <p class="comenter">@OdysseusOfficial</p>
                                                    <p class="whenwasitsend">2 il öncə</p>
                                                </div>
                                                <div class="THE-comment">
                                                    4.5M views 🙏👉  [listen on spotify, shop the store, support on patreon, & more]https://linktr.ee/odysseusclub
                                                </div>
                                                <Div class="comments-buttons">                                                    
                                                    <div class="like-and-dislike">
                                                        <button class="like-and-dislike">&#128077;</button>
                                                        <button class="like-and-dislike">&#128078;</button>
                                                    </div>
                                                    <button class="Cevab-ver-button ">Cavab ver</button>
                                                </Div>
                                            </div>

                                        </div>
                                        <div class="one-single-comment">
                                            <img src="profile pics/channel-2.jpeg" alt="" class="comenter-profileppic">
                                            <div style="margin-left: 13px;">
                                                <div class="upofthecomment">
                                                    <p class="comenter">@OdysseusOfficial</p>
                                                    <p class="whenwasitsend">2 il öncə</p>
                                                </div>
                                                <div class="THE-comment">
                                                    4.5M views 🙏👉  [listen on spotify, shop the store, support on patreon, & more]https://linktr.ee/odysseusclub
                                                </div>
                                                <Div class="comments-buttons">                                                    
                                                    <div class="like-and-dislike">
                                                        <button class="like-and-dislike">&#128077;</button>
                                                        <button class="like-and-dislike">&#128078;</button>
                                                    </div>
                                                    <button class="Cevab-ver-button ">Cavab ver</button>
                                                </Div>
                                            </div>

                                        </div>
                                        <div class="one-single-comment">
                                            <img src="profile pics/channel-2.jpeg" alt="" class="comenter-profileppic">
                                            <div style="margin-left: 13px;">
                                                <div class="upofthecomment">
                                                    <p class="comenter">@OdysseusOfficial</p>
                                                    <p class="whenwasitsend">2 il öncə</p>
                                                </div>
                                                <div class="THE-comment">
                                                    4.5M views 🙏👉  [listen on spotify, shop the store, support on patreon, & more]https://linktr.ee/odysseusclub
                                                </div>
                                                <Div class="comments-buttons">                                                    
                                                    <div class="like-and-dislike">
                                                        <button class="like-and-dislike">&#128077;</button>
                                                        <button class="like-and-dislike">&#128078;</button>
                                                    </div>
                                                    <button class="Cevab-ver-button ">Cavab ver</button>
                                                </Div>
                                            </div>

                                        </div>
                                        <div class="one-single-comment">
                                            <img src="profile pics/channel-2.jpeg" alt="" class="comenter-profileppic">
                                            <div style="margin-left: 13px;">
                                                <div class="upofthecomment">
                                                    <p class="comenter">@OdysseusOfficial</p>
                                                    <p class="whenwasitsend">2 il öncə</p>
                                                </div>
                                                <div class="THE-comment">
                                                    4.5M views 🙏👉  [listen on spotify, shop the store, support on patreon, & more]https://linktr.ee/odysseusclub
                                                </div>
                                                <Div class="comments-buttons">                                                    
                                                    <div class="like-and-dislike">
                                                        <button class="like-and-dislike">&#128077;</button>
                                                        <button class="like-and-dislike">&#128078;</button>
                                                    </div>
                                                    <button class="Cevab-ver-button ">Cavab ver</button>
                                                </Div>
                                            </div>

                                        </div>
                                        <div class="one-single-comment">
                                            <img src="profile pics/channel-2.jpeg" alt="" class="comenter-profileppic">
                                            <div style="margin-left: 13px;">
                                                <div class="upofthecomment">
                                                    <p class="comenter">@OdysseusOfficial</p>
                                                    <p class="whenwasitsend">2 il öncə</p>
                                                </div>
                                                <div class="THE-comment">
                                                    4.5M views 🙏👉  [listen on spotify, shop the store, support on patreon, & more]https://linktr.ee/odysseusclub
                                                </div>
                                                <Div class="comments-buttons">                                                    
                                                    <div class="like-and-dislike">
                                                        <button class="like-and-dislike">&#128077;</button>
                                                        <button class="like-and-dislike">&#128078;</button>
                                                    </div>
                                                    <button class="Cevab-ver-button ">Cavab ver</button>
                                                </Div>
                                            </div>

                                        </div>

                                    </div>
                                    
                                </Div>
                            </DIV>

    `

    document.querySelector('.vido-main').innerHTML = html;

}