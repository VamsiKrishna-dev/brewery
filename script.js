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

const searchIcon = searchForm.appendChild(document.createElement('ion-icon'));
searchIcon.setAttribute('name', 'search');

const searchInfo = container.appendChild(document.createElement('p'));
searchInfo.setAttribute('class', 'search-info');
searchInfo.innerText = 'Search by Name, Type or City';

const searchResult = container.appendChild(document.createElement('div'));
searchResult.setAttribute('class', 'search-result');

// Search Result
function search_result(num){

const item = searchResult.appendChild(document.createElement('div'));
item.setAttribute('class', 'item');

const itemImg = item.appendChild(document.createElement('img'));
itemImg.setAttribute('class', 'item-img');


const flexContainer = item.appendChild(document.createElement('div'));
flexContainer.setAttribute('class', 'flex-container');

const title = flexContainer.appendChild(document.createElement('h2'));
title.setAttribute('class', 'title');
title.innerText = 'Title';

const brewery_type = flexContainer.appendChild(document.createElement('p'));
brewery_type.setAttribute('class', 'brewery_type');
brewery_type.innerText = 'Brewery Type';

const brewery_address = flexContainer.appendChild(document.createElement('p'));
brewery_type.setAttribute('class', 'brewery_addrress');
brewery_address.innerText = 'Brewery Address';

const brewery_phone = flexContainer.appendChild(document.createElement('p'));
brewery_type.setAttribute('class', 'brewery_phone');
brewery_phone.innerText = 'Brewery Phone';

const brewery_website = flexContainer.appendChild(document.createElement('p'));
brewery_type.setAttribute('class', 'brewery_website');
brewery_website.innerText = 'Brewery Website';
}

for(let i = 0; i < 10; i++){
  search_result(i);
}