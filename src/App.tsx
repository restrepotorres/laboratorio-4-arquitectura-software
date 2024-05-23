import { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import GateCard from "./GateCard";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AdminScreen from "./AdminScreen";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#181A1B",
      paper: "#0C1219",
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<AdminScreen />} />
          <Route path="/client" element={<GateCard admin={false} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
