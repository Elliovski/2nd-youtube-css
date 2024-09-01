import { allVideoData } from "../../data/allVideoData.js";
import { ClassAdderAndRemoverFunction } from "../../WidelyUsedFunctions/classFunctions.js";
import {SubscribedAddList , addToSubscribedYoutubers, RemoveToSubscribedYoutubers  } from "../../WidelyUsedFunctions/listFunctions.js";
import { wantedVideo , findWantedVideo } from "../../youtube2nd javascript/generateVideos.js";

export let requestedVideo = findWantedVideo(wantedVideo.id)


export function renderVideoAndComment (requestedVideo){
    let html = `
                                <div class="videos-div">
                               <!-- <video src="videos/Night Drive - A Chillwave Mix.mp4" controls></video> -->
                            <img src="${requestedVideo.videoImage}">
                            
    
                                
                            </div>
                            <DIV class="Details">
                                <DIv class="title-div">
                                    ${requestedVideo.videoTitle}
                                </DIv>
                                <DIv class="Subscriptions-likes-dislikes-div">
                                    <div class="Subscriptions-buttons-Div">
                                        <img src="profile pics/channels4_profile.jpg" alt="" class="current-profilepic">
                                        <div>
                                        <div class="chekmarkandthumnail">
                                            <p>${requestedVideo.youtuberName}</p>
                                            <p class="chekmark">&#10003;</p>
                                        </div>
                                            <p class="amountofsubscribers">236K abunəçi</p>
                                        </div>
                                        <button class="SUBSCRIBE-button">Subscribe!</button>
                                    
                                        
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
                                        <div class="Big-text">${requestedVideo.watchData}</div>
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

    function moreDetailsVisibility (){
        if (document.querySelector('.invisible-down').classList.contains('visible')){
            document.querySelector('.invisible-down').classList.remove('visible')
            document.querySelector('.more-details-div').classList.remove('visible-more-details')
        }
        else {
        document.querySelector('.invisible-down').classList.add('visible')
        document.querySelector('.more-details-div').classList.add('visible-more-details')
        
    }}
    document.querySelector('.invisible-down').addEventListener('click' , () => {
        moreDetailsVisibility()
    })
    document.querySelector('.visible-up').addEventListener('click' , () => {
        moreDetailsVisibility()
    })
    document.querySelector('.SUBSCRIBE-button').addEventListener('click' , () => {

        ClassAdderAndRemoverFunction('.SUBSCRIBE-button' , 'ActiveSubscribeButton' , 'youtuberName')
        
        if (document.querySelector('.SUBSCRIBE-button').classList.contains('ActiveSubscribeButton')){
            document.querySelector('.SUBSCRIBE-button').innerHTML = 'Subscribed'
            addToSubscribedYoutubers(requestedVideo.youtuberName)
            let newList = SubscribedAddList(requestedVideo.youtuberName , allVideoData)
            console.log(newList)
            
        }
        else {
            document.querySelector('.SUBSCRIBE-button').innerHTML = 'Subscribe!'
            RemoveToSubscribedYoutubers(requestedVideo.youtuberName , allVideoData)
            let newListremove = SubscribedAddList(requestedVideo.youtuberName , allVideoData)
            console.log(newListremove)


        }


    })
    
}


//document.querySelector('.vido-main').innerHTML = renderVideoAndComment()