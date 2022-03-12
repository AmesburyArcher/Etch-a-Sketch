const container = document.querySelector('#grid-container');

function genGrid(x) {

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

genGrid(16);