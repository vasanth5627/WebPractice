const radius_div = document.getElementById("radius");
const volume_div = document.getElementById("volume")

function caluclate(){
   let rad = radius_div.value;
   let vol = ((4/3)*3.14*(rad*rad*rad)).toFixed(5);
   volume_div.value = vol;
}

function reset(){
    radius_div.value=0;
    volume_div.value=0;
}