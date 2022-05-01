import { useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#F0F2F5]">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
