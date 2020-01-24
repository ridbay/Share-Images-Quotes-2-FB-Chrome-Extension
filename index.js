console.log("My extension is running")
alert("Loaded")

var dom = document.getElementById("rso");
// console.log("The dom is", dom.innerHTML);

var links = document.getElementsByClassName("r");


for(let i = 0; i < links.length; i++){
    let title = links[i].getElementsByTagName("h3");
    console.log("Link is", title[0]);
}