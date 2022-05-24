// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

var NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
    }).addTo(map); ;
var JusticeMap_hispanic = L.tileLayer('https://www.justicemap.org/tile/{size}/hispanic/{z}/{x}/{y}.png', {
        attribution: '<a href="http://www.justicemap.org/terms.php">Justice Map</a>',
        size: 'county',
        bounds: [[14, -180], [72, -56]]
    }).addTo(map); ;
var WaymarkedTrails_mtb = L.tileLayer('https://tile.waymarkedtrails.org/mtb/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }).addTo(map); ;

// create a function to add markers
function addMarker(data){
    L.marker([data['lat'],data['lng']]).addTo(map).bindPopup(`<h2>${data['What\'s your favorite sweet eat restaurant/shop?']}</h2> <h3>${data['What\'s your favorite thing to order there and why?']}</h3>`)
    createButtons(data['lat'],data['lng'],data['What\'s your favorite sweet eat restaurant/shop?'])
    return data.Location
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}


const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQoGgOt8z2HPmuRnyD743KwwtC4GuZAhFYUMcCE9iCH5Cy7VlIPcdWZFX0loR0Zk5nBhit2969KKYqB/pub?output=csv"

function loadData(url){
    Papa.parse(dataUrl, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
}

// we will put this comment to remember to call our function later!
loadData(dataUrl)
