import React, { useState } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";

const SingleItem = ({ item, setIsUpdated, setIsDeleted }) => {
    const [open, setOpen] = useState(false);
    const [dmopen, setDmOpen] = useState(false);
    const { foodName, price } = item;

    return (
        <>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    {foodName}
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    Tk {price}
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
            <EditModal
                item={item}
                setIsUpdated={setIsUpdated}
                open={open}
                setOpen={setOpen}
            ></EditModal>
            <DeleteModal
                type="food"
                id={item._id}
                setIsDeleted={setIsDeleted}
                open={dmopen}
                setOpen={setDmOpen}
            ></DeleteModal>
        </>
    );
};

export default SingleItem;
