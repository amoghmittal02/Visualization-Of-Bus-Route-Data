import stations from './getAllStation.json' assert { type: 'json' };
import output from './testcase1.json' assert { type: 'json' };
import bus from './bus_data.json' assert { type: 'json' };
import busdata from './data1.json' assert { type: 'json' };
import temp1 from './Routes/5492.json' assert { type: 'json' };
import temp2 from './Routes/5488.json' assert { type: 'json' };
import temp3 from './Routes/5471.json' assert { type: 'json' };
import temp4 from './Routes/5537.json' assert { type: 'json' };
import bus_dens from './bus_density.json' assert {type: 'json'};

function initMap() {
    var set5492 = new Set();
    var set5488 = new Set();
    var set5471 = new Set();
    var set5537 = new Set();
    starttime = document.getElementById("numbstr").value;
    endtime = document.getElementById("numbend").value;
    // console.log(starttime);
    for (let j = 0; j < bus.rows.length; j++) {
        const t = new Date(bus.rows[j].ticket_time);
        
        const currentHour = t.getHours();
        const currentMinute = t.getMinutes();
        const formattedTime = formatTimeWithLeadingZeros(currentHour, currentMinute);
    
        // console.log(formattedTime);
        if(formattedTime>=starttime&&formattedTime<=endtime){
            
            var str = bus.rows[j].bus_number + bus.rows[j].trip_no;
            if(bus.rows[j].route_name==='C-1'){
                set5492.add(str);
            }
            else if(bus.rows[j].route_name==='C-3'){
                set5488.add(str);
            }
            else if(bus.rows[j].route_name==='M-11'){
                set5471.add(str);
            }
            else if(bus.rows[j].route_name==='M-17'){
                set5537.add(str);
            }
            else continue;
        }

    }
    for(let i =0 ;i<temp1.size-1; i++){
        var str = temp1[i].stationname + ' to '+temp1[i+1].stationname;
        output[str][1]+=set5492.size;
    }
    for(let i =0 ;i<temp2.size-1; i++){
        var str = temp2[i].stationname + ' to '+temp2[i+1].stationname;
        output[str][1]+=set5488.size;
    }
    for(let i =0 ;i<temp3.size-1; i++){
        var str = temp3[i].stationname + ' to '+temp3[i+1].stationname;
        output[str][1]+=set5471.size;
    }
    for(let i =0 ;i<temp4.size-1; i++){
        var str = temp4[i].stationname + ' to '+temp4[i+1].stationname;
        output[str][1]+=set5537.size;
    }
    console.log(output);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 }, 
        zoom: 6
    });

    var directionsService = new google.maps.DirectionsService();


    // Request and render multiple routes
    p=0;
    co.forEach(function(request, index) {
        directionsService.route(request, function(response, status) {
            if (status === 'OK') {
                renderRoute(map, response, getRandomColor()); // Get a random color for each route
            } else {
                alert('Directions request failed: ' + status);
            }
        });
    });
}
function renderRoute(map, response, color) {
    var directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: { 
            strokeColor: color ,
            strokeWeight: 6,
        },
        suppressMarkers: true, 
    });

    directionsRenderer.setDirections(response);
}

var i=0;
function getRandomColor() {
    
    const gradientColors = [
        'rgb(0, 128, 0)',       // Green
        'rgb(50, 205, 50)',     // Yellow-Green
        'rgb(127, 255, 0)',     // Chartreuse
        'rgb(0, 255, 0)',       // Lime
        'rgb(50, 205, 50)',     // Lime Green
        'rgb(173, 255, 47)',    // Yellow-Lime
        'rgb(255, 255, 224)',   // Light Yellow
        'rgb(255, 255, 192)',   // Pale Yellow
        'rgb(255, 255, 0)',     // Canary Yellow
        'rgb(255, 255, 0)',     // Yellow
        'rgb(255, 215, 0)',     // Gold
        'rgb(255, 191, 0)',     // Amber
        'rgb(255, 165, 0)',     // Orange-Yellow
        'rgb(255, 140, 0)',     // Orange
        'rgb(255, 69, 0)',      // Dark Orange
        'rgb(255, 99, 71)',     // Deep Orange
        'rgb(255, 69, 0)',      // Red-Orange
        'rgb(255, 99, 71)',     // Tomato Red
        'rgb(178, 34, 34)',     // Fire Red
        'rgb(255, 0, 0)' // Red
    ];
    const step=(mx-mi)/20;
    const color = gradientColors[Math.ceil(coor[p].wt/step)];
    console.log(coor[p]);
    p+=1;
    return color;
}



// console.log(co);
// window.getRandomColor=getRandomColor;
// window.renderRoute=renderRoute;
window.initMap = initMap;


function docReady() {
        initMap();

    // Call the function to load the API
}
window.addEventListener("load", docReady);