import "./App.css"
import {deleteClicked, updateClicked} from "../public/Scripts/delete.js";
import NavBar from "./navBar.jsx";

function Delete(){
    return (
        <>
            <NavBar/>
            <br/><br/>
            <b>Would you like to update an entry or delete an entry?</b>
            <div className="buttons">
                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 actionButton" id="deleteButton" onClick={deleteClicked}>Delete an Entry
                </button>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 actionButton" id="updateButton" onClick={updateClicked}>Modify an Entry
                </button>
            </div>
            <br/><br/>
            <div id="titleSelect">
            </div>
        </>
    )
}

export default Delete