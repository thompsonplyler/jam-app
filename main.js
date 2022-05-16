console.log("I am connected!")
document.addEventListener("DOMContentLoaded", async function(){
    const base = "https://poetrydb.org/"
    let poemOTD = await fetch(`${base}/random/1`)
    poemOTD = await poemOTD.json()

})