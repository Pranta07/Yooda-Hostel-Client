import React, { useState } from "react";
import SearchStudent from "../SearchStudent/SearchStudent";
import StudentProfile from "../StudentProfile/StudentProfile";

const DistributeFood = () => {
    const [roll, setRoll] = useState("");
    const [student, setStudent] = useState({});

    const handleSearch = () => {
        fetch(`http://localhost:5000/student/${roll}`)
            .then((res) => res.json())
            .then((data) => setStudent(data));
    };

    return (
        <div>
            <h1 className="uppercase tracking-widest text-3xl m-5 md:m-8 pb-2 border-b-4 border-gray-900">
                Distribute Food to Students
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <SearchStudent
                    setRoll={setRoll}
                    handleSearch={handleSearch}
                ></SearchStudent>
                <StudentProfile student={student}></StudentProfile>
            </div>
        </div>
    );
};

export default DistributeFood;
