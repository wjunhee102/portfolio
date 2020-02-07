import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About  from "./routes/about";
import Home from "./routes/home";


 function App() {
   return (
      <HashRouter>
        <Route path="/home">
          <h1>home</h1>
        </Route>
        <Route path="/home/introduction">
          <h1>introduction</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
      </HashRouter>
   )
 }

 export default App;