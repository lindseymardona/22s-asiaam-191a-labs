// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 4); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '5361465f5cf044008b9402742068f212',
	maxZoom: 22
}).addTo(map); 


//JavaScript let variable declaration to create a marker
// let marker = L.marker([35.8617, 104.1954]).addTo(map) 
//         .bindPopup('Math Sciences 4328 aka the Technology Sandbox<br> is the lab where I work in ')
//         .openPopup();

// console.log('helloOoOo scary javascript!1!1');

var myIcon = L.icon({
    iconUrl: './images/icon.png',
    iconSize: [63, 54],
    popupAnchor: [3, -10]
});

function add_marker(lat, lng, location, popup){
    L.marker([lat, lng], {
        title: location,
    })
    .addTo(map) 
    .bindPopup(popup)
    .setIcon(myIcon);
}

add_marker(35.8617, 104.1954, 'China', "<h3> China </h3> <img src ='./images/china-flag.png'/ width = 130 height = auto>")
add_marker(22.3193, 114.1694, 'Hong Kong', "<h3> Hong Kong </h3> <img src ='./images/hongkong-flag.png'/ width = 130 height = auto>")
add_marker(36.2048, 138.2529, 'Japan', "<h3> Japan </h3> <img src ='./images/japan-flag.png'/ width = 130 height = auto>")
add_marker(1.3521, 1103.8198, 'Singapore', "<h3> Singapore </h3> <img src ='./images/singapore-flag.png'/ width = 130 height = auto>")
add_marker(0.7893, 113.9213, 'Indonesia', "<h3> Indonesia </h3> <img src ='./images/indonesia-flag.png'/ width = 130 height = auto>")
add_marker(23.6978, 120.9605, 'Taiwan', "<h3> Taiwan </h3> <img src ='./images/taiwan-flag.png'/ width = 130 height = auto>")
add_marker(35.9078, 127.7669, 'South Korea', "<h3> South Korea </h3> <img src ='./images/skorea-flag.png'/ width = 130 height = auto>")
add_marker(4.2105, 101.9758, 'Malaysia', "<h3> Malaysia </h3> <img src ='./images/malaysia-flag.png'/ width = 130 height = auto>")

add_marker(56.1304, -106.3468, 'Canada', "<h3> Canada </h3> <img src ='./images/canada-flag.png'/ width = 130 height = auto>")
add_marker(34.0489, -111.0937, 'Arizona, USA', "<h3> Arizona, USA </h3> <img src ='./images/usa-flag.png'/ width = 130 height = auto>")
add_marker(38.8026, -116.4194, 'Nevada, USA', "<h3> Nevada, USA </h3> <img src ='./images/usa-flag.png'/ width = 130 height = auto>")
add_marker(27.6648, -81.5158, 'Florida, USA', "<h3> Florida, USA </h3> <img src ='./images/usa-flag.png'/ width = 130 height = auto>")
add_marker(36.7783, -119.4179, 'California, USA', "<h3> California, USA </h3> <img src ='./images/usa-flag.png'/ width = 130 height = auto>")
add_marker(40.7128, -74.0060, 'New York, USA', "<h3> New York, USA </h3> <img src ='./images/usa-flag.png'/ width = 130 height = auto>")
add_marker(47.7511, -120.7401, 'Washington, USA', "<h3> Washington, USA </h3> <img src ='./images/usa-flag.png'/ width = 130 height = auto>")
add_marker(37.9643, -91.8318, 'Missouri, USA', "<h3> Missouri, USA </h3> <img src ='./images/usa-flag.png'/ width = 130 height = auto>")
add_marker(19.8968, -155.5828, 'Hawaii, USA', "<h3> Hawaii, USA </h3> <img src ='./images/usa-flag.png'/ width = 130 height = auto>")

add_marker(23.6345, -102.5528, 'Mexico', "<h3> Mexico </h3> <img src ='./images/mexico-flag.png'/ width = 130 height = auto>")