// Triggerred when the extension's icon
chrome.browserAction.onClicked.addListener(function(tab) { 
    chrome.tabs.executeScript(null, {file: "synctext.js"});
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "popupHtml") {
        $.ajax({
            url: chrome.extension.getURL("synctext.html"),
            dataType: "html",
            success: sendResponse
        });
    }
});