import './app.css'
import './global/components.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './global/router'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )}
