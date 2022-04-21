console.log("JS Loaded")

const userInput = document.getElementById("to-do-item");
const todoMainList = document.getElementById("items-list")

userInput.addEventListener("change", (event)=>{
    // 1. Create the element 
    const newTodoElement = document.createElement("li")
    // 2. Fill out the properties and the text
    newTodoElement.textContent = event.target.value
    newTodoElement.classList.add("todoitem")
    // 3. Make it appear in the DOM by chosing a parent
    todoMainList.appendChild(newTodoElement) // .insertBefore()
    event.target.value =""
})

function handleClearAll(){
    // A trick in HTML is you can have the first and last child from a parent 
    while (todoMainList.firstChild){
        todoMainList.removeChild(todoMainList.lastChild);
    }
}

const clearButton = document.getElementById("all-done");

clearButton.addEventListener("click", handleClearAll);