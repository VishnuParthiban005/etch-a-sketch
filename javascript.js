const container = document.querySelector(".container");

for (let i = 0; i < 16; ++i) {
    const row_container = document.createElement("div");
    container.appendChild(row_container);
    row_container.style.display = "flex";
    row_container.classList.add = "row" + i;
    row_container.style.border = "2px solid black";

    for (let j = 0; j < 16; ++j) {
        const column_container = document.createElement("div");
        column_container.style.flex = "1 1 0%";
        column_container.classList.add = "box" + i + j;
        column_container.style.border = "2px dashed red";
        column_container.addEventListener("mouseenter", () => {
            column_container.style.backgroundColor = "red";
        });
        row_container.style.height = "90px";
        row_container.appendChild(column_container);

    }

}