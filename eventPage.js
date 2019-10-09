
// Creating object for contextMenu.
var mainMenuItem = {
    "id": "gila",
    "title": "Gila",
    "contexts": ["selection"]
};
chrome.contextMenus.create(mainMenuItem);


// Defining the url
let url = new URL("https://translate.yandex.net/api/v1.5/tr.json/translate");
url.searchParams.set('key', 'trnsl.1.1.20191006T201350Z.d91785975c727efa.1963e91caa7e958a6529d5fa6b49160e6211beb4');
url.searchParams.set('lang', 'en-tr');


// Now, we need to add click function for context menu item.
chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId === "gila" && clickData.selectionText) {       // If we click the contextMenu, and there's a selected text
        url.searchParams.set('text', clickData.selectionText);              // We add the word you want to translate, to url.

        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest()

        // Open a new connection, using GET request on the URL endpoint
        request.open("GET", url, true);

        request.onload = function () {
            // Begin accessing JSON data here
            var res = this.responseText;
            var json = JSON.parse(res);
            chrome.notifications.create("", {
                type:    "basic",
                iconUrl: "icons/gorilla48.png",
                title:   "Gila - Translation",
                message: json.text.toString(),
                buttons: [{
                    title: "Yes, get me there"
                }, {
                    title: "Get out of my way",}]
            }, function(id) {
                myNotificationID = id;
            });

            chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
                if (notifId === myNotificationID) {
                    if (btnIdx === 0) {

                    } else if (btnIdx === 1) {

                    }
                }
            });

        };
        // Send request
        request.send()
    }
});
