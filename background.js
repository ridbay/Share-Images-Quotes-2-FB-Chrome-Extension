alert("hi");

function MyGenericClick(info, tab){
    console.log("Clicked on page", info, tab);
}
chrome.contextmenus.create({
    "title": "Share",
    "onclick": MyGenericClick
})