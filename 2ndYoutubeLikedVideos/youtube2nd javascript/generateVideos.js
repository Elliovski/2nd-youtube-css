import { allVideoData } from "../data/allVideoData.js";
import { wantedVideo  } from "../../youtube2nd javascript/generateVideos.js";
import { changeTheWantedVideoId } from "../../youtubevideopage/youtubeVideoPage.javascript/nextVideoGenerateAndInterreact.js";
import { saveToStorage } from "../../youtube2nd javascript/generateVideos.js";

saveToStorage()


export function renderVideos(allVideoData){
    let html = ``

    
    console.log(allVideoData[0].videoImage)
    document.querySelector('.PlayAll-img-DIv').innerHTML = `<img src="${allVideoData[0].videoImage}" alt="">`

    allVideoData.forEach((videoData) => {
        html += `<a class="one-Liked-Video" href="/youtubevideopage/youtubevideopage.html" target="_blank" id = "${videoData.videoId}">
                    <Div class="the-index-LikedVideo-Div">
                        ${allVideoData.indexOf(videoData) +1}
                    </Div>
                    <Div class="TheLikedVideo-and-theButton">
                        <Div class="theLikedVideo-and-theInformation">
                            <Div class="theLikedVideo">
                                <img src="${videoData.videoImage}" alt="">
                            </Div>
                                <Div class="theInformation-All">
                                    <div class="informationUp">${videoData.videoTitle}</div>
                                    <div class="informationDown">${videoData.youtuberName} &#x2022 ${videoData.watchData}</div>
                                </Div>
                        </Div>
                        <Div class="control-TheLikedVideo-Button-Div">
                            <div class="control-TheLikedVideo-Button">
                                <img src="icons - Copy/3 Dots.png" alt="">

                            </div>
                        </Div>
                    </Div>
                </a>`
    });
    document.querySelector('.All-Liked-Videos').innerHTML = html

    document.querySelectorAll('.one-Liked-Video').forEach((oneVideo) => {
        oneVideo.addEventListener('click' , () => {
            
            changeTheWantedVideoId(oneVideo)
            console.log('addEventListenerIsWorking')
            console.log(wantedVideo)
            
            
            
            console.log(wantedVideo)
            console.log(oneVideo)
            saveToStorage()
            
            
        })});
    }
    
    
