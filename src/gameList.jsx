import "./App.css"
import {useEffect} from "react";
import resultInfo from "../public/Scripts/resultsInfo.js";

function GameList() {

    useEffect(() => {
        console.log("Page Loaded");
        resultInfo();
    }, []);

    return (
        <>
            <br/><br/>
            <h6 className="flex items-center text-3xl font-extrabold dark:text-white">Games in the List</h6>
            <div className="relative overflow-x-auto">
                <table className="w-full text-2xl text-left rtl:text-right text-white-500 dark:text-white-400 max-w-200"
                       id="resultsTable">
                    <thead
                        className="text-2xl text-white-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Genre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Online
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Release Year
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Age
                        </th>
                    </tr>
                    </thead>
                    <tbody id="tableBody">
                    </tbody>
                </table>
                <br/><br/>
            </div>
        </>
    )
}

export default GameList