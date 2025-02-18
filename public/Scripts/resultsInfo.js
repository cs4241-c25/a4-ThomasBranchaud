async function resultInfo () {
    const user = await fetch("http://localhost:3000/user", {
        method: 'POST',
        headers: {"Content-Type": "application/json"}
    })


    localStorage.setItem("username", await user.json())
    localStorage.getItem('username')
    console.log(localStorage.getItem('username'))

    const json = {
        username: localStorage.getItem("username")
    }
    const body = JSON.stringify(json)

    const response = await fetch ("http://localhost:3000/results",{
        method : 'POST',
        body,
        headers: {"Content-Type": "application/json"}
    })

    const games = await response.json()
    console.log(games)
    const table = document.getElementById("tableBody")
    for (let i = 0; i < games.length; i++){
        const title = document.createElement("td")
        title.innerText = games[i].title;
        const genre = document.createElement("td")
        genre.innerText = games[i].genre;
        const online = document.createElement("td")
        if (games[i].online === true){
            online.innerText = "Yes";
        }
        else {
            online.innerText = "No";
        }
        const year = document.createElement("td")
        year.innerText = games[i].releaseYear;
        const age = document.createElement("td")
        age.innerText = games[i].age;

        const tr = document.createElement("tr")
        tr.classList.add("bg-white");
        tr.classList.add("border-b");
        tr.classList.add("dark:bg-gray-800");
        tr.classList.add("dark:border-gray-700");
        tr.classList.add("border-gray-200");
        title.scope = "row";
        title.classList.add("px-6", "py-4");
        title.classList.add("font-medium");
        title.classList.add("text-gray-900")
        title.classList.add("whitespace-nowrap")
        title.classList.add("dark:text-white");
        genre.classList.add("px-6", "py-4");
        online.classList.add("px-6", "py-4");
        year.classList.add("px-6", "py-4");
        age.classList.add("px-6", "py-4");
        tr.appendChild(title)
        tr.appendChild(genre)
        tr.appendChild(online)
        tr.appendChild(year)
        tr.appendChild(age)
        table.appendChild(tr)
    }
}

export default resultInfo