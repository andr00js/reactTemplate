import { BrowserRouter } from 'react-router-dom'
import Router from './pages/router'
import './app.css'
import './components/components.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )}