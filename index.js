console.log("My extension is running")
alert("Loaded")


var links = document.getElementsByTagName("a");


for(let i = 0; i < links.length; i++){
    let title = links[i].innerHTML;
    console.log("Link is", title[0]);
}