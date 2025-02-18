import "./App.css"
import {submit} from "../public/Scripts/login.js";

function Login() {
    return (
        <>
        <br/>
        <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Login</h1>
        <form id="loginForm">
            <div className="flex justify-center">
                <label htmlFor="username" className="text-center block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Username
                    <input type="text" id="username" className="submitInput mr-65 text-center bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-96" placeholder="Username" required/>
                </label>
                <br/>
                <label htmlFor="password" className="text-center block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Password
                    <input type="text" id="password" className="submitInput mr-65 text-center bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-96" placeholder="Password" required/>
                </label>
            </div>
            <br/>
            <div className="flex justify-center">
                <button type="button" id="submit" className="mr-25 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2" onClick={submit}>Sign In
                </button>
            </div>
        </form>
            <div className="flex justify-center">
                <a href="https://a4-thomasbranchaud-backend.onrender.com/auth/github">
                    <button type="button" id="github"
                            className="mr-25 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2">Sign
                        In With Github
                    </button>
                </a>
            </div>
        </>
    )
}

export default Login