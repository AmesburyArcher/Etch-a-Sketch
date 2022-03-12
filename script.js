const container = document.querySelector('#grid-container');

function genGrid(x) {

    for (let i = 0; i < x; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        container.appendChild(rows);
       for(let z = 0; z < x; z++) {
        const columns = document.createElement('div');
        columns.classList.add('columns');
           rows.appendChild(columns);
       }
    }
}

genGrid(6);