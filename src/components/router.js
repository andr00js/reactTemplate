import {Route, Routes}  from 'react-router-dom'
import Content from './content'

export default function Router() { return (
    <div>
        <Routes>
          <Route path ='/' element = {<Content/>}></Route>
        </Routes>
    </div>
  )}