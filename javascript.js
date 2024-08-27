const container = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    container.textContent = "";
    let squares = prompt("Type the number of squares you would like on each side.");
    drawSquares(parseInt(squares));
});

drawSquares();

function drawSquares(squares=16) {
    for (let i = 0; i < squares; ++i) {
        const row_container = document.createElement("div");
        container.appendChild(row_container);
        row_container.style.display = "flex";
        row_container.classList.add = "row" + i;
    
        for (let j = 0; j < squares; ++j) {
            const column_container = document.createElement("div");
            column_container.style.flex = "1 1 0%";
            column_container.classList.add = "box" + i + j;
            column_container.addEventListener("mouseenter", () => {
                column_container.style.backgroundColor = "red";
            });
            row_container.style.height = (row_container.offsetWidth)/squares+ "px";
            row_container.appendChild(column_container);
        }
    }
}