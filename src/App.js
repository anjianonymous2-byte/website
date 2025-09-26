import React from "react";
import HomePage from "./pages/HomePage";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Toaster />
    </div>
  );
}

export default App;