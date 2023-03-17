let groc;
let farm;
let img;

let gnumRows, glong, glati, gmaxLng, gminLng, gmaxLat, gminLat;
let fnumRows, flong, flati, fmaxLng, fminLng, fmaxLat, fminLat;

function preload(){
  
  groc = loadTable("Grocery_Stores2.csv", "csv", "header");
  farm = loadTable("CurrentMrktsCounty.csv", "csv", "header");
  img = loadImage("la_county.png");
}

function setup() {
  createCanvas(img.width, img.height);
  background(255);
  
  //image(img, 0, 0);
  
  sortGPoints();
  sortFPoints();
  
  print(gminLng, gminLat);
  print(fminLng, fminLat);
  
  drawPoints(gnumRows, glati, glong, "g");
  drawPoints(fnumRows, flati, flong, "f");
}

function drawPoints(numRows, lat, lng, type){
  for(let i = 0; i<numRows; i++){
    
    let mapLng = map(lng[i], min(lng), max(lng), 0, width);
    let mapLat = map(lat[i], min(lat), max(lat), height, 0);
    
    //-120.1499,32.271,-115.1286,35.6231
    //-119.263,32.8481,-116.4907,35.3504
    //let mapLng = map(lng[i], -119.263, -116.4907, 0, width);
    //let mapLat = map(lat[i], 32.8481, 35.3504, height, 0);
    
    //let mapLng = map(lng[i], -120, -116, 0, width);
    //let mapLat = map(lat[i], 32, 35, height, 0);
    
    if(type == "f"){
      stroke(25, 150, 25);
    } else if(type == "g"){
      stroke(200, 20, 20);
    }
    strokeWeight(10);
    point(mapLng, mapLat);
    print("drew");
  }
}

function sortGPoints(){
  gnumRows = groc.getRowCount();
  glong = groc.getColumn("LONG");
  glati = groc.getColumn("LAT");


  for(let i=0;i<gnumRows;i++){
    if(glong[i] == 1000 || glong[i] == null || Number.isNaN(glong[i]) || glong[i] > -115 ){
      glong.splice(i, 1);
    }
    if(glati[i] == 1000 || glati[i] == null|| Number.isNaN(glati[i]) || glati[i] > 35){
      glati.splice(i, 1);
    }
    
  }
  
  gmaxLng = max(glong);
  gminLng = min(glong);
  
  gmaxLat = max(glati);
  gminLat = min(glati);
}

function sortFPoints(){
  fnumRows = farm.getRowCount();
  flong = farm.getColumn("Long");
  flati = farm.getColumn("Lat");

  for(let i=0;i<gnumRows;i++){
    if(flong[i] == 1000 || flong[i] == null || Number.isNaN(flong[i])){
      flong.splice(i, 1);
    }
    if(flati[i] == 1000 || flati[i] == null|| Number.isNaN(flati[i])){
      flati.splice(i, 1);
    }
  }
  
  fmaxLng = max(flong);
  fminLng = min(flong);
  
  fmaxLat = max(flong);
  fminLat = min(flong);
}