import { useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh] bg-[#F0F2F5]">
      <Navbar />
    </div>
  );
}

export default App;
