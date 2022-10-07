
soda_EL = document.querySelector("#soda");
soda_num_EL = document.querySelector("#soda_num");
cursor_EL = document.querySelector("#cursor_img");
cursor_num_EL = document.querySelector("#cursor_num");
cursor_price_EL = document.querySelector("#cursor_price");

console.log(soda_num_EL);

soda = 0;
cursor = 0;
bucket = 0;
river = 0;
lake = 0;
ocean = 0;

cursor_price = 15;
bucket_price = 100;
cursor_num_EL.innerHTML = "Number of cursors: " + cursor;
cursor_price_EL.innerHTML = "Price: " + Math.round(cursor_price)
bucket_num_EL.innerHTML = "Number of buckets: " + cursor;
bucket_price_EL.innerHTML = "Price: " + Math.round(bucket_price)

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
       bucket_num_EL.innerHTML = "Number of buckets: " + cursor;
       bucket_price *= 1.15
       bucket_price_EL.innerHTML = "Price: " + Math.round(bucket_price)
    }

}

soda_EL.addEventListener("click", soda_click); // when we click the soda
cursor_EL.addEventListener("click", buy_cursor)

var building_timer = setInterval(myBuildingTimer, 1000); // runs the myTimer function 1 time a second
function myBuildingTimer(){ 
    soda += cursor;

}

var timer = setInterval(myTimer, 10); // runs the myTimer function 1 time a second
function myTimer(){ 
    soda_num_EL.innerHTML = Math.round(soda)
    
}