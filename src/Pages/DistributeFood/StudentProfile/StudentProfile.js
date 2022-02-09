import React from "react";

const StudentProfile = ({ student }) => {
    const { fullName, roll, age, hall, status } = student;

    return (
        <div>
            <h1 className="uppercase tracking-widest text-3xl mx-5 md:mx-8 pb-2 border-b-4 border-gray-900">
                Student Profile
            </h1>

            <div className="relative mx-20 mt-4 shadow-md p-6 bg-gray-50 rounded-lg">
                {status === "active" && (
                    <span className="flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-4 w-4 top-0 right-0 rounded-full bg-green-300 opacity-75"></span>
                        <span className="absolute inline-flex rounded-full h-4 w-4 top-0 right-0 bg-green-400"></span>
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
