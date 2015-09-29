//Insert a pop up of a html page.
$(document).ready(function() {
  if ($("#synctext").length > 0) {
    $("#synctext").remove();
  } else {
    // Grab the body tag and insert SyncText's pop up html
    chrome.extension.sendRequest({cmd: "popupHtml"}, function(popup){
      // Show the popup text box
      $("body").append(popup);
      // Read the saved text from chrome storage and populate if exists
      chrome.storage.sync.get(['synctextSavedText'], function(items) {
        console.log("found text!");
        if (items['synctextSavedText'])
            $("#st-input").html(items['synctextSavedText']);
      });

      // Listen to the "sync" button
      $("#st-sync").click(function() {
        // Save the current text
        var currentText = $("#st-input").val();
        console.log("saving.." + currentText);
        chrome.storage.sync.set({'synctextSavedText': currentText});
      });
    });
  }
});