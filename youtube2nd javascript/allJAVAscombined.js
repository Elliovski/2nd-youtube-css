import { allVideoData } from "../data/allVideoData.js";
import { renderVideos } from "./generateVideos.js";
import { leftSidebarInterreact } from "../youtubevideopage/youtubeVideoPage.javascript/left-sidebar.js";
import { genereateChipContent } from "./genereateChipContent.js";


genereateChipContent()
renderVideos(allVideoData)



    