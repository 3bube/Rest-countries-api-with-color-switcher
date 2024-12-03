import { ThemeProvider } from "./context/ThemeContext";
import { CountriesProvider } from "./context/CountriesContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <RouterProvider router={router} />
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;
