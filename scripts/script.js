const checkbox = document.getElementById('checkbox')


checkbox.onchange = ()=>{

    let value= checkbox.checked

    chrome.storage.local.set({'youtubedetox': value});
    chrome.storage.local.get(['youtubedetox'],console.log)
}