
soda_EL = document.querySelector("#soda");
soda_num_EL = document.querySelector("#soda_num");
cursor_EL = document.querySelector("#cursor_img");
cursor_num_EL = document.querySelector("#cursor_num");
cursor_price_EL = document.querySelector("#cursor_price");
bucket_EL = document.querySelector("#bucket_img");
bucket_num_EL = document.querySelector("#bucket_num");
bucket_price_EL = document.querySelector("#bucket_price");

console.log(soda_num_EL);

soda = 0;
cursor = 0;
bucket = 0;
river = 0;
lake = 0;
ocean = 0;

cursor_potency = 1;
bucket_potency = 10;

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
       bucket_num_EL.innerHTML = "Number of buckets: " + bucket;
       bucket_price *= 1.15
       bucket_price_EL.innerHTML = "Price: " + Math.round(bucket_price)
    }

}

soda_EL.addEventListener("click", soda_click); // when we click the soda
cursor_EL.addEventListener("click", buy_cursor)
bucket_EL.addEventListener("click", buy_bucket)

var cursor_timer = setInterval(cursortimer, 1000); // runs the myTimer function 1 time a second
function cursortimer(){ 
    soda += cursor*cursor_potency;

}

var bucket_timer = setInterval(buckettimer, 1000); // runs the myTimer function 1 time a second
function buckettimer(){ 
    soda += bucket*bucket_potency;

}

var bucket_timer = setInterval(buckettimer, 1000); // runs the myTimer function 1 time a second
function buckettimer(){ 
    soda += watermill*watermill_potency;

}

var timer = setInterval(myTimer, 10); // runs the myTimer function 1 time a second
function myTimer(){ 
    soda_num_EL.innerHTML = Math.round(soda)
    
}