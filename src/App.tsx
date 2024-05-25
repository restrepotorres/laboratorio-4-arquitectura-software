import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GatePanel from "./GatePanel";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#181A1B",
    },
    primary: { main: "#488bbf" },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/admin" element={<GatePanel admin={true} />} />
          <Route path="/*" element={<GatePanel admin={false} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
