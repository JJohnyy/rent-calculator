
// store variables
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




//store clicked location, and clicked bedroom
let currentLocation = 'pOne';
let currentPrice = prague[currentLocation].prices[0];

// get element from dom
const locations = document.querySelectorAll(".location-btn");
const buttons = document.querySelectorAll(".rooms-btn");

/**
 * listen for location click and store result 
 */
locations.forEach(location => location.addEventListener("click", (event) => {
    const value = event.target.dataset.value;
    currentLocation = value;
}));


const locationWrapper = document.getElementById("location-wrapper");
const locationBtns = locationWrapper.getElementsByClassName("location-btn");

for (let i = 0; i < locationBtns.length; i++) {
    locationBtns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

/**
 * listen for bedroom click and get result
 */
buttons.forEach(button => button.addEventListener("click", (event) => {
    const value = event.target.dataset.value;
    currentPrice = prague[currentLocation].prices[value];
}));

const roomsWrapper = document.getElementById("rooms-wrapper");
const roomBtns = roomsWrapper.getElementsByClassName("rooms-btn");

for (let i = 0; i < roomBtns.length; i++) {
    roomBtns[i].addEventListener("click", function () {
        let currentTwo = document.getElementsByClassName("active-two");
        if (currentTwo.length > 0) {
            currentTwo[0].className = currentTwo[0].className.replace(" active-two", "");
        }
        this.className += " active-two";
    });
}

const storeys = document.querySelectorAll(".floor-btn");
const storeysArray = [0, 18, 26, 33, 45]
/**
 * listen for storey click and get a result
 */
storeys.forEach(floor => floor.addEventListener("click", (event) => {
    const value = parseInt(event.target.dataset.value);
    finalPrice = currentPrice + storeysArray[value];
}));

const floorWrapper = document.getElementById("floor-wrapper");
const floorBtns = floorWrapper.getElementsByClassName("floor-btn");

for (let i = 0; i < floorBtns.length; i++) {
    floorBtns[i].addEventListener("click", function () {
        let currentThree = document.getElementsByClassName("active-three");
        if (currentThree.length > 0) {
            currentThree[0].className = currentThree[0].className.replace(" active-three", "");
        }
        this.className += " active-three";
    });
}


/**
 * returns price of accesories
 */
function appliances() {
    if (parking.checked == true && furnished.checked == true && elevator.checked !== true) {
        return floorSize() + 1500;
    } else if (parking.checked == true && furnished.checked !== true && elevator.checked !== true) {
        return floorSize() + 1000;
    } else if (parking.checked !== true && furnished.checked == true && elevator.checked !== true) {
        return floorSize() + 500;
    } else if (elevator.checked == true && parking.checked !== true && furnished.checked !== true) {
        return floorSize() + 90;
    } else if (elevator.checked == true && furnished.checked == true && parking.checked !== true) {
        return floorSize() + 590;
    } else if (elevator.checked == true && parking.checked == true && furnished.checked !== true) {
        return floorSize() + 1090;
    } else if (elevator.checked == true && parking.checked == true && furnished.checked == true) {
        return floorSize() + 1590;
    } else {
        return floorSize();
    }
}

/**
 * returns price per square meter
 */
function floorSize() {
    let fSize = document.getElementById("numbers").value;
    return fSize * finalPrice;
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

