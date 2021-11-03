import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme";
import "@fontsource/dm-sans";
import {routes} from "./routes";
import {renderRoutes} from "react-router-config";

function App() {
    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    {renderRoutes(routes)}
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;