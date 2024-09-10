import { allVideoData } from "../data/allVideoData.js";



export function findWantedVideo (wantedVideoId){
    let matchingVideo ;
    allVideoData.forEach((videoData) => {
        if( wantedVideoId === videoData.videoId){
            //console.log(videoData.videoId)
            matchingVideo = videoData
        }
    })
    console.log(matchingVideo)
    return matchingVideo;
}

export let wantedVideo = JSON.parse(localStorage.getItem('wantedVideo')) ||[{
    id : '12WTLsaasd'
},]

export function saveToStorage (){
    localStorage.setItem('wantedVideo',JSON.stringify(wantedVideo))
}
saveToStorage()


export function renderVideos(allVideoData){
    let html = ``

    allVideoData.forEach((videoData) => {
        html += `<a class="one-Liked-Video" href="/youtubevideopage/youtubevideopage.html" target="_blank">
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

    document.querySelectorAll('.one-video-div').forEach((oneVideo) => {
        oneVideo.addEventListener('click' , () => {
            
            console.log('addEventListenerIsWorking')
            
            
            wantedVideo= {
                id : String(oneVideo.id)
            }
            
            
            console.log(wantedVideo)
            saveToStorage()
            findWantedVideo(wantedVideo.id)
            
        })});
    }
    
    
