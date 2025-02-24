const text = document.querySelector(".text");   // get the class="text" div in HTML and store as a const
const list = document.querySelector(".list");
const button = document.querySelector(".button");

function newtask (){
    if (text.value === ""){ // === strictly compare, including type
        return;
    }
    
    const task = document.createElement("li");
    task.innerHTML=`
        <input type="checkbox" class="checkBox">
        <label>${text.value}</label>
        <button class="trashBin">🗑️🗑️</button>
    `
    const trashbin = task.querySelector(".trashBin");
    const checkbox = task.querySelector(".checkBox");

    trashbin.addEventListener("click", function(){
        task.remove();
    });

    checkbox.addEventListener("change", function(){
        if (checkbox.checked){
            task.style.textDecoration = "line-through";
            task.style.color = "#999";
            list.append(task);
        }else{
            task.style.textDecoration = "none";
            task.style.color = "";
            list.prepend(task);
        }
    });

    list.append(task);
    text.value = "";
}


button.addEventListener("click", newtask);

text.addEventListener("keyup", function(e){
    if (e.key === "Enter"){
        newtask();
    }
});