import React, { useState } from "react";
import Swal from "sweetalert2";
import DistributionForm from "../DistributionForm/DistributionForm";
import SearchStudent from "../SearchStudent/SearchStudent";
import StudentProfile from "../StudentProfile/StudentProfile";

const DistributeFood = () => {
    const [roll, setRoll] = useState("");
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        if (roll) {
            setLoading(true);
            fetch(
                `https://limitless-caverns-76166.herokuapp.com/student/${roll}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setStudent(data);
                })
                .finally(() => setLoading(false));
        } else {
            Swal.fire({
                title: "Warning!",
                text: "Search for a valid student id!",
                icon: "warning",
                timer: 2000,
            });
        }
    };

    return (
        <div>
            <h1 className="uppercase tracking-widest text-3xl m-5 md:m-8 pb-2 border-b-4 border-gray-900">
                Distribute Food to Students
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
                <div>
                    <SearchStudent
                        setRoll={setRoll}
                        handleSearch={handleSearch}
                    ></SearchStudent>
                    <DistributionForm roll={roll}></DistributionForm>
                </div>
                {!student && !loading && (
                    <p className="text-md font-semibold tracking-widest">
                        No Results Found!
                    </p>
                )}
                {!loading && student && (
                    <StudentProfile student={student}></StudentProfile>
                )}
                {loading && (
                    <svg
                        className="animate-spin h-5 w-5 bg-pink-300 mx-auto"
                        viewBox="0 0 24 24"
                    ></svg>
                )}
            </div>
        </div>
    );
};

export default DistributeFood;
