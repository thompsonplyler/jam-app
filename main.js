console.log("I am connected!")
document.addEventListener("DOMContentLoaded", async function(){
    const base = "https://poetrydb.org/"
    let poemOTD = await fetch(`${base}/random/1`)
    poemOTD = await poemOTD.json()
    console.log(poemOTD)
    const [data] = poemOTD

    renderPoemOTD(data);
})

function renderPoemOTD({title, author, lines, linecount}){
    
    // Get the poem section from the dom 
    const poemContainer = document.querySelector('.poem-container')
    // Create an h1 for the title
    const poemTitle = document.createElement("h1")
    poemTitle.innerText = title
    // Create an h2 for the Author
    const poemAuthor = document.createElement("h2")
    poemAuthor.innerText = author
    // Create an h3 for the line count
    const poemLineCount = document.createElement("h3")
    poemLineCount.innerText = `Line count: ${linecount}`

    poemContainer.append(poemTitle, poemAuthor, poemLineCount)
    // Create a p tag for the lines
    lines.forEach(line => {
        const poemLine = document.createElement("p")
        poemLine.innerText = line
        poemContainer.append(poemLine)
    });
}