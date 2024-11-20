import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EditbleStateProvider } from './GlobalStates.jsx/EditbleState';
import Platform from './platform/platform';
import websitesDB from './db/websiteDB';
import Signin from './platform/Signin'
import Confirmemail from './platform/confirmemail';
import Myaccount from './platform/myaccount'
function App() {

  return (
    <EditbleStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Platform />} />
          {websitesDB.map((website, inx) => (
            <Route path={`/${website.name}/*`} element={<website.component />} key={inx} />
          ))}
           <Route path="/Signin-Page" element={<Signin />} />
           <Route path="/Confirm-email" element={<Confirmemail />} />
           <Route path="/My-Account" element={<Myaccount />} />
         {   /*   
                
                 <Route path="/Log-in" element={<LogingPage />} /> 
        */}
        </Routes>
      </Router>
    </EditbleStateProvider>
  );
}

export default App;
