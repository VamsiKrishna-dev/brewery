// HTML elements
var body = document.body



// HTML page
const section = body.appendChild(document.createElement('section'))

const container = document.createElement('div')
container.setAttribute('class', 'container');
section.append(container)

const Brand = container.appendChild(document.createElement('h1'));
Brand.innerText = 'Near Brew';

const searchForm = container.appendChild(document.createElement('form'));
searchForm.setAttribute('class', 'search-form');

const searchInput = searchForm.appendChild(document.createElement('input'));
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search Your Brew');

// const searchIcon = searchForm.appendChild(document.createElement('ion-icon'));
// searchIcon.setAttribute('name', 'search');

const searchButton = searchForm.appendChild(document.createElement('button'));
searchButton.setAttribute('class', 'search-button');
searchButton.innerText = 'Search';
let searchQuery = "";
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  searchQuery = searchInput.value+ "&per_page=50";
  console.log(searchQuery);
  get_brewery();});



const searchInfo = container.appendChild(document.createElement('p'));
searchInfo.setAttribute('class', 'search-info');
searchInfo.innerText = 'Search by Name, Type or City';

const searchResult = container.appendChild(document.createElement('div'));
searchResult.setAttribute('class', 'search-result');

// ASYNC FUNCTION
async function get_brewery() {
  const url = `https://api.openbrewerydb.org/breweries/search?query=${searchQuery}`;
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(brewery => {
    const item = searchResult.appendChild(document.createElement('div'));
    item.setAttribute('class', 'item');

    const itemImg = item.appendChild(document.createElement('img'));
    itemImg.setAttribute('class', 'item-img');
    itemImg.setAttribute('src', "./assets/logo (2).jpg");


    const flexContainer = item.appendChild(document.createElement('div'));
    flexContainer.setAttribute('class', 'flex-container');

    const title = flexContainer.appendChild(document.createElement('h2'));
    title.setAttribute('class', 'title');
    title.innerText = brewery.name;

    const brewery_type = flexContainer.appendChild(document.createElement('p'));
    brewery_type.setAttribute('class', 'brewery_type');
    brewery_type.innerText = brewery.brewery_type;

    const brewery_address = flexContainer.appendChild(document.createElement('p'));
    brewery_type.setAttribute('class', 'brewery_addrress');
    brewery_address.innerText = brewery.city;
    if (brewery.address) {
      console.log(brewery.city);
      brewery_address.innerText = brewery.street;
    } else if (brewery.street == null) {
      brewery_address.innerText = brewery.city;
    }

    const brewery_phone = flexContainer.appendChild(document.createElement('p'));
    brewery_type.setAttribute('class', 'brewery_phone');
    brewery_phone.innerText = brewery.phone;

    const brewery_website = flexContainer.appendChild(document.createElement('a'));
    brewery_type.setAttribute('class', 'brewery_website');
    if (brewery.website_url) {
      brewery_website.setAttribute('href', brewery.website_url);
    } else {
      brewery_website.setAttribute('alt', 'No Website');
    }
  });
}
// const temp1 = document.querySelector("form");
// let searchQuery = "";
// temp1.addEventListener("submit", (e) => {
//   e.preventDefault();
//   searchQuery = e.target.querySelector("input").value;
//   get_brewery();
// });