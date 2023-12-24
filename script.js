const accessKey = "DRNHOij05W_Ln1VNeXke--tIQll4dqwmRk9AFvnfPOA";

const formEle = document.querySelector("form");
const inputEle = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results"); // if using className always put '.' before its name
const showMoreBtn = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputEle.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);          //for fetching images from unsplash
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    // FOR appending changes in HTML page
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResult.appendChild(imageWrapper);
  });

  page++;
  if (page > 1) {
    showMoreBtn.style.display = "block";
  }
}

formEle.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
    searchImages();
  });
