/* Code to get the dom elements into your javascript so that
we can manipulate these accordings to our needs
Here i fetch the dom elements by using their ids and manipulate them
*/

const submitBtn = document.getElementById("sizePicker");
const btn = document.getElementById("submitBtn");
const table = document.getElementById("pixelCanvas");

/* This function will be called when user submit the form
and can fetch the input entered by the user and create the 
tabel according to that data
*/

function makeGrid(e) {
    e.preventDefault();
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    if (table.rows.length == 0) {
        createTable(width, height);
    } else {
        let tabelRows = table.rows.length;
        while (tabelRows > -1) {
            table.deleteRow(tabelRows - 1);
            tabelRows--;
        }
        createTable(width, height);
    }
}

//function to create the table

function createTable(width, height) {
    for (let rows = 0; rows < height; rows++) {
        const newRow = table.insertRow();
        for (let columns = 0; columns < width; columns++) {
            newRow.insertCell();
        }
    }

    /*function to add listener to the table columns so
  that user click on any table cell the color of the cell will change
  */

    document.querySelectorAll("#pixelCanvas td").forEach((e) =>
        e.addEventListener("click", function () {
            const color = document.getElementById("colorPicker").value;
            e.style.background = color;
        })
    );
}
