import { nextVideoGenerateAndInteractWithShuffle } from "./nextVideoGenerateAndInterreact.js";
import { renderVideoAndComment } from "./videoandCommentsGenerate.js";
import { leftSidebarInterreact } from "./left-sidebar.js";
import { findWantedVideo , wantedVideo} from "../../youtube2nd javascript/generateVideos.js";
import { HistoryOfVideos ,addToHistoryOfVideos } from "./recordHistory.js";
import { allVideoData } from "../../data/allVideoData.js";

export let requestedVideo = findWantedVideo(wantedVideo.id)
console.log(requestedVideo)
renderVideoAndComment(requestedVideo)
leftSidebarInterreact()
nextVideoGenerateAndInteractWithShuffle(allVideoData)

addToHistoryOfVideos(requestedVideo)