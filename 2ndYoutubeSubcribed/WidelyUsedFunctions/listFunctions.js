let SubscribedYoutubers = []
let SubscribedYoutuberVideoList = []


/*export function saveToStorage (){
    localStorage.setItem('wantedVideo',JSON.stringify(wantedVideo))
}*/

export function addToSubscribedYoutubers (nameOfYoutuber){
    
    if (SubscribedYoutubers.includes(nameOfYoutuber)){}
    else {
        SubscribedYoutubers.push(nameOfYoutuber)
    }
    console.log(SubscribedYoutubers)
}

export function SubscribedAddList(idOrName ,prewiousList){

    console.log('listCreatorThatIncludes working')

    if (SubscribedYoutubers.includes(idOrName) ){}
    else {
        
        prewiousList.forEach((listItem) => {
            if (listItem.youtuberName === idOrName){
                SubscribedYoutuberVideoList.push(listItem)
            }
        })
    }
    return SubscribedYoutuberVideoList;
}