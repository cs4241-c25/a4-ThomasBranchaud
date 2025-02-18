export async function updateClicked(){
    const json = {
        username: localStorage.getItem("username")
    }
    const body = JSON.stringify(json)
    const response = await fetch("http://localhost:3000/results", {
        method: 'POST',
        body,
        headers: {"Content-Type": "application/json"}
    })

    const games = await response.json();

    const div = document.getElementById("titleSelect");
    div.innerHTML = ""
    div.style.flexDirection = "column";
    const label = document.createElement("label");
    label.for = "titleSelection";
    label.classList.add("block", "mb-2", "text-base", "font-medium", "text-gray-900", "dark:text-white");
    label.innerText = "What entry would you like to modify?"
    const select = document.createElement("select");
    select.id = "titleSelection";
    select.classList.add("bg-gray-50", "border", "border-gray-300", "text-gray-900", "text-base", "rounded-lg", "focus:ring-blue-500", "focus:border-blue-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-blue-500", "dark:focus:border-blue-500", "max-w-96");
    for (let i = 0; i < games.length; i++){
        const option = document.createElement("option");
        option.value = games[i].title;
        option.innerText = games[i].title;
        select.appendChild(option);
    }
    select.onchange = function(){
        displayFields(games)
    };
    div.appendChild(label);
    div.appendChild(select);
    const insideDiv = document.createElement("div");
    insideDiv.id = "insideDiv";
    console.log("Div Created");
    div.appendChild(insideDiv)
    await createModifyForm(games);
}


const displayFields = async function(games){
    await createModifyForm(games)
}
/*
const select = document.getElementById("titleSelection");
const newGenre = document.createElement("label");
newGenre.innerText = "Enter the New Genre";
const genreText = document.createElement("input");
genreText.type = "text";
genreText.value = games[games.findIndex(games => games.title === select.value)].genre;
genreText.id = "genreInput";
newGenre.for = "genreInput";
insideDiv.appendChild(document.createElement("br"))
insideDiv.appendChild(newGenre)
insideDiv.appendChild(genreText)

const onlineSelect = document.createElement("select")
onlineSelect.id = "onlineInput"
onlineSelect.value = games[games.findIndex(games => games.title === select.value)].online;
const on = document.createElement("option")
on.value = "true"
on.innerText = "Yes"
onlineSelect.appendChild(on)
const off = document.createElement("option")
off.value = "false"
off.innerText = "No"
onlineSelect.appendChild(off)
const newOnline = document.createElement("label")
newOnline.for = "onlineInput"
newOnline.innerText = "Is the game Online?"
insideDiv.appendChild(document.createElement("br"))
insideDiv.appendChild(document.createElement("br"))
insideDiv.appendChild(newOnline)
insideDiv.appendChild(onlineSelect)
}
*/

export async function deleteClicked(){
    const json = {
        username: localStorage.getItem("username")
    }
    const body = JSON.stringify(json)
    const response = await fetch("http://localhost:3000/results", {
        method: 'POST',
        body,
        headers: {"Content-Type": "application/json"}
    })

    const games = await response.json();

    const div = document.getElementById("titleSelect");
    div.innerHTML =""
    const label = document.createElement("label");
    label.for = "titleSelection";
    label.innerText = "What entry would you like to Delete?"
    const select = document.createElement("select");
    select.classList.add("bg-gray-50", "border", "border-gray-300", "text-gray-900", "text-base", "rounded-lg", "focus:ring-blue-500", "focus:border-blue-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-blue-500", "dark:focus:border-blue-500", "max-w-96");
    select.id = "titleSelection";
    for (let i = 0; i < games.length; i++){
        const option = document.createElement("option");
        option.value = games[i].title;
        option.innerText = games[i].title;
        select.appendChild(option);
    }
    label.classList.add("block", "mb-2", "text-base", "font-medium", "text-gray-900", "dark:text-white");
    div.appendChild(label);
    div.appendChild(select);
    const finalizeDelete = document.createElement("button");
    finalizeDelete.classList.add("text-gray-900", "bg-gradient-to-r", "from-red-200", "via-red-300", "to-yellow-200", "hover:bg-gradient-to-bl", "focus:ring-4", "focus:outline-none", "focus:ring-red-100", "dark:focus:ring-red-400", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "text-center", "me-2", "mb-2");
    const finalDiv = document.createElement("div")
    finalDiv.classList.add("ml-13")
    finalizeDelete.onclick = removeEntry;
    finalizeDelete.innerText = "Delete";
    div.appendChild(document.createElement("br"))
    div.appendChild(document.createElement("br"))
    finalDiv.appendChild(finalizeDelete)
    div.appendChild(finalDiv);
}

const removeEntry = async function (){
    const entryToDelete = document.getElementById("titleSelection").value;
    const json = {
        type: "delete",
        title: entryToDelete,
        username: localStorage.getItem("username")
    }

    const body = JSON.stringify(json);

    const response = await fetch("http://localhost:3000/delete",{
        method: 'POST',
        body,
        headers: {"Content-Type": "application/json"}
    })

    window.location.href = "homePage.html"
}

const createModifyForm = async function (games){
    console.log("Inside the Div")
    const insideDiv = document.getElementById("insideDiv")
    insideDiv.innerHTML = "";
    const select = document.getElementById("titleSelection")
    select.classList.add("bg-gray-50", "border", "border-gray-300", "text-gray-900", "text-base", "rounded-lg", "focus:ring-blue-500", "focus:border-blue-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-blue-500", "dark:focus:border-blue-500", "max-w-96");
    const newGenre = document.createElement("label");
    newGenre.classList.add("block", "mb-2", "text-base", "font-medium", "text-gray-900", "dark:text-white");
    newGenre.innerText = "Enter the New Genre";
    const genreText = document.createElement("input");
    genreText.type = "text";
    genreText.value = games[games.findIndex(games => games.title === select.value)].genre;
    genreText.id = "genreInput";
    newGenre.for = "genreInput";
    insideDiv.appendChild(document.createElement("br"))
    genreText.classList.add("bg-gray-50", "border", "border-gray-300", "text-gray-900", "text-base", "rounded-lg", "focus:ring-blue-500", "focus:border-blue-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-blue-500", "dark:focus:border-blue-500", "max-w-96");
    insideDiv.appendChild(newGenre)
    insideDiv.appendChild(genreText)

    const onlineSelect = document.createElement("select")
    onlineSelect.classList.add("bg-gray-50", "border", "border-gray-300", "text-gray-900", "text-base", "rounded-lg", "focus:ring-blue-500", "focus:border-blue-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-blue-500", "dark:focus:border-blue-500", "max-w-96");
    onlineSelect.id = "onlineInput"
    onlineSelect.value = games[games.findIndex(games => games.title === select.value)].online;
    const on = document.createElement("option")
    on.value = "true"
    on.innerText = "Yes"
    onlineSelect.appendChild(on)
    const off = document.createElement("option")
    off.value = "false"
    off.innerText = "No"
    onlineSelect.appendChild(off)
    const newOnline = document.createElement("label")
    newOnline.for = "onlineInput"
    newOnline.classList.add("block", "mb-2", "text-base", "font-medium", "text-gray-900", "dark:text-white");
    newOnline.innerText = "Is the game Online?"
    insideDiv.appendChild(document.createElement("br"))
    insideDiv.appendChild(newOnline)
    insideDiv.appendChild(onlineSelect)

    const yearField = document.createElement("input")
    yearField.id = "yearField"
    yearField.value = games[games.findIndex(games => games.title === select.value)].releaseYear
    const yearLabel = document.createElement("label")
    yearLabel.for = "yearField"
    yearLabel.classList.add("block", "mb-2", "text-base", "font-medium", "text-gray-900", "dark:text-white");
    yearLabel.innerText = "Enter the new Year"
    insideDiv.appendChild(document.createElement("br"))
    yearField.classList.add("bg-gray-50", "border", "border-gray-300", "text-gray-900", "text-base", "rounded-lg", "focus:ring-blue-500", "focus:border-blue-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-blue-500", "dark:focus:border-blue-500", "max-w-96");
    insideDiv.appendChild(yearLabel)
    insideDiv.appendChild(yearField)

    const submitDiv = document.createElement("div")
    submitDiv.classList.add("ml-13");
    const submitButton = document.createElement("button")
    submitButton.onclick = submitModifiedEntry
    submitButton.innerText = "Submit"
    submitButton.classList.add("text-gray-900", "bg-gradient-to-r", "from-red-200", "via-red-300", "to-yellow-200", "hover:bg-gradient-to-bl", "focus:ring-4", "focus:outline-none", "focus:ring-red-100", "dark:focus:ring-red-400", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "text-center", "me-2", "mb-2");
    insideDiv.appendChild(document.createElement("br"))
    submitDiv.appendChild(submitButton);
    insideDiv.appendChild(submitDiv)

}

const submitModifiedEntry = async function(){
    const title = document.getElementById("titleSelection").value
    const genre = document.getElementById("genreInput").value
    const online = document.getElementById("onlineInput").value
    const year = document.getElementById("yearField").value

    const json = {
        type: "modify",
        title: title,
        genre: genre,
        online: online,
        releaseYear: year,
        username: localStorage.getItem("username")
    }

    const body = JSON.stringify(json)

    await fetch ("http://localhost:3000/modify", {
        method: 'POST',
        body,
        headers: {"Content-Type": "application/json"}
    })

    window.location.href = "homePage.html"

}