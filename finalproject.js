
var mondayList = [];

function saveMon(){
    document.querySelector(".showlist1").innerHTML += '<div class="item-container" onclick="remove(this)">' + document.querySelector(".Monday").value + '</div>'; 
   
         };


var tuesdayList = [];

function saveTues(){
    document.querySelector(".showlist2").innerHTML += '<div class="item-container" onclick="remove(this)">' + document.querySelector(".Tuesday").value + '</div>'; 
}

var wednesdayList = [];

function saveWed(){
    document.querySelector(".showlist3").innerHTML += '<div class="item-container" onclick="remove(this)">' + document.querySelector(".Wednesday").value + '</div>'; 
}


var thursdayList = [];

function saveThur(){
    document.querySelector(".showlist4").innerHTML += '<div class="item-container" onclick="remove(this)">' + document.querySelector(".Thursday").value + '</div>'; 
}

var fridayList = [];

function saveFri(){
    document.querySelector(".showlist5").innerHTML += '<div class="item-container" onclick="remove(this)">' + document.querySelector(".Friday").value + '</div>'; 
}

var satsunList = [];

function saveSS(){
    document.querySelector(".showlist6").innerHTML += '<div class="item-container" onclick="remove(this)">' + document.querySelector(".SatSun").value + '</div>'; 
}


function remove(element){
    element.remove();
}