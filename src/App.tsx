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
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/server" element={<AdminScreen admin={true} />} />
          <Route path="/cliente" element={<AdminScreen admin={true} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
