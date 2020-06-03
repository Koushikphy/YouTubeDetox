// setTimeout(removeThumbnail,2000)
setTimeout(removeContainer,1000)


var dom_observer = new MutationObserver(removeThumbnail);
var container = document.documentElement || document.body;
var config = {   childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true };
dom_observer.observe(container, config);



function removeThumbnail(){ 
    for(let i of document.querySelectorAll('#thumbnail > yt-img-shadow')) i.remove()
    for(let i of document.querySelectorAll('#mouseover-overlay')) i.remove()
}

// doing this just on page load, mutation observer freezes page
function removeContainer(){ // removees the whole video container but you can listen to the music
    for(let i of document.getElementsByClassName('html5-video-container')) i.remove()
    try{
        document.querySelector('#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button').click()
    } catch{
        console.log('here')
    }
}