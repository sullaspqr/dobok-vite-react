import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { List } from './List'
import { Single } from './Single'
import { New } from './New'

import './App.css'

export const App = () => {
 
  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? ' active' : '')}>
              <span className="nav-link">Lista</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/new'} className={({isActive}) => "nav-link" + (isActive ? ' active' : '')}>
              <span className="nav-link">Új dob</span></NavLink>
            </li>
          </ul>
        </div>
      </nav>
       <Routes>
         <Route path="/" element={<List />} />
         <Route path="/new" element={<New />} />
         <Route path="/single/:dobId" element={<Single />} />
       </Routes>
    </Router>
     
    </>
  )
}

export default App
