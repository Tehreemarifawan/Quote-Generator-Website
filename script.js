const apiURL = "https://thequoteshub.com/api/";
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let btn1 = document.querySelector(".btn1");


async function getQuote(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    
    quote.innerText = data.text;
    author.innerText = data.author;

}
getQuote(apiURL);
btn1.addEventListener("click", ()=>{
    getQuote(apiURL);
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + "----by" + author.innerText, "Tweet Window", "width = 600, height= 300")
}
