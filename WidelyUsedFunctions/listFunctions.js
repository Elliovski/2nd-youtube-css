import { allVideoData } from "../data/allVideoData.js"

export let SubscribedYoutubers = JSON.parse(localStorage.getItem("SubscribedYoutubers")) || []
export let SubscribedYoutuberVideoList = JSON.parse(localStorage.getItem('SubscribedYoutuberVideoList')) ||[]

export let LikedVideos = JSON.parse(localStorage.getItem("LikedVideos")) || []
export let LikedVideosId = JSON.parse(localStorage.getItem("LikedVideosId")) || []


export function saveToStorageTheSubscribe (){
    localStorage.setItem('SubscribedYoutubers',JSON.stringify(SubscribedYoutubers))
    localStorage.setItem('SubscribedYoutuberVideoList',JSON.stringify(SubscribedYoutuberVideoList))
}

export function saveToStorageTheLikedVideos (){
    localStorage.setItem('LikedVideos',JSON.stringify(LikedVideos))
    localStorage.setItem('LikedVideosId',JSON.stringify(LikedVideosId))
}

export function addToSubscribedYoutubers (nameOfYoutuber){
    
    if (SubscribedYoutubers.includes(nameOfYoutuber)){}
    else {
        SubscribedYoutubers.push(nameOfYoutuber)
    }
    saveToStorageTheSubscribe()
    console.log('addToSubcribe')
}

export function RemoveToSubscribedYoutubers (nameOfYoutuber ,prewiousList){
    
    if (SubscribedYoutubers.includes(nameOfYoutuber)){
        let index = SubscribedYoutubers.indexOf(nameOfYoutuber)
         SubscribedYoutubers.splice(index , 1)
         
    }
    /*prewiousList.forEach((listItem) => {
        if (listItem.youtuberName === nameOfYoutuber){
            SubscribedYoutuberVideoList.pop(listItem)
        }
    })*/
    
    console.log('RemoveSubcribe')
    saveToStorageTheSubscribe()
}



export function SubscribedAddList(idOrName ,prewiousList){


    console.log('listCreatorThatIncludes working')


        SubscribedYoutuberVideoList = []
    allVideoData.forEach((VideoData) => {
        SubscribedYoutubers.forEach((Youtuber) => {
              if (VideoData.youtuberName === Youtuber){
                  SubscribedYoutuberVideoList.push(VideoData)
              }
        })  
      })

    saveToStorageTheSubscribe()



    return SubscribedYoutuberVideoList;
    
}

export function organizeSubscribedVideos (){
    allVideoData.forEach((VideoData) => {
      SubscribedYoutubers.forEach((Youtuber) => {
            if (VideoData.youtuberName === Youtuber){
                SubscribedYoutuberVideoList.push(VideoData)
            }
      })  
    })
}
//////////////


export function addToLikedVideos (Video){
    
    if (LikedVideos.includes(Video)){}
    else {LikedVideos.push(Video)}

    console.log(LikedVideos)
    console.log('addToLikedVideos')
    saveToStorageTheLikedVideos()
}

export function RemoveFromLikedVideos (Video){
    
    let index = LikedVideos.indexOf(Video)

    LikedVideos.splice(index, 1)
        
    console.log(LikedVideos)
    console.log('RemoveLikedVideo')
    saveToStorageTheLikedVideos()
}




