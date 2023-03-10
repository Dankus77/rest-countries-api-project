import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Countries from './components/Countries/Countries'
import Country from './components/Countries/Country';
import Header from './components/Header/Header'


function App() {
  return (
   <Router>
   <Header/>
   <Routes>
   <Route exact path='/' element={
    <div>
      <Countries/>
    </div>
   } />
   <Route path='/countries/:name' element={<Country />} />
   
   </Routes>
   
   
   </Router>
  )
}

export default App