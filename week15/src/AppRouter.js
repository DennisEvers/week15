import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import App from './App'
import Add from './Add.js'
import Edit from './Edit.js'
//all imports

// the app router is a function that houses the navigation to the forms that update add as well as the main the app
// the routes control what form appears or that you are routed to when you click on the component function
// it then routes you to that form and then when it is over you are re routed back to the main app.
// it also contains the footer at the bottom of the page and the header for the top of the page stylized all 
// with bootstrap as well as css

function AppRouter() {
    return (

        <div className='bg-light'>
            <div className='border1  p-5 pb-3'>
                <h1 className=' fs-1 fw-b text-center titletext'>Lego Set Wishlist</h1>
            </div>


        <BrowserRouter>
          
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='create' element={<Add />} />
            <Route path='update/:id' element={<Edit />} />


          </Routes>
        </BrowserRouter>

        <div>
            <hr></hr>
            <footer className='fs-3 fw-bold text-center p-1 m-1 pb-3'>Thank You and Happy Collecting!</footer>
        </div>


        </div>
        
    )
}

export default AppRouter