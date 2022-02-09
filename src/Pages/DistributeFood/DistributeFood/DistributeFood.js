import React, { useState } from "react";
import SearchStudent from "../SearchStudent/SearchStudent";
import StudentProfile from "../StudentProfile/StudentProfile";

const DistributeFood = () => {
    const [roll, setRoll] = useState("");
    const [student, setStudent] = useState({});
    const [loading, setLoading] = useState(true);

    const handleSearch = () => {
        setLoading(true);
        fetch(`http://localhost:5000/student/${roll}`)
            .then((res) => res.json())
            .then((data) => setStudent(data))
            .finally(() => setLoading(false));
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
                {!loading && (
                    <StudentProfile student={student}></StudentProfile>
                )}
                {loading && (
                    <svg
                        class="animate-spin h-5 w-5 bg-pink-300 mx-auto"
                        viewBox="0 0 24 24"
                    ></svg>
                )}
            </div>
        </div>
    );
};

export default DistributeFood;
