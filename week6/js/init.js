// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);


// Add an object to save markers
let markers = {};

let circleOptions = {
    radius: 8,
    fillColor: "#f1c6d9",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.5
}

// create a function to add markers
function addMarker(data){
    const sweetLocation = data['What\'s your favorite sweet eat restaurant/shop?'];
    const order = data['What\'s your favorite thing to order there and why?'];
    markers[sweetLocation] = L.circleMarker([data.lat,data.lng], circleOptions).addTo(map).bindPopup(`<h2>${sweetLocation}</h2> <h3>${order}</h3>`)
    createButtons(data.lat,data.lng,sweetLocation)

    // if (blah == blah){
    //     circleOptions.fillColor = bleh
    // }
    // else{
    //     circleOptions.fillColor = blah
    // }
    // https://stackoverflow.com/questions/25683871/assign-id-to-marker-in-leaflet    
    markers[sweetLocation]._id = sweetLocation;
    return data.Location
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], 8);

        markers[title].openPopup();
    })
    console.log(markers[title])
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
