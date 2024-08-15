import { allVideoData } from "../data/allVideoData.js";
import { renderVideos } from "./generateVideos.js";
import { sideBarFunction } from "./sidebar.js";
import { genereateChipContent } from "./genereateChipContent.js";


genereateChipContent()
sideBarFunction()
renderVideos(allVideoData)



    