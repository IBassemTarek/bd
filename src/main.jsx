import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import Loader from "./components/Loader";
import "./index.css";
const App = React.lazy(() => import("./App"));
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MemoryRouter>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </MemoryRouter>
    </React.StrictMode>
);
