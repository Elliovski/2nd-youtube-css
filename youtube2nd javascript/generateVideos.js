import {allVideoData } from "../data/allVideoData.js";

export function renderVideos(){
    let html = ``

    allVideoData.forEach((videoData) => {
        html += `<DIv class="one-video-div">
                    <DIv class="the-video-div">
                        <img src="${videoData.videoImage}" alt="" class="the-video">
        
                    </DIv>
                    <DIv class="all-else-div">
                        <Div class="profilepicdiv"><img src="${videoData.profilePic}" alt="" class="profilepic"></Div>
                        <Div class="video-stats-div">
                            <div class="title">${videoData.videoTitle}</Div>
                            <div class="youtuber-name">${videoData.youtuberName}</div>
                            <div class="watch">${videoData.watchData}</Div>
                        </Div>
        
                    </Div>
        </DIv>`
    });
    document.querySelector('.main').innerHTML = html
}
