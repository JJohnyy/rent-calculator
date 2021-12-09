/*const locationBtnsRef = Array.from(document.querySelectorAll(".location-btn"));
const roomsBtnsRef = Array.from(document.querySelectorAll(".rooms-btn"));
const prague1 = document.querySelector("#pOne");
const room1 = document.querySelector("#oneBedroom");*/

const parkingLabel = document.querySelector("#parking-label");
const furnishedLabel = document.querySelector("#furnished-label");
const parking = document.getElementById("parking");
const furnished = document.getElementById("furnished");
const elevator = document.getElementById("elevator");


//store rent prices
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
        prices: [430, 380, 330, 250],
    }
}

let storeysArray = [0, 18, 26, 33]
let storeyPrices = storeysArray[0];

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
}));

const storeys = document.querySelectorAll(".floor-btn");

storeys.forEach(floor => floor.addEventListener("click", (event) => {
    const value = parseInt(event.target.dataset.value);
    updatedPrice = currentPrice + storeyPrices[value];
    console.log(updatedPrice);
}));

/**
 * changes color of first row buttons
 */
function changeColor() {
    if (this.style.backgroundColor === "#ff751a") {
        this.style.backgroundColor = "#0047b3";
    } else {
        this.style.backgroundColor = "#ff751a";
    }
}

/**
 * changes color of second row buttons
 */
function changeColoRooms() {
    if (this.style.backgroundColor === "#ff751a") {
        this.style.backgroundColor = "#0047b3";
    } else {
        this.style.backgroundColor = "#ff751a";
    }
}

/*for (let i = 0; i < roomsBtnsRef.length; i++) {
    roomsBtnsRef[i].addEventListener("click", changeColoRooms);
}*/



/**
 * returns final price
 */
function appliances() {
    if (parking.checked == true && furnished.checked == true) {
        return floorSize() + 1500;
    } else if (parking.checked == true && furnished.checked !== true) {
        return floorSize() + 1000;
    } else if (parking.checked !== true && furnished.checked == true) {
        return floorSize() + 500;
    } else if (elevator.checked == true) {
        return floorSize() + 90;
    } else {
        return floorSize();
    }
}


function changeColorParking() {

    parkingLabel.classList.add("active");

}

parkingLabel.addEventListener("click", changeColorParking)



/**
 * returns price per square meter
 */
function floorSize() {
    let fSize = document.getElementById("numbers").value;
    return fSize * updatedPrice;
}


/**
 * prints final price
 */
function getPrice() {
    document.getElementById("answer").innerHTML = `${appliances()} CZK`;
}

//gets answer button variable, add click listener
let answerBtn = document.getElementById("answer-btn");
answerBtn.addEventListener("click", getPrice);