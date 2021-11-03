import React from "react";
import {renderRoutes} from "react-router-config";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme";
import {routes} from "./routes";
import "@fontsource/dm-sans";
import './styleSheets/App.css';

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