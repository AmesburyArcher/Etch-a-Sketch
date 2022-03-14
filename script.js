const container = document.querySelector('#grid-container');
let color = 'black';
let colorChoice = 'black';

//this function takes in the input from the grid size selection
const createGrid = document.querySelectorAll('input[name="grid"]').forEach((item) => {
    item.addEventListener('change', function(e) {
        number = e.target.value
        return number;
    })
});

const gridColor = document.querySelector('#colorpicker');
gridColor.addEventListener('input', (e) => {
    colorChoice = e.target.value;
    chosenColor();
});



//this function takes in the input from the select a color
function chosenColor() {
    if(toggle.value == 'Off' && colorToggle.value == 'On') {
        color = colorChoice;
        return color;
        }
    else if (toggle.value == 'On' && colorToggle.value == 'Off') {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        color = '#' + randomColor;
        return color;
    } 
    else if (toggle.value == 'Off' && colorToggle.value == 'Off') {
        color = 'black';
        return color;
    }
}



const createButton = document.querySelector('#create-grid');
createButton.addEventListener('click', genGrid);

const clearButton = document.querySelector('#clear-input');
clearButton.addEventListener('click', clearInput);

//this function generates the grid and then calls the onLoad function
function genGrid(x) {
    createButton.removeEventListener('click', genGrid)
    x = number
    for (let i = 0; i < x; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        container.appendChild(rows);
       for(let z = 0; z < x; z++) {
        const columns = document.createElement('div');
        columns.classList.add('boxes');
        columns.style.width = `${600 / x}px`;
        columns.style.height = `${600 / x}px`;
        rows.appendChild(columns);
       }
    }
    onLoadGrid()
}

//this function clears the grid completely
function clearInput() {
    createButton.addEventListener('click', genGrid);
    document.querySelectorAll(".boxes").forEach((e) => e.parentNode.removeChild(e));

    if(gridLines.value == "Off") gridLines.value = 'On'; 
}

//this function colours the grid
function colorGrid() {
    this.style.backgroundColor = `${color}`;
    chosenColor();
}

//this function creates an eventlistener for the generated boxes/divs
function onLoadGrid() {
    let boxes = document.querySelectorAll('.boxes');
    boxes.forEach(box => box.addEventListener('mouseover', colorGrid));
}


const toggle = document.querySelector('#rainbow');
toggle.addEventListener('click', function rainbowToggle(e) {
    if(e.target.value == 'On') {
        e.target.value = 'Off';
    } else if(e.target.value == 'Off') {
        e.target.value = 'On';
        colorToggle.value = 'Off';
    }
    chosenColor();
})

const colorToggle = document.querySelector('#color-mode');
colorToggle.addEventListener('click', function colorToggle(e) {
    if(e.target.value == 'On') {
        e.target.value = 'Off';
    } else if(e.target.value == 'Off') {
        e.target.value = 'On';
        toggle.value = 'Off';
    }
    chosenColor();
})

const gridLines = document.querySelector('#grid-lines');
gridLines.addEventListener('click', function gridToggle(e) {
    if(e.target.value == 'On') {
        e.target.value = 'Off';
        document.querySelectorAll('.boxes').forEach((box) => {
            box.style.border = 'none';
        } )
    } else if(e.target.value == 'Off') {
        e.target.value = 'On';
        document.querySelectorAll('.boxes').forEach((box) => {
            box.style.border = 'solid black 1px';
        } )
    }
})