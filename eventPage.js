var menuItem = {
    "id": "gila",
    "title": "Gila",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem)

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "Gila" && clickData.selectionText){

    }
})