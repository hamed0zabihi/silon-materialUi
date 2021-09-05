import React from "react";
import { BrowserRouter } from "react-router-dom";
import Index from "./routes";
//test
const App = () => {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
};
export default App;
