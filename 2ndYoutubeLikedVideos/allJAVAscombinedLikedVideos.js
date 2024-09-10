import { allVideoData } from "../data/allVideoData.js"
import { renderVideos } from "../2ndYoutubeLikedVideos/youtube2nd javascript/generateVideos.js"
import { sideBarFunction } from "../youtube2nd javascript/sidebar.js"
import { genereateChipContent } from "../youtube2nd javascript/genereateChipContent.js"
import { LikedVideos, } from "../WidelyUsedFunctions/listFunctions.js"

/*
import { allVideoData } from "../data/allVideoData.js";
import { renderVideos } from "../youtube2nd javascript/generateVideos.js";
import { sideBarFunction } from "../youtube2nd javascript/sidebar.js";
import { genereateChipContent } from "../youtube2nd javascript/genereateChipContent.js";
*/




sideBarFunction()
console.log("LikedVideos")
console.log(LikedVideos)
renderVideos(LikedVideos)



    