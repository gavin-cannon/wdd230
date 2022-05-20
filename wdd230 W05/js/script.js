const inputst = document.querySelector("input");
console.log(inputst);
const button = document.querySelector("button");
const list = document.querySelector("ul");
button.addEventListener("click", () => {
    const inputst = document.querySelector("input");
    let storedInput = inputst.value;

    console.log(storedInput);

    document.querySelector("input").value = "";

    const newListItem = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    newListItem.appendChild(newSpan);
    newSpan.textContent = storedInput;
    newListItem.appendChild(newButton);
    newButton.textContent = "❌";
    list.appendChild(newListItem);

    newButton.addEventListener("click", () => {
        list.removeChild(newListItem);
    });
    inputst.focus();

});