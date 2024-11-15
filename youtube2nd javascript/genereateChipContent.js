import { allVideoData } from "../data/allVideoData.js"
import { renderVideos } from "./generateVideos.js"


let ChipContents = [
    {
        id : "Hamisi",
        InsideOfChipContent : "Hamisi" ,
    },
    {
        id : "Musiq",
        InsideOfChipContent : "Musiq" ,
    },
    {
        id : "Canli",
        InsideOfChipContent : "Canli" ,
    },
    {
        id : "Oyunlar",
        InsideOfChipContent : "Oyunlar" ,
    }
]

document.querySelectorAll('.one-chip-content')


export function genereateChipContent (){
    let html = ``
    ChipContents.forEach((ChipContents) => {
        html += `<DIv class="one-chip-content" id="${ChipContents.id}">
            
                ${ChipContents.InsideOfChipContent}
            
        </DIv>`
    })
    document.querySelector('.chip-content-all').innerHTML = html


    document.querySelectorAll('.one-chip-content')[0].classList.add('active-chip-content')
    document.querySelectorAll('.one-chip-content').forEach((oneChip) => {
        oneChip.addEventListener('click' , () =>{
            //console.log(document.querySelectorAll('.one-chip-content'))

            document.querySelectorAll('.one-chip-content').forEach((oneChipClass) => {
                oneChipClass.classList.remove('active-chip-content')
            });

            oneChip.classList.add('active-chip-content')

            })
        })

        document.querySelectorAll('.one-chip-content').forEach((oneChip) => {
            oneChip.addEventListener('click', () => {
                let wantedList = []

                if (oneChip.id === "Hamisi"){
                    allVideoData.forEach((videoData) => {
                        wantedList.push(videoData)
                    })
                }
                else {
                    let wantedContent = String(oneChip.id)
                    console.log(wantedContent)
                    allVideoData.forEach((videoData) =>{
                    
                        if (String(videoData.chipContent) === String(wantedContent)){

                            wantedList.push(videoData)

                        }
                    })
                }
                renderVideos(wantedList)
            })
        })
    }
