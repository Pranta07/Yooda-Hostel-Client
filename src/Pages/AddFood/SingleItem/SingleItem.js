import React from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";

const SingleItem = ({ item }) => {
    return (
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                {item?.foodName}
            </td>
            <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                Tk {item?.price}
            </td>
            <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                <PencilAltIcon className="inline h-5 w-5"></PencilAltIcon>
            </td>
            <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                <TrashIcon className="inline h-5 w-5"></TrashIcon>
            </td>
        </tr>
    );
};

export default SingleItem;
