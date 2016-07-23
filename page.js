// This script gets loaded when the page that matches the regular expression in manifest.json gets loaded too.
// TODO: Send a message to background.js (which is the supreme communicator channel) to say, "Hey, show the page action, this page matches our criteria."


// This script will also listen for a message from the popup (which is part of the page action).
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // TODO: Validate the message structure, scrape the Airbnb page for the location / city of the listing and then execute the callback function with the appropriate information
    }
);