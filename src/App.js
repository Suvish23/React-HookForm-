import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import { createContext } from 'react';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
export const AppContex=createContext();




function App() {
  const [userName,setUserName] = useState("Suvish");
  const client = new QueryClient();

return (
<QueryClientProvider client={client}>
<AppContex.Provider value={{userName}}>
<Router>
<NavBar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
</Router>
  </AppContex.Provider>
</QueryClientProvider>
  )
}

export default App