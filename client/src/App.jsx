import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Landing />
            </MainLayout>
          }
        />
        <Route
          path="/app"
          element={
            <MainLayout>
              <Main />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
