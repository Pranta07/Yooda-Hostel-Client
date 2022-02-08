import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AddFood from "./Pages/AddFood/AddFood/AddFood";
import AddStudent from "./Pages/AddStudent/AddStudent";
import StudentsTable from "./Pages/StudentsTable/StudentsTable";
import DistributeFood from "./Pages/DistributeFood/DistributeFood/DistributeFood";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="addFood" element={<AddFood />} />
                    <Route path="addStudent" element={<AddStudent />} />
                    <Route path="allStudents" element={<StudentsTable />} />
                    <Route path="distributeFood" element={<DistributeFood />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
