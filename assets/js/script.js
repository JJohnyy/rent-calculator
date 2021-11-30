
const locations = [
    {
    location: "PragueOne",
    id: "pOne",
    oneBedroom: 700,
    twoBedroom: 650,
    threeBdroom: 600,
    fourBedroom: 550,
    }
]



const pragueOne = {
    oneBedroom: 700,
    twoBedroom: 650,
    threeBdroom: 600,
    fourBedroom: 550,
}

 const pragueTwo = {
    oneBedroom: 670,
    twoBedroom: 620,
    threeBdroom: 570,
    fourBedroom: 520,
}

 const pragueThree = {
    oneBedroom: 620,
    twoBedroom: 550,
    threeBdroom: 470,
    fourBedroom: 400,
}

const pragueFour = {
    oneBedroom: 580,
    twoBedroom: 530,
    threeBdroom: 470,
    fourBedroom: 410,
}

const locationBtns = document.getElementsByClassName("location-btn");
const roomsBtns = document.getElementsByClassName("rooms-btn");

const prague1 = document.getElementById("pOne");

const room1 = document.getElementById("roomOne");

function getLocation(event) {  
    console.log("clicked");
}

prague1.addEventListener("click", getLocation);


function getRooms() {
    return pragueOne.oneBedroom;  
}

room1.addEventListener("click", () => {
    console.log("correct");
});


function changeColor () {
    if(this.style.backgroundColor ==="#ff751a") {
        this.style.backgroundColor = "#0047b3";
    }else {
        this.style.backgroundColor = "#ff751a";
    }
}

for (let i = 0; i < locationBtns.length; i++) {
    locationBtns[i].addEventListener("click", changeColor);
}


function changeColoRooms () {
    if(this.style.backgroundColor ==="r#ff751a") {
        this.style.backgroundColor = "#0047b3";
    }else {
        this.style.backgroundColor = "#ff751a";
    }
}

for (let i = 0; i < roomsBtns.length; i++) {
    roomsBtns[i].addEventListener("click", changeColoRooms);
}


function appliances() {
    let parking = document.getElementById("parking");
    let furnished = document.getElementById("furnished");
    if(parking.checked == true && furnished.checked == true) {
        return floorSize() + 1500;
    } else if (parking.checked == true && furnished.checked !== true) {
        return floorSize() + 1000;
    }else if (parking.checked !== true && furnished.checked == true) {
        return floorSize() + 500;
    } else {
        return floorSize();
    }
}


function floorSize() {
    let fSize = document.getElementById("numbers").value;
    return fSize * getRooms();
}

function getPrice() {
    document.getElementById("answer").innerHTML = `${appliances()}CZK`;
}

let answerBtn = document.getElementById("answer-btn");
answerBtn.addEventListener("click", getPrice);