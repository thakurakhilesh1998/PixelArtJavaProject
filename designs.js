// Select color input

const submitBtn=document.getElementById('sizePicker');

// Select size input

const btn=document.getElementById('submitBtn');
const table=document.getElementById('pixelCanvas');

//action when form is submitted
function makeGrid(e) {
    e.preventDefault();
    const height=document.getElementById('inputHeight').value;
    const width=document.getElementById('inputWidth').value;
    if (table.rows.length==0)
    {
         createTable(width,height);
    }
    else
    {
        let tabelRows=table.rows.length;
        while (tabelRows>-1)
        {
            table.deleteRow(tabelRows-1);
            tabelRows--;
        }
        createTable(width,height);
    }
}


//function to create the table
function createTable(width,height)
{
    for(let rows=0;rows<height;rows++)
    {
        const newRow=table.insertRow()
        for (let columns=0;columns<width;columns++)
        {
            newRow.insertCell();
        }
    }

document.querySelectorAll('#pixelCanvas td')
.forEach(e => e.addEventListener("click", function() {
    const color=document.getElementById('colorPicker').value;
    e.style.background =color;
}));
}

