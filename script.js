soda_EL = document.querySelector("#soda");
soda_num_EL = document.querySelector("#soda_num");
cursor_EL = document.querySelector("#cursor_img");
cursor_num_EL = document.querySelector("#cursor_num");
cursor_price_EL = document.querySelector("#cursor_price");
bucket_EL = document.querySelector("#bucket_img");
bucket_num_EL = document.querySelector("#bucket_num");
bucket_price_EL = document.querySelector("#bucket_price");
soda_river_EL = document.querySelector("#soda_river_img");
soda_river_num_EL = document.querySelector("#soda_river_num");
soda_river_price_EL = document.querySelector("#soda_river_price");
brewery_EL = document.querySelector("#brewery_img");
brewery_num_EL = document.querySelector("#brewery_num");
brewery_price_EL = document.querySelector("#brewery_price");
soda_lake_EL = document.querySelector("#soda_lake_img");
soda_lake_num_EL = document.querySelector("#soda_lake_num");
soda_lake_price_EL = document.querySelector("#soda_lake_price");
alchemy_lab_EL = document.querySelector("#alchemy_lab_img");
alchemy_lab_num_EL = document.querySelector("#alchemy_lab_num");
alchemy_lab_price_EL = document.querySelector("#alchemy_lab_price");
soda_ocean_EL = document.querySelector("#soda_ocean_img");
soda_ocean_num_EL = document.querySelector("#soda_ocean_num");
soda_ocean_price_EL = document.querySelector("#soda_ocean_price");

console.log(soda_num_EL);

soda = 0;
cursor = 0;
bucket = 0;
soda_river = 0;
brewery = 0;
soda_lake = 0;
alchemy_lab = 0;
soda_ocean = 0;

cursor_potency = 0,1;
bucket_potency = 1;
soda_river_potency = 8;
brewery_potency = 47;
soda_lake_potency = 260;
alchemy_lab_potency = 1400;
soda_ocean_potency = 7800;


cursor_price = 15;
bucket_price = 100;
soda_river_price = 1100;
brewery_price = 12000;
soda_lake_price = 130000;
alchemy_lab_price = 1400000;
soda_ocean_price = 20000000;

cursor_num_EL.innerHTML = "Number of cursors: " + cursor;
cursor_price_EL.innerHTML = "Price: " + Math.round(cursor_price)
bucket_num_EL.innerHTML = "Number of buckets: " + cursor;
bucket_price_EL.innerHTML = "Price: " + Math.round(bucket_price)
soda_river_num_EL.innerHTML = "Number of soda rivers: " + cursor;
soda_river_price_EL.innerHTML = "Price: " + Math.round(soda_river_price)
brewery_num_EL.innerHTML = "Number of breweries: " + cursor;
brewery_price_EL.innerHTML = "Price: " + Math.round(brewery_price)
soda_lake_num_EL.innerHTML = "Number of soda lakes : " + cursor;
soda_lake_price_EL.innerHTML = "Price: " + Math.round(soda_lake_price)
alchemy_lab_num_EL.innerHTML = "Number of alchemy labs: " + cursor;
alchemy_lab_price_EL.innerHTML = "Price: " + Math.round(alchemy_lab_price)
soda_ocean_num_EL.innerHTML = "Number of soda oceans: " + cursor;
soda_ocean_price_EL.innerHTML = "Price: " + Math.round(soda_ocean_price)

function soda_click(){ //each time you click you gain soda
    soda++;
}



function buy_cursor(){
    if (soda >= cursor_price){
            cursor++;
        soda -= cursor_price;
        cursor_num_EL.innerHTML = "Number of cursors: " + cursor;
        cursor_price *= 1.15
        cursor_price_EL.innerHTML = "Price: " + Math.round(cursor_price)
    }
    
}

function buy_bucket(){
    if (soda >= bucket_price){
            bucket++;
       soda -= bucket_price;
       bucket_num_EL.innerHTML = "Number of buckets: " + bucket;
       bucket_price *= 1.15
       bucket_price_EL.innerHTML = "Price: " + Math.round(bucket_price)
    }

}

function buy_soda_river(){
    if (soda >= soda_river_price){
        soda_river++;
       soda -= soda_river_price;
       soda_river_num_EL.innerHTML = "Number of soda rivers: " + soda_river;
       soda_river_price *= 1.15
       soda_river_price_EL.innerHTML = "Price: " + Math.round(soda_river_price)
    }

}

function buy_brewery(){
    if (soda >= _price){
        brewery++;
       soda -= brewery_price;
       brewery_num_EL.innerHTML = "Number of breweries : " + brewery;
       brewery_price *= 1.15
       brewery_price_EL.innerHTML = "Price: " + Math.round(brewery_price)
    }

}

function buy_soda_lake(){
    if (soda >= soda_lake_price){
        soda_lake++;
       soda -= soda_lake_price;
       soda_lake_num_EL.innerHTML = "Number of soda lakes: " + soda_lake;
       soda_lake_price *= 1.15
       soda_lake_price_EL.innerHTML = "Price: " + Math.round(soda_lake_price)
    }

}

function buy_alchemy_lab(){
    if (soda >= alchemy_lab_price){
        alchemy_lab++;
       soda -= _price;
       alchemy_lab_num_EL.innerHTML = "Number of alchemy labs: " + alchemy_lab;
       alchemy_lab_price *= 1.15
       alchemy_lab_price_EL.innerHTML = "Price: " + Math.round(alchemy_lab_price)
    }

}

function buy_soda_ocean(){
    if (soda >= soda_ocean_price){
        soda_ocean++;
       soda -= _price;
       soda_ocean_num_EL.innerHTML = "Number of soda oceans: " + soda_ocean;
       soda_ocean_price *= 1.15;
       soda_ocean_price_EL.innerHTML = "Price: " + Math.round(soda_ocean_price);
    }

}

soda_EL.addEventListener("click", soda_click); // when we click the soda
cursor_EL.addEventListener("click", buy_cursor)
bucket_EL.addEventListener("click", buy_bucket)
soda_river_EL.addEventListener("click", buy_soda_river)
brewery_EL.addEventListener("click", buy_brewery)
soda_lake_EL.addEventListener("click", buy_soda_lake)
alchemy_lab_EL.addEventListener("click", buy_alchemy_lab)
soda_ocean_EL.addEventListener("click", buy_soda_ocean)


var cursor_timer = setInterval(cursortimer, 1000); // runs the myTimer function 1 time a second
function cursortimer(){ 
    soda += cursor*cursor_potency;
    soda += bucket*bucket_potency;
    soda += soda_river*soda_river_potency;
    soda += brewery*brewery_potency;
    soda += soda_lake*soda_lake_potency;
    soda += alchemy_lab*alchemy_lab_potency;
    soda += soda_ocean*soda_ocean_potency;

}

var timer = setInterval(myTimer, 10); // runs the myTimer function 1 time a second
function myTimer(){ 
    soda_num_EL.innerHTML = Math.round(soda)
    
}