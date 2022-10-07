
soda_EL = document.querySelector("#soda");
soda_num_EL = document.querySelector("#soda_num");
cursor_EL = document.querySelector("#cursor_img");
cursor_num_EL = document.querySelector("#cursor_num");

console.log(soda_num_EL);

soda = 0;
cursor = 0;
rain = 0;
river = 0;
lake = 0;
ocean = 0;

cursor_price = 15;


function soda_click(){ //each time you click you gain soda
    soda++;
}

function buy_cursor(){
    if (soda >= cursor_price){
            cursor++;
            soda = soda * 1.15
        soda -= cursor_price;
        




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
    soda_num_EL.innerHTML = soda;
    
}