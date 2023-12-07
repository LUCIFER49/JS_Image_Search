const accessKey = "DRNHOij05W_Ln1VNeXke--tIQll4dqwmRk9AFvnfPOA";

const formEle = document.querySelector("form")
const inputEle = document.getElementById("search-input")
const searchResult = document.querySelector(".search-results")   // if using className always put '.' before its name
const showMoreBtn = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImages() {
    inputData = inputEle.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if(page === 1) {
        searchResult.innerHTML = ""
    }

    results.map((results) => {
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add('search-result')
        const image = document.createElement('img')
        image.src = results.url
    })
}