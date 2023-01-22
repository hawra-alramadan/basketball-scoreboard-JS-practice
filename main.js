let homeCount = 0 ;
document.getElementById("homeRus").textContent = homeCount;
homeGuest = 0;
document.getElementById("guestRus").textContent = homeGuest;



function addHome1(){
    homeGuest += 1 ;
document.getElementById("homeRus").textContent = homeGuest ;
}

function addHome2(){
    homeGuest += 2 ;
    document.getElementById("homeRus").textContent = homeGuest ;
}

function addHome3(){
    homeGuest += 3 ;
    document.getElementById("homeRus").textContent = homeGuest ;
}


function add1(){
    homeGuest += 1 ;
    document.getElementById("guestRus").textContent = homeGuest ;
}
function add2(){
    homeGuest += 2 ;
    document.getElementById("guestRus").textContent = homeGuest ;
}

function add3(){
    homeGuest += 3 ;
    document.getElementById("guestRus").textContent = homeGuest ;
}
