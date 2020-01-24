console.log("My extension is running")
alert("Loaded")

var dom = document.getElementById("rso");
console.log("The dom is", dom.innerHTML);

var links = document.getElementsByClassName("main");

for(let i = 0; i < links[i].length; i++){
    let title = links[i].getElementsByTagName("h3");
    console.log("Link is", title[0])
}