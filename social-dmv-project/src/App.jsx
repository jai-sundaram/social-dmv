import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import Info from './pages/Info.jsx'
import NoPage from './pages/NoPage.jsx'
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path = "/Home" element = {<Home />} />
                    <Route path = "/Info" element = {<Info />} />
                    <Route path = "*" element = {<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
