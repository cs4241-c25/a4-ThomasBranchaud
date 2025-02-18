import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import './App.css'
import Login from "./login.jsx";
import HomePage from "./homePage.jsx";
import Results from "./results.jsx";
import Delete from "./delete.jsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Router>
            <Routes>
                <Route
                exact
                path="/homePage.html"
                element={<HomePage/>}
                />

                <Route
                exact
                path="/"
                element={<Login/>}
                />

                <Route
                exact
                path="/results.html"
                element={<Results/>}
                />

                <Route
                exact
                path="/delete.html"
                element={<Delete/>}
                />

                <Route
                    path="*"
                    element={<Navigate to ="/"/>}
                />
            </Routes>
        </Router>
    </>
  )
}


export default App
