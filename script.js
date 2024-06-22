// Developed by= MOEKETSI JUNIOR SILLO

const accessKey = "YkPShrunYqDBzogDvA7fm6K1Ru8h_6pD9Jg53Aw9IFk";

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = "";
let page = 1;

async function searchImages() {
   keyword = searchInput.value;
   const url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${accessKey}&page=${page}&per_page=30`;

   const response = await fetch(url);
   const data = await response.json();

   if(page === 1) { 
      searchResult.innerHTML = "";
   }

    const results = data.results;
    results.map((result) => {
    const img = document.createElement('img');
    img.src = result.urls.small;
    const imagelink = document.createElement('a');
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.appendChild(img);
    searchResult.appendChild(imagelink);
})

   showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', (event) => {
   event.preventDefault();
   page = 1;
   searchImages();
});

showMoreBtn.addEventListener('click', () => {
   page++;
   searchImages();
})