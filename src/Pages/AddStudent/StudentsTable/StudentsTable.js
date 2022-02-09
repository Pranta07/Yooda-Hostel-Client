import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";
import SingleStudent from "../SingleStudent/SingleStudent";

const StudentsTable = ({ students, setIsUpdated, setIsDeleted }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleStatus = (status) => {
        // console.log(status);
    };

    return (
        <>
            <div className="hidden md:block">
                <div className="w-1/2 mx-auto rounded p-2 bg-green-200 text-black font-semibold tracking-widest">
                    <span className="text-sm">
                        {selectedItems.length} items selected.
                    </span>
                </div>
                <div className="ml-4 flex justify-end items-center md:ml-6">
                    <Menu as="div" className="ml-3 relative">
                        <div className="flex items-center mr-9 mb-2">
                            <span className="text-sm pr-3 font-semibold tracking-widest">
                                Update Status
                            </span>
                            <Menu.Button className="max-w-xs bg-gray-100 hover:bg-pink-400 p-2 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-400 focus:ring-white">
                                <DotsVerticalIcon className="hover:text-white inline h-5 w-5"></DotsVerticalIcon>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-pink-400 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                <Menu.Item>
                                    <button
                                        onClick={() => handleStatus("active")}
                                        className="font-semibold tracking-widest hover:bg-gray-800 text-white block w-full px-4 py-2 text-sm"
                                    >
                                        Mark as active
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                        onClick={() => handleStatus("inActive")}
                                        className="font-semibold tracking-widest hover:bg-gray-800 text-white block w-full px-4 py-2 text-sm"
                                    >
                                        Mark as inActive
                                    </button>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>

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
                                        ></th>
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
                                    {students?.map((student) => (
                                        <SingleStudent
                                            key={student._id}
                                            student={student}
                                            setIsUpdated={setIsUpdated}
                                            setIsDeleted={setIsDeleted}
                                            setSelectedItems={setSelectedItems}
                                        ></SingleStudent>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentsTable;
