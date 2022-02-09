import React from "react";
import SingleStudent from "../SingleStudent/SingleStudent";

const StudentsTable = ({ students, setIsUpdated, setIsDeleted }) => {
    return (
        <div className="flex flex-col overflow-x-scroll">
            <div className="mx-2">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="">
                        <table className="min-w-full">
                            <thead className="bg-gray-100 border border-gray-900">
                                <tr>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Full Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Roll
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Age
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Class
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Hall
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <SingleStudent
                                        key={student._id}
                                        student={student}
                                        setIsUpdated={setIsUpdated}
                                        setIsDeleted={setIsDeleted}
                                    ></SingleStudent>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentsTable;
