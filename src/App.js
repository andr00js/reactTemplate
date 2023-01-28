import { BrowserRouter } from 'react-router-dom'
import Router from './components/router'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )}