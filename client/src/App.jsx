import { useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
