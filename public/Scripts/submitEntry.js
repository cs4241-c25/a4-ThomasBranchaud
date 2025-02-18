async function submitEntry() {
    // stop form submission from trying to load
    // a new .html page for displaying results...
    // this was the original browser behavior and still
    // remains to this day

    console.log("Submitting Entry");

    const title = document.getElementById("title").value;
    const genre = document.querySelector("#genre").value;
    const year = document.querySelector("#year").value;
    let online;
    online = document.querySelector("#online").value === "true";

    const json = {
        title: title,
        genre: genre,
        online: online,
        releaseYear: year,
        username: localStorage.getItem("username")
    }
    console.log(json)

    const body = JSON.stringify(json)

    const response = await fetch( "https://a4-thomasbranchaud-backend.onrender.com/add", {
        method:'POST',
        body,
        headers: {"Content-Type": "application/json"}
    })
    console.log("Response received");
    const text = await response.text()
    console.log( "text:", text )
    document.getElementById("form").reset();
    window.location.reload();
}

export default submitEntry