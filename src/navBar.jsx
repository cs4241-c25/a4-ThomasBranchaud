import './App.css'
//import {Link} from "react-router-dom"

function NavBar(){
    return (
        <>
            <header id="nav">
                <ul>
                    <li><h1 className="flex items-center text-5xl font-extrabold dark:text-white">List Of Games</h1></li>
                    <li><a href="homePage.html" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Home</a></li>
                    <li><a href="results.html" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Results</a></li>
                    <li><a href="delete.html" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Update/Delete an Entry</a></li>
                    <li><a href="login.html" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Login</a></li>
                </ul>
            </header>
        </>
    )
}

export default NavBar