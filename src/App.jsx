import { Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Intro from "./components/Intro";
import Layout from "./components/Layout";
import Qoute1 from "./components/Qoute1";
import Qoute2 from "./components/Qoute2";
import Qoute3 from "./components/Qoute3";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="intro" element={<Intro />} />
                <Route path="q1" element={<Qoute1 />} />
                <Route path="q2" element={<Qoute2 />} />
                <Route path="q3" element={<Qoute3 />} />
            </Route>
        </Routes>
    );
}

export default App;
