import './App.css';
import {Routes, Route} from 'react-router-dom'

import Home from './route/Home'
import Project from './route/Project'
import About from './route/About'
import Contact from './route/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/project' element={<Project/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
