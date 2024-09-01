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
                                                                                                        ///youtubevideopage/youtubevideopage.html
    allVideoData.forEach((videoData) => {
        html += `<a class="one-video-div js-one-video-div-${videoData.videoId}" id = "${videoData.videoId}"  href="/youtubevideopage/youtubevideopage.html"  target="_blank" >
                    <DIv class="the-video-div">                                                                     
                        <img src="${videoData.videoImage}" alt="" class="the-video">
        
                    </DIv>
                    <DIv class="all-else-div">
                        <Div class="profilepicdiv"><img src="${videoData.profilePic}" alt="" class="profilepic"></Div>
                        <Div class="video-stats-div">
                            <div class="title ">${videoData.videoTitle}</div>
                            <div class="youtuber-name ">${videoData.youtuberName}</div>
                            <div class="watch ">${videoData.watchData}</div>
                        </Div>
        
                    </Div>
        </a>`
    });
    document.querySelector('.main').innerHTML = html

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
    
    
