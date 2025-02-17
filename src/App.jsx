import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
      <>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <form id="form">
              <div>
                  <label htmlFor="title" className="block mb-2 text-base font-medium text-white-900 dark:text-white">Enter the Game&#39;s Title</label>
                  <input type="text" id="title"
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-96"
                         placeholder="Game Title" required/>
              </div>
              <br/>
              <div>
                  <label htmlFor="genre" className="block mb-2 text-base font-medium text-white-900 dark:text-white">Enter the Game&#39;s Genre</label>
                  <input type="text" id="genre"
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-96"
                         placeholder="Game Genre" required/>
              </div>
              <br/>
              <label htmlFor="online" className="block mb-2 text-base font-medium text-white-900 dark:text-white">Is the Game Online?</label>
              <select id="online"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-96">
                  <option selected>Yes or No?</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
              </select>
              <br/>
              <div>
                  <label htmlFor="year" className="block mb-2 text-base font-medium text-white-900 dark:text-white">What year did the Game Release?</label>
                  <input type="number" id="year"
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-96"
                         placeholder="" required/>
              </div>
              <br/>
              <div className="ml-13">
                  <button type="button"
                          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit
                  </button>
              </div>
          </form>
          <br/><br/>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <br/>
      </>
  )
}


export default App
