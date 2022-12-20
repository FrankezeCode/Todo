const form = document.querySelector("form.add");
const itemToAdd = document.querySelector("#itemToAdd");
const ul = document.querySelector(".todo");


form.addEventListener("submit", function(event){
    event.preventDefault();
    if (itemToAdd.value) {
        const newItem =  createItem(itemToAdd.value);
        ul.appendChild(newItem);
        itemToAdd.value = "";
        itemToAdd.focus(); 
     } 
    
})

function createItem(val){
    const item = document.createElement("li");
    const span = document.createElement("span")
    const delBtn = document.createElement("button")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    span.textContent = val;
    delBtn.textContent = "delete"
    item.appendChild(span);
    item.appendChild(delBtn);
    item.appendChild(checkbox);
    delBtn.classList.add("btn-link")

    delBtn.addEventListener("click", function(){
        item.parentNode.removeChild(item);
    })


    return item
}

