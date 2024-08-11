
import { allVideoData } from "../../data/allVideoData.js";
import { findWantedVideo, wantedVideo , saveToStorage} from "../../youtube2nd javascript/generateVideos.js";
import { requestedVideo , renderVideoAndComment } from "./videoandCommentsGenerate.js";



saveToStorage()



export function nextVideoGeneraeAndInteract (){
    let nextVideoHtml = ``

    allVideoData.forEach((videoData) => {
        nextVideoHtml += `
                        <a class="one-NEXTviedo-div js-one-next-video-div-${videoData.videoId}" id = "${videoData.videoId}" >
                    
                    <div class="thumbnail-div">
                        
                        <img src="${videoData.videoImage}" alt="">
                    </div>
                    <div class="All-else-div">
                        <div class="title-div">
                            
                        </div>
                        
                        <p class="title">${videoData.videoTitle}</P>
                            <p class="info">${videoData.youtuberName}</p>
                            <p class="info">${videoData.watchData}</p>
                        </div>
                    </a>
`
    })




    document.querySelector('.next-videos').innerHTML = nextVideoHtml

    document.querySelectorAll('.one-NEXTviedo-div').forEach((oneVideo) => {
        oneVideo.addEventListener('click' , () => {
            
            console.log('addEventListenerIsWorking')
    
            console.log(wantedVideo)
            let nextVideo = findWantedVideo(oneVideo.id)
            renderVideoAndComment(nextVideo)
            
            

            saveToStorage()
            console.log(wantedVideo)
           findWantedVideo(oneVideo.id)
    
        })}
    );
        }

