export async function submit(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username + " : " + password);

    const json = {
        username: username,
        password: password
    }

    const body = JSON.stringify(json)

    document.getElementById("loginForm").reset()
    const results = fetch("http://localhost:3000/login", {
        method: 'POST',
        body,
        headers: {"Content-Type": "application/json"}
    })

    localStorage.setItem("username", username);

    window.location.href = "homePage.html"
}