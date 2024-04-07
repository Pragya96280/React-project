import Jsx , {Greet} from "./Containers/jsx";
import Databinding from "./Containers/Databinding";
import Users from './Containers/Users';
import {Routes, NavLink, Route} from 'react-router-dom';

function App(){
  return (
    <div>
      <nav className ="navbar navbar-expand navbar-light bg-light">
        <ul className = "nav navbar-nav">
          <li className ="nav-item">
            <NavLink className ="nav-link" to="/jsx">jsx</NavLink>
          </li>
          <li className ="nav-item">
            <NavLink className ="nav-link" to="/Users">Users</NavLink>
          </li>
          <li className ="nav-item">
            <NavLink className ="nav-link" to="/binding">Databinding</NavLink>
          </li>
        </ul>
      </nav>
      <div className = "container">
      <Routes>
        <Route path= "/" element = {<Jsx/>}></Route>
        <Route path= "/binding" element = {<Databinding/>}></Route>
        <Route path= "/Users" element = {<Users/>}></Route>
      </Routes>
    </div>
    </div>
  )
}

export default App; 