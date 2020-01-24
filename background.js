alert("hi");

function MyGenericClick(info, tab){
    console.log("Clicked on page", info, tab);
}

function MyImageClick(info, tab){
    console.log("Clicked an image", info, tab);
}


chrome.contextMenus.create({
    "title": "Share",
    "context": ["page"],
    "onclick": MyGenericClick
})

chrome.contextMenus.create({
    "title": "Share Image",
    "context": ["image"],
    "onclick": MyImageClick
})