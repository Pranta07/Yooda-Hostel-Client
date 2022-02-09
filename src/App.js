import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AddFood from "./Pages/AddFood/AddFood/AddFood";
import DistributeFood from "./Pages/DistributeFood/DistributeFood/DistributeFood";
import NotFound from "./Pages/NotFound/NotFound";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import AddStudent from "./Pages/AddStudent/AddStudent/AddStudent";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="addFood" element={<AddFood />} />
                    <Route path="addStudent" element={<AddStudent />} />
                    <Route path="disFood" element={<DistributeFood />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
