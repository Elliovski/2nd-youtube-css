import { nextVideoGeneraeAndInteract } from "./nextVideoGenerateAndInterreact.js";
import { renderVideoAndComment } from "./videoandCommentsGenerate.js";
import { leftSidebarInterreact } from "./left-sidebar.js";
import { findWantedVideo , wantedVideo} from "../../youtube2nd javascript/generateVideos.js";

export let requestedVideo = findWantedVideo(wantedVideo.id)
renderVideoAndComment(requestedVideo)
leftSidebarInterreact()
nextVideoGeneraeAndInteract()
