// HTML elements
var body = document.body



//body
const navigation = body.appendChild(document.createElement('div'));
navigation.setAttribute('class', 'navigation');

const navWrapper = navigation.appendChild(document.createElement('div'));
navWrapper.setAttribute('class', 'nav-wrapper');

const navAnchor = navWrapper.appendChild(document.createElement('a'));
navAnchor.setAttribute('href', './index.html');
navAnchor.setAttribute('class', 'brand-logo');



const navIcon = navAnchor.appendChild(document.createElement('img'));
navIcon.setAttribute("src", './assets/nearbrew.gif');
navIcon.setAttribute("alt", 'Beer Icon');
navIcon.setAttribute("class", 'nav-icon');

const navListWrapper = navWrapper.appendChild(document.createElement('div'));
navListWrapper.setAttribute('class', 'nav-list-wrapper');

const navListHome = navListWrapper.appendChild(document.createElement('li'));
const navHome = navListHome.appendChild(document.createElement('a'));
navHome.setAttribute('href', './index.html');
navHome.setAttribute('class', 'nav-link');
navHome.innerText = 'Home';

const navListAbout = navListWrapper.appendChild(document.createElement('li'));
const navAbout = navListAbout.appendChild(document.createElement('a'));
navAbout.setAttribute('href', './about.html');
navAbout.setAttribute('class', 'nav-link');
navAbout.innerText = 'About';

const navListContact = navListWrapper.appendChild(document.createElement('li'));
const navContact = navListContact.appendChild(document.createElement('a'));
navContact.setAttribute('href', 'https://www.linkedin.com/in/evaturivk/');
navContact.setAttribute('class', 'nav-link');
navContact.setAttribute('target', '_blank');
navContact.innerText = 'Contact';


const section = body.appendChild(document.createElement('section'))

const container = document.createElement('div')
container.setAttribute('class', 'container');
section.append(container)

let searchQuery = "";
const searchForm = container.appendChild(document.createElement('form'));
searchForm.setAttribute('class', 'search-form');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = searchInput.value;
    console.log(searchQuery);
    get_brewery();
})



const searchInput = searchForm.appendChild(document.createElement('input'));
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search Your Brew');

const searchButton = searchForm.appendChild(document.createElement('button'));
searchButton.setAttribute('class', 'search-button');
searchButton.setAttribute('type', 'submit');

const searchIcon = searchButton.appendChild(document.createElement('img'));
searchIcon.setAttribute('src', './assets/search-circle-outline.svg');
searchIcon.setAttribute('id', 'search-circle-outline');

const searchInfo = container.appendChild(document.createElement('p'));
searchInfo.setAttribute('class', 'search-info');
searchInfo.innerText = 'Search a Brewery by Name, Type or City';

const searchResult = container.appendChild(document.createElement('div'));
searchResult.setAttribute('class', 'search-result');



// ASYNC FUNCTION
async function get_brewery() {
    const url = `https://api.openbrewerydb.org/breweries/search?query=${searchQuery}+ "&per_page=50"`;
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(brewery => {
        const item = searchResult.appendChild(document.createElement('div'));
        item.setAttribute('class', 'item');

        //Random image picker
        var imageList = new Array("./assets/sampleLogo1.jpg", "./assets/sampleLogo2.jpg", "./assets/sampleLogo3.jpg", "./assets/sampleLogo4.jpg", "./assets/sampleLogo5.jpg", "./assets/sampleLogo6.jpg", "./assets/sampleLogo7.jpg");
        var randomNumber = Math.floor(Math.random() * imageList.length);
        var randomImage = imageList[randomNumber];

        const itemImg = item.appendChild(document.createElement('img'));
        itemImg.setAttribute('class', 'item-img');
        itemImg.setAttribute('src', randomImage);


        const flexContainer = item.appendChild(document.createElement('div'));
        flexContainer.setAttribute('class', 'flex-container');

        const title = flexContainer.appendChild(document.createElement('h2'));
        title.setAttribute('class', 'title');
        title.innerText = brewery.name;

        const brewery_type = flexContainer.appendChild(document.createElement('p'));
        brewery_type.setAttribute('class', 'brewery_type');
        brewery_type.innerText = "Brewery Type: " + brewery.brewery_type;

        const brewery_address = flexContainer.appendChild(document.createElement('p'));
        brewery_type.setAttribute('class', 'brewery_addrress');
        //brewery_address.innerText = "City:" + " "+ brewery.city;
        if (brewery.street) {
            brewery_address.innerText = "Address: " + brewery.street;
        } else if (brewery.street == null) {
            brewery_address.innerText = brewery.city;
        }

        const brewery_phone = flexContainer.appendChild(document.createElement('p'));
        brewery_type.setAttribute('class', 'brewery_phone');
        if (brewery.phone) {
            brewery_phone.innerText = brewery.phone;
        } else {
            brewery_phone.innerText = "No Phone Number";
            brewery_phone.setAttribute('Style', 'color: #ffffff');
        }

        const brewery_website = flexContainer.appendChild(document.createElement('a'));
        brewery_type.setAttribute('class', 'brewery_website');
        if (brewery.website_url != null) {
            brewery_website.setAttribute('href', brewery.website_url);
            brewery_website.innerText = "Website";
        } else {
            brewery_website.setAttribute('alt', 'No Website');
            brewery_website.innerText = "No Website";
            brewery_website.setAttribute('Style', 'color: #ffffff');
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