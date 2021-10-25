/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
window.addEventListener('DOMContentLoaded', onAppReady);

var cellContainer = document.getElementById("cell-container");
var pegContainer = document.getElementById("peg-container");

function onAppReady() {
    // var currentColor = "white";
    var currentCells = ["cell28", "cell29", "cell30", "cell31"];
    var currentPegs = ["peg28", "peg29", "peg30", "peg31"];
    var currentRow = 8;
    var possibleColors = ["red", "blue", "green", "yellow", "grey", "pink"];

    var cell1Color, cell2Color, cell3Color, cell4Color;

    var color = {
        "rgb(0, 128, 0)": "green",
        "rgb(255, 255, 0)": "yellow",
        "rgb(255, 0, 0)": "red",
        "rgb(0, 0, 255)": "blue",
        "rgb(255, 192, 203)": "pink",
        "rgb(211, 211, 211)": "grey",
    }

    const secretArray = () => {
        var colours = ["red", "blue", "green", "yellow", "grey", "pink"];

        for (let i = 0; i < 2; i++) {
            colours.splice(Math.floor(Math.random() * colours.length), 1);
            colours.sort(() => (Math.random() > .5) ? 1 : -1)
            colours.sort(() => (Math.random() > .5) ? 1 : -1)
            colours.sort(() => (Math.random() > .5) ? 1 : -1)
            colours.sort(() => (Math.random() > .5) ? 1 : -1)
            colours.sort(() => (Math.random() > .5) ? 1 : -1)
        }
        return colours;
    }

    console.log(secretArray())

    for (let i = 0; i <= 31; i++) {
        cellContainer.innerHTML += `<div class="cell" id="cell-${i}"></div>`;
    }

    for (let i = 0; i <= 31; i++) {
        pegContainer.innerHTML += `<div class="peg" id="peg-${i}"></div>`;
    }

    populatePalette = document.querySelectorAll(".color");
    populatePalette.forEach(c => {
        let color = c.id;
        c.style.backgroundColor = color;
    });

    // document.querySelectorAll(".color") = (c) => {
    //     let color = c.id;
    //     currentColor = color;

    //     currentColor.style.backgroundColor = color;

    // colorAssortment = document.querySelectorAll(".color");
    let colorSquare = document.querySelector(".current-color");
    // let colorSquare = document.querySelector(".current-color");
    document.querySelectorAll(".color").forEach(item => item.addEventListener("click", () => {
        selectedColor = item.id;
        colorSquare.style.backgroundColor = selectedColor;
    }))

    document.querySelectorAll(".cell").forEach(item => item.addEventListener("click", () => {
        
        // if (isValid(id)) {
            item.style.backgroundColor = colorSquare.style.backgroundColor;
        // }
    }))

    function changeCurrentRow() {
        currentRow -= 1;
        var mult = 4;

        currentBoardCells = [ 
            "board" + (currentRow * mult - 4),
            "board" + (currentRow * mult - 3),
            "board" + (currentRow * mult - 2),
            "board" + (currentRow * mult - 1)
        ]

        currentPegCells = [ 
            "peg" + (currentRow * mult - 4),
            "peg" + (currentRow * mult - 3),
            "peg" + (currentRow * mult - 2),
            "peg" + (currentRow * mult - 1)
        ]
    }

    function isValid(id) {
        if (currentBoardCells.includes(id) && hasWon === false) {
            return true;
        }
        return false;
    }

    function checkWin() {
        if (cell1Color === secretArray[0] &&
            cell2Color === secretArray[1] &&
            cell3Color === secretArray[2] &&
            cell4Color === secretArray[3]) {

            hasWon = true;
            window.alert("Congrats");

            const secretcode1 = document.getElementById("secret-color-1")
            const secretcode2 = document.getElementById("secret-color-2")
            const secretcode3 = document.getElementById("secret-color-3")
            const secretcode4 = document.getElementById("secret-color-4")

            secretcode1.style.backgroundColor = secretArray[0];
            secretcode2.style.backgroundColor = secretArray[1];
            secretcode3.style.backgroundColor = secretArray[2];
            secretcode4.style.backgroundColor = secretArray[3];
        }
        return hasWon;
    }
}

// const selectedButton = document.querySelectorAll(".img-ball");
// selectedButton.forEach(ball => { 
//     const colour = ball.id;
//     ball.addEventListener("click", () => pickUpColour(colour))
// })

// function generateArray() {
//     var colours = ["Red", "Blue", "Green", "Yellow", "Grey", "Pink"];

//     for (let i = 0; i < 2; i++) {
//         colours.splice(Math.floor(Math.random() * colours.length), 1);
//         colours.sort(() => (Math.random() > .5) ? 1 : -1)
//     }

//     console.log(colours);
//     return colours;
// }