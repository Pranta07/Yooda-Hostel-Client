import React from "react";

const StudentProfile = ({ student, loading }) => {
    const { fullName, roll, age, hall, status } = student;

    return (
        <div>
            <h1 className="uppercase tracking-widest text-3xl mx-5 md:mx-8 pb-2 border-b-4 border-gray-900">
                Student Profile
            </h1>

            <div className="relative mx-10 mt-4 shadow-md p-10 bg-gray-100 rounded-lg">
                {status === "active" && (
                    <span class="flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-3 w-3 top-0 right-0 rounded-full bg-sky-400 opacity-75"></span>
                        <span class="absolute inline-flex rounded-full h-3 w-3 top-0 right-0 bg-sky-500"></span>
                    </span>
                )}
                <p className="font-semibold tracking-widest p-2 bg-pink-200 mb-2 rounded-md">
                    Name: {fullName}
                </p>
                <p className="font-semibold tracking-widest p-2 bg-pink-200 mb-2 rounded-md">
                    Roll: {roll}
                </p>
                <p className="font-semibold tracking-widest p-2 bg-pink-200 mb-2 rounded-md">
                    Class: {student.class}
                </p>
                <p className="font-semibold tracking-widest p-2 bg-pink-200 mb-2 rounded-md">
                    Age: {age}
                </p>
                <p className="font-semibold tracking-widest p-2 bg-pink-200 mb-2 rounded-md">
                    Hall Name: {hall}
                </p>
                <p className="font-semibold tracking-widest p-2 bg-pink-200 mb-2 rounded-md">
                    Status: {status}
                </p>
            </div>
        </div>
    );
};

export default StudentProfile;
