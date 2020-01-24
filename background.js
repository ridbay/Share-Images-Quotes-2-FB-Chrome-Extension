alert("hi");

const MyGenericClick=(info, tab)=> {
    console.log("Clicked on page", info, tab);
}

const MyImageClick = (info, tab)=> {
    console.log("Clicked an image", info, tab);
}


chrome.contextMenus.create({
    "title": "Share",
    "contexts": ["page"],
    "onclick": MyGenericClick
})

chrome.contextMenus.create({
    "title": "Share Image",
    "contexts": ["image"],
    "onclick": MyImageClick
})