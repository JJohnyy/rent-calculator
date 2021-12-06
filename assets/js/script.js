/*const locationBtnsRef = Array.from(document.querySelectorAll(".location-btn"));
const roomsBtnsRef = Array.from(document.querySelectorAll(".rooms-btn"));
const prague1 = document.querySelector("#pOne");
const room1 = document.querySelector("#oneBedroom");*/


/*const prague = [
    {
        id: "pOne",
        location: "Prague 1",
        oneBedroom: 700,
        twoBedroom: 650,
        threeBedroom: 600,
        fourBedroom: 550,
    },
    {
        id: "pTwo",
        location: "Prague 2",
        oneBedroom: 670,
        twoBedroom: 620,
        threeBedroom: 570,
        fourBedroom: 520,
    },
    {
        id: "pThree",
        location: "Prague 3",
        oneBedroom: 620,
        twoBedroom: 550,
        threeBedroom: 470,
        fourBedroom: 400,
    },
    {
        id: "pFour",
        location: "Prague 4",
        oneBedroom: 580,
        twoBedroom: 530,
        threeBedroom: 470,
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
    const location = prague.filter(location => {
        if (location.id == id) {
            return location
        }
    })
    console.log(location)
}


roomsBtnsRef.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        matchBedroom(event.target.id);
    })
});


function matchBedroom(id) {
    
}*/

const prague = {
    pOne: {
        id: "pOne",
        location: "Prague 1",
        oneBedroom: 700,
        twoBedroom: 650,
        threeBedroom: 600,
        fourBedroom: 550,
        prices: [700, 650, 600, 550],
    },
    pTwo: {
        id: "pTwo",
        location: "Prague 2",
        oneBedroom: 670,
        twoBedroom: 620,
        threeBedroom: 570,
        fourBedroom: 520,
        prices: [670, 620, 570, 520],
    },
    pThree: {
        id: "pThree",
        location: "Prague 3",
        oneBedroom: 620,
        twoBedroom: 550,
        threeBedroom: 470,
        fourBedroom: 400,
        prices: [620, 550, 470, 400],
    },
    pFour: {
        id: "pFour",
        location: "Prague 4",
        oneBedroom: 580,
        twoBedroom: 530,
        threeBedroom: 470,
        fourBedroom: 410,
        prices: [580, 530, 470, 410],
    }
}


// store clicked location, and clicked bedroom
let currentLocation = 'pOne';
let currentPrice = prague[currentLocation].prices[0];

// get element from dom
const locations = document.querySelectorAll(".location-btn");
const buttons = document.querySelectorAll(".rooms-btn");

// listen for location click and store result
locations.forEach(location => location.addEventListener("click", (event) => {
  const value = event.target.dataset.value;
  currentLocation = value;
}));

// listen for bedroom click and get result
buttons.forEach(button => button.addEventListener("click", (event) => {
  const value = parseInt(event.target.dataset.value);
  currentPrice = prague[currentLocation].prices[value];
  console.log(currentLocation, currentPrice);

}));


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

/*for (let i = 0; i < roomsBtnsRef.length; i++) {
    roomsBtnsRef[i].addEventListener("click", changeColoRooms);
}*/


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
    return fSize * currentPrice;
}

function getPrice() {
    document.getElementById("answer").innerHTML = `${appliances()}CZK`;
}

let answerBtn = document.getElementById("answer-btn");
answerBtn.addEventListener("click", getPrice);