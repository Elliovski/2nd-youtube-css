import { nextVideoGeneraeAndInteract } from "./nextVideoGenerateAndInterreact.js";
import { renderVideoAndComment } from "./videoandCommentsGenerate.js";
import { leftSidebarInterreact } from "./left-sidebar.js";
import { findWantedVideo , wantedVideo} from "../../youtube2nd javascript/generateVideos.js";
import { HistoryOfVideos ,addToHistoryOfVideos } from "./recordHistory.js";

export let requestedVideo = findWantedVideo(wantedVideo.id)
console.log(requestedVideo)
renderVideoAndComment(requestedVideo)
leftSidebarInterreact()
nextVideoGeneraeAndInteract()

addToHistoryOfVideos(requestedVideo)