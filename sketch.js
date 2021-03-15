const key = 'pk.eyJ1IjoiYmM4NTE2MTgiLCJhIjoiY2ttMzVzcG1qMWppYjJ3bXI0ZTV4Nm1iMCJ9.QdN7gcWWVsP9SX2rtDHF3Q';

const options = {
  lat: 39.3292,
  lng: -82.1013,
  zoom: 12,
  style:'mapbox://styles/bc851618/ckmaal9nd391q19qopa03y6d4',
  pitch: 0,
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;



function setup() {
canvas = createCanvas(windowWidth, windowHeight);
  
myMap = mappa.tileMap(options);
myMap.overlay(canvas);
  
meteorites = loadTable('covid.csv','csv','header');
}













function draw() {
  clear();
  
  fill('#FED053');
  strokeWeight(2);
  //stroke(255);
 // strokeWeight(3);
  const zoom = myMap.zoom();
 // const athens = myMap.latLngToPixel(39.3292,-82.1013);
 // ellipse(athens.x, athens.y, 10 * zoom,10 * zoom);
 // if(dist(athens.x,athens.y,mouseX,mouseY)<zoom * 10/2){
    fill('#FED053');
//  }else{
//   fill('0,100');
//  }
  
  for(let i = 0; i < meteorites.getRowCount(); i++){
    const latitude = Number(meteorites.getString(i, 'reclat'));
    const longitude = Number(meteorites.getString(i, 'reclong'));
    const pos = myMap.latLngToPixel(latitude, longitude);
    
    const place = meteorites.getString(i, 'name');
    
    let size = 10;
   // const size = meteorite.getString(i,'name');
    // size = map(size,558,60000000) + myMap.zoom();
    ellipse(pos.x, pos.y, size,size);
    
     if(dist(pos.x,pos.y,mouseX,mouseY) < size){
       textSize(32);
       text(place,pos.x,pos.y);
       
     }
  }
}





//resize canvas when the window is resized...
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
 {
   this.location.reload(false); /* false to get page from  cache */
  }, 200);
});



