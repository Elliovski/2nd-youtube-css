
import { allVideoData } from "../../data/allVideoData.js";
import { findWantedVideo, saveToStorage, wantedVideo } from "../../youtube2nd javascript/generateVideos.js";
import { requestedVideo , renderVideoAndComment } from "./videoandCommentsGenerate.js";
import { HistoryOfVideos,addToHistoryOfVideos } from "./recordHistory.js";
import { shuffleTheListFunction } from "../../WidelyUsedFunctions/listFunctions.js";

export function changeTheWantedVideoId(oneVideo){
    console.log("Object.keys(wantedVideo)")
    console.log(Object.keys(wantedVideo))
    console.log(wantedVideo.id)
    Object.keys(wantedVideo).forEach((key) => {
        console.log("Object.key() is working")
        if (wantedVideo[key] = 'id'){
            wantedVideo[key] = oneVideo.id
        }
        else{
            console.log('else')
        }
    })
    console.log("Object.keys(wantedVideo)")
    console.log(Object.keys(wantedVideo))
    console.log(wantedVideo.id)
                
}



saveToStorage()



export function nextVideoGenerateAndInteractWithShuffle (Videos){
    let nextVideoHtml = ``



    let shufled = shuffleTheListFunction(Videos)

    shufled.forEach((videoData) => {
        nextVideoHtml += `
                        <a class="one-NEXTviedo-div js-one-next-video-div-${videoData.videoId}" id = "${videoData.videoId}" href="youtubevideopage.html">
                    
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

            

            let nextVideo = findWantedVideo(oneVideo.id)
            //renderVideoAndComment(nextVideo)

            /*wantedVideo= {
                id : oneVideo.videoId

            }
            console.log(wantedVideo.id)

            findWantedVideo(wantedVideo.id)*/


            
            
            
            console.log(oneVideo)
            
            changeTheWantedVideoId(oneVideo)            
            saveToStorage()
            findWantedVideo(oneVideo.id)
           //addToHistoryOfVideos(findWantedVideo(oneVideo.id))
    
        })}
    );
        }

