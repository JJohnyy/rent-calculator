const locationBtnsRef = Array.from(document.querySelectorAll(".location-btn"));
const roomsBtnsRef = Array.from(document.querySelectorAll(".rooms-btn"));
const prague1 = document.querySelector("#pOne");
const room1 = document.querySelector("#roomOne");


const prague = [
    {
        id: "pOne",
        location: "Prague 1",
        oneBedroom: 700,
        twoBedroom: 650,
        threeBdroom: 600,
        fourBedroom: 550,
    },
    {
        id: "pTwo",
        location: "Prague 2",
        oneBedroom: 670,
        twoBedroom: 620,
        threeBdroom: 570,
        fourBedroom: 520,
    },
    {
        id: "pThree",
        location: "Prague 3",
        oneBedroom: 620,
        twoBedroom: 550,
        threeBdroom: 470,
        fourBedroom: 400,
    },
    {
        id: "pFour",
        location: "Prague 4",
        oneBedroom: 580,
        twoBedroom: 530,
        threeBdroom: 470,
        fourBedroom: 410,
    }
]

locationBtnsRef.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        matchLocation(event.target.id);
    })
});

function matchLocation(id) {
  const location = prague.filter(location =>{  
        if(location.id == id) { 
            return location 
        }   
    })
    console.log(location) 
}

function changeColor() {
    if (this.style.backgroundColor === "#ff751a") {
        this.style.backgroundColor = "#0047b3";
    } else {
        this.style.backgroundColor = "#ff751a";
    }
}


function changeColoRooms() {
    if (this.style.backgroundColor === "r#ff751a") {
        this.style.backgroundColor = "#0047b3";
    } else {
        this.style.backgroundColor = "#ff751a";
    }
}

for (let i = 0; i < roomsBtns.length; i++) {
    roomsBtns[i].addEventListener("click", changeColoRooms);
}


function appliances() {
    let parking = document.getElementById("parking");
    let furnished = document.getElementById("furnished");
    if (parking.checked == true && furnished.checked == true) {
        return floorSize() + 1500;
    } else if (parking.checked == true && furnished.checked !== true) {
        return floorSize() + 1000;
    } else if (parking.checked !== true && furnished.checked == true) {
        return floorSize() + 500;
    } else {
        return floorSize();
    }
}


function floorSize() {
    let fSize = document.getElementById("numbers").value;
    return fSize
}

function getPrice() {
    document.getElementById("answer").innerHTML = `${appliances()}CZK`;
}

let answerBtn = document.getElementById("answer-btn");
answerBtn.addEventListener("click", getPrice);