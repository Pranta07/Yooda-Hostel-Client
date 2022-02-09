import React, { useState } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import StudentEditModal from "../StudentEditModal/StudentEditModal";
import DeleteModal from "../../AddFood/DeleteModal/DeleteModal";

const SingleStudent = ({ student, setIsUpdated, setIsDeleted }) => {
    const [open, setOpen] = useState(false);
    const [dmopen, setDmOpen] = useState(false);
    const { fullName, roll, age, hall, status } = student;

    const handleSelect = () => {
        console.log(student.roll);
    };

    return (
        <>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-left">
                <td className="ml-2 px-6 py-4">
                    <input type="checkbox" onSelect={handleSelect} />
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    {fullName}
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    {roll}
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    {age}
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    {student.class}
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    {hall}
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    {status}
                </td>
                <td
                    onClick={() => setOpen(true)}
                    className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap hover:text-yellow-400"
                >
                    <PencilAltIcon className="inline h-5 w-5"></PencilAltIcon>
                </td>
                <td
                    onClick={() => setDmOpen(true)}
                    className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap hover:text-red-600"
                >
                    <TrashIcon className="inline h-5 w-5"></TrashIcon>
                </td>
            </tr>

            {/*Edit Modal */}
            <StudentEditModal
                student={student}
                setIsUpdated={setIsUpdated}
                open={open}
                setOpen={setOpen}
            ></StudentEditModal>
            <DeleteModal
                id={student._id}
                type="student"
                setIsDeleted={setIsDeleted}
                open={dmopen}
                setOpen={setDmOpen}
            ></DeleteModal>
        </>
    );
};

export default SingleStudent;
