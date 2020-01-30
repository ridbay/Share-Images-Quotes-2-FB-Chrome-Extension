

console.log("My extension is running")


var links = document.getElementsByTagName("a");

var formatted_links = [];


for (let i = 0; i < links.length; i++) {
    // let title = links[i].innerHTML;
    let title = links[i].text;
    let href = links[i].href;
    // console.log("Link is", title);

    if (title !== "" && href !== "") {
        formatted_links.push({ title: title, href: href })
    }
}

chrome.runtime.sendMessage({
    "action": "print_messages",
    "data": formatted_links
}, res => {
    console.log(res)
}
)