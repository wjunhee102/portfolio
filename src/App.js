import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About  from "./routes/about";
import Home from "./routes/home";


 function App() {
   return (
      <HashRouter>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
   )
 }

 export default App;