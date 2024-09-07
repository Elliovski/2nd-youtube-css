import { HistoryOfVideos , addToHistoryOfVideos , dividedByDates , saveToStorageTheHistory} from "../../youtubevideopage/youtubeVideoPage.javascript/recordHistory.js"
import { ClassAdderAndRemoverFunction } from "../WidelyUsedFunctions/classFunctions.js"

export let stoppedHistory = JSON.parse(localStorage.getItem("stoppedHistory")) || false

 //dividedByDates.reverse();
 //HistoryOfVideos.reverse()


export function findAndDeleteFunction (allClass){
    console.log('findAndDeleteFunction working')
    document.querySelectorAll(allClass).forEach((Class) => {
        Class.addEventListener('click', () => {
            let index = Number(Class.id)
            console.log(Class)
            console.log(Number(Class.id))
            console.log(index)
            // it .pop() deletes the last array 

            console.log(HistoryOfVideos[index])
            HistoryOfVideos.splice(index , 1)
            generateHistoryVideosFunction()
            
            //generateHistoryVideosFunction()
            saveToStorageTheHistory()
            })

        })
    }

export function generateHistoryVideosFunction (){
    let dateHtml = ``;
    let videoHtml = ``;
    
    
    
    document.querySelector('.deleteHistoryDIv').addEventListener('click' , () => {
        //HistoryOfVideos = [0] can not work because it creates a new array and HistoryOfVideos is saved to storage from somewhere else 
        HistoryOfVideos.length = 0
        console.log(HistoryOfVideos)
        generateHistoryVideosFunction()
        saveToStorageTheHistory()
    
    })
    

    console.log(dividedByDates)
    console.log(HistoryOfVideos)
    dividedByDates.forEach((date) => {
        dateHtml += `
                <DIV class="One-day-section-history ${String(date.dateOfWatchFull)}" id = ${date.dateOfWatchFull} }>
                    <p>${date.dateOfWatch}</p>
                </DIV>
        `
    })
    document.querySelector('.History').innerHTML = dateHtml

    document.querySelectorAll('.One-day-section-history').forEach((daySection) => {
        let AllHtml = ``
        
        HistoryOfVideos.forEach((video) => {
            if  (video.dateOfWatchFull === daySection.id){
               AllHtml = ` <p> ${video.dateOfWatch} </p>`
               return 
            }

        })
        
        HistoryOfVideos.forEach((video) => {

            if (video.dateOfWatchFull === daySection.id){


                AllHtml += `
                        <DIv class="one-video-div">

                            <Div class="historyVideoImgDiv">
                                <img src='${video.videoImage}' alt="" >
                            </Div>

                            <DIv class="Video-Info-DIv">
                                <DIV class="Video-Info-DIv-Up">
                                    <Div class="Video-Info-DIv-first">
                                        <Div class="Video-Info-DIv-second">
                                            <p class="youtuberNameHistory">${video.videoTitle}</p>
                                            <div class="flexPHistory">
                                                <p class="grey-color">${video.youtuberName}</p>
                                                <p class="chekMark">✓</p>
                                                <p class="grey-color">${video.watchData}</p>
                                            </div>
                                        </Div>
                                    </Div>
                                    <Div class="Video-Info-DIv-third">
                                        <img id = "${HistoryOfVideos.indexOf(video)}" class="xIcon" src="icons - Copy/X icon.png" alt="">
                                        <img src="icons - Copy/3 Dots.png" alt="">
                                    </Div>

                                </DIV>
                                <p class="Despriction-inHistory">AAAAAAAssssssssssssssssssssssssDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDsssssssssssssssssssssssssssAAAAAAAAAAAAA</p>
                            </DIv>    
                    </DIv>`
                
            }});


            daySection.innerHTML = AllHtml  });

            document.querySelector('.stopHistoryDIv').addEventListener('click' , () => {

                console.log(stoppedHistory)
                if (document.querySelector('.stopHistoryDIv').classList.contains("stoppedHistory") || stoppedHistory == true){
                    document.querySelector('.stopHistoryDIv').classList.remove("stoppedHistory")
                    stoppedHistory = false    
                    document.querySelector('.stopHistoryDIv').innerHTML =
                    `
                     <img src="icons - Copy/pause icon.webp" alt=""></img>
                    <p>Baxis tarixcesini qeydiyatina fasile verin </p>`
                }
                else {
                    document.querySelector('.stopHistoryDIv').classList.add("stoppedHistory")
                    stoppedHistory = true
                    document.querySelector('.stopHistoryDIv').innerHTML =
                    `
                    <img src="icons - Copy/pause icon.webp" alt=""></img>
                    <p>Baxis tarixcesini qeydiyatina davam verin </p>`
                }
                console.log(document.querySelector('.stopHistoryDIv').classList)
                console.log(stoppedHistory)
                localStorage.setItem('stoppedHistory',JSON.stringify(stoppedHistory))
                console.log("ClassAdderAndRemoverFunction working")
            })

            

            findAndDeleteFunction('.xIcon')           

            
    


}