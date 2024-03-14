import ReactDOM from "react-dom/client";
import React from "react";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

import "shared/config/i18n/i18n";

ReactDOM.createRoot(
    document.getElementById("root"),
).render(
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>,
    );