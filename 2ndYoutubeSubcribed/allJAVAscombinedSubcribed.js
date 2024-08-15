import { allVideoData } from "../data/allVideoData.js";
import { renderVideos } from "../youtube2nd javascript/generateVideos.js";
import { sideBarFunction } from "../youtube2nd javascript/sidebar.js";
import { genereateChipContent } from "../youtube2nd javascript/genereateChipContent.js";


genereateChipContent()
sideBarFunction()
renderVideos(allVideoData)



    