import { allVideoData } from "../data/allVideoData.js"

export let SubscribedYoutubers = JSON.parse(localStorage.getItem("SubscribedYoutubers")) || []
export let SubscribedYoutuberVideoList = JSON.parse(localStorage.getItem('SubscribedYoutuberVideoList')) ||[]


export function saveToStorageTheSubscribe (){
    localStorage.setItem('SubscribedYoutubers',JSON.stringify(SubscribedYoutubers))
    localStorage.setItem('SubscribedYoutuberVideoList',JSON.stringify(SubscribedYoutuberVideoList))
}

export function addToSubscribedYoutubers (nameOfYoutuber){
    
    if (SubscribedYoutubers.includes(nameOfYoutuber)){}
    else {
        SubscribedYoutubers.push(nameOfYoutuber)
    }
    saveToStorageTheSubscribe()
    console.log('addToSubcribe')
    console.log(SubscribedYoutubers)
    console.log(SubscribedYoutuberVideoList)
}

export function RemoveToSubscribedYoutubers (nameOfYoutuber ,prewiousList){
    
    if (SubscribedYoutubers.includes(nameOfYoutuber)){
        console.log(nameOfYoutuber)
        let index = SubscribedYoutubers.indexOf(nameOfYoutuber)
        console.log(index)
         SubscribedYoutubers.splice(index , 1)
         
    }
    /*prewiousList.forEach((listItem) => {
        if (listItem.youtuberName === nameOfYoutuber){
            SubscribedYoutuberVideoList.pop(listItem)
        }
    })*/
    
    console.log('RemoveSubcribe')
    console.log(SubscribedYoutubers)
    console.log(SubscribedYoutuberVideoList)
    saveToStorageTheSubscribe()
}


console.log(SubscribedYoutubers)
console.log(SubscribedYoutuberVideoList)



export function SubscribedAddList(idOrName ,prewiousList){


    console.log('listCreatorThatIncludes working')

   // if (SubscribedYoutubers.includes(idOrName) ){}
    
    /*else {
        
        prewiousList.forEach((listItem) => {


            if (listItem.youtuberName === idOrName){
                SubscribedYoutuberVideoList.push(listItem)
            }
        })
    }*/

        SubscribedYoutuberVideoList = []
    allVideoData.forEach((VideoData) => {
        SubscribedYoutubers.forEach((Youtuber) => {
              if (VideoData.youtuberName === Youtuber){
                  SubscribedYoutuberVideoList.push(VideoData)
              }
        })  
      })

      console.log(SubscribedYoutuberVideoList)
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