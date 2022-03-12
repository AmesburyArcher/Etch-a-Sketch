const container = document.querySelector('#grid-container');
let color = 'black'

//this function takes in the input from the grid size selection
const createGrid = document.querySelectorAll('input[name="grid"]').forEach((item) => {
    item.addEventListener('change', function(e) {
        number = e.target.value
        return number;
    })
});

const gridColor = document.querySelector('#colorpicker');
gridColor.addEventListener('input', chosenColor)

//this function takes in the input from the select a color
function chosenColor(e) {
    color = e.target.value;
    return color;
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
}

//this function colours the grid
function colorGrid() {
    this.style.backgroundColor = `${color}`
}

//this function creates an eventlistener for the generated boxes/divs
function onLoadGrid() {
    let boxes = document.querySelectorAll('.boxes');
    boxes.forEach(box => box.addEventListener('mouseover', colorGrid));
}