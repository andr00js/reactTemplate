import {Route, Routes}  from 'react-router-dom'
import Home from '../pages/home.js'

export default function Router() { return (
    <div>
        <Routes>
          <Route path ='/' element = {<Home/>}></Route>
        </Routes>
    </div>
  )}