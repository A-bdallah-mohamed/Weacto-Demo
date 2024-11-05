import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EditbleStateProvider } from './GlobalStates.jsx/EditbleState';
import Platform from './platform/platform';
import websitesDB from './db/websiteDB';
import Register from './platform/Register'
function App() {

  return (
    <EditbleStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Platform />} />
          {websitesDB.map((website, inx) => (
            <Route path={`/${website.name}/*`} element={<website.component />} key={inx} />
          ))}
           <Route path="/Register-Page" element={<Register />} />
         {   /*   
                
                 <Route path="/Log-in" element={<LogingPage />} /> 
        */}
        </Routes>
      </Router>
    </EditbleStateProvider>
  );
}

export default App;
