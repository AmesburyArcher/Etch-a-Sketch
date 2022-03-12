const container = document.querySelector('#grid-container');


const createGrid = document.querySelectorAll('input[name="grid"]').forEach((item) => {
    item.addEventListener('change', function(e) {
        number = e.target.value
        return number;
    })
});

const createButton = document.querySelector('#create-grid');
createButton.addEventListener('click', genGrid);

const clearButton = document.querySelector('#clear-input');
clearButton.addEventListener('click', clearInput);

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
}

function clearInput() {
    createButton.addEventListener('click', genGrid);
    document.querySelectorAll(".boxes").forEach((e) => e.parentNode.removeChild(e));
}