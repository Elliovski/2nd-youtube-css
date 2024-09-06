import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { stoppedHistory } from '../../2ndYoutubeHistory/youtube2nd javascript/generateHistoryVideos.js';

export let HistoryOfVideos = JSON.parse(localStorage.getItem("HistoryOfVideos")) || []
export let dividedByDates = JSON.parse(localStorage.getItem("dividedByDates")) || []



export function saveToStorageTheHistory (){
    
    localStorage.setItem('HistoryOfVideos',JSON.stringify(HistoryOfVideos))
    localStorage.setItem('dividedByDates',JSON.stringify(dividedByDates))
}
function dvideByDates (){

    console.log('dvideBydatesWorking')
    saveToStorageTheHistory()
    
    HistoryOfVideos.forEach((video) => {
      let thereIsmatchingDate ;
      dividedByDates.forEach((date) => {
        if (String(date.dateOfWatch) === String(video.dateOfWatch)){
            thereIsmatchingDate = true
        }})
        if (thereIsmatchingDate != true) {
            dividedByDates.unshift(video)
        }
    })
    console.log('dividedByDates')
    console.log(dividedByDates)
}

export function addToHistoryOfVideos (Video){

    if (stoppedHistory){
        console.log('history is stopped')
    }
    else {
        dvideByDates()
    
    
        HistoryOfVideos.unshift(Video)
        saveToStorageTheHistory()
    
        console.log('HistoryOfVideos')
        console.log(HistoryOfVideos)
    }


    }
    




function deleteAllHistory (){
    HistoryOfVideos = []
    saveToStorageTheHistory()
    console.log(HistoryOfVideos)
}



//deleteAllHistory()