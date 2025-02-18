import "./App.css"
import NavBar from "./navBar.jsx";
import GameEntry from "./gameEntry.jsx";
import GameList from "./gameList.jsx";
import {useEffect} from "react";
import resultInfo from "../public/Scripts/resultsInfo.js";

function HomePage(){

    useEffect(async () => {
        const results = await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
        localStorage.setItem("username", await results.json())
        localStorage.getItem('username')
        console.log(localStorage.getItem('username'))
    }, []);

    return (
        <>
            <NavBar/>
            <GameEntry/>
            <GameList/>
        </>
    )
}

export default HomePage