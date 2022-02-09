import React, { Fragment, useRef } from "react";
import { PencilIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";

const StudentEditModal = ({ setIsUpdated, item, open, setOpen }) => {
    const { foodName, price } = item;
    const cancelButtonRef = useRef(null);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: { foodName, price },
    });

    const onSubmit = (data) => {
        setIsUpdated(false);
        setOpen(false);
        fetch(`http://localhost:5000/editStudent/${item._id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    alert("Student Info Updated!");
                    setIsUpdated(true);
                } else {
                    alert("Try Again!");
                }
            });
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <PencilIcon
                                            className="h-6 w-6 text-yellow-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Edit Item
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to edit
                                                this student infromation? Don't
                                                worry! Item information can be
                                                updated as many times you want!
                                            </p>
                                            <form
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Food Name{" "}
                                                    <span className="text-red-600">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    {...register("foodName", {
                                                        required: true,
                                                    })}
                                                    className="my-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                                />
                                                <label className="block text-sm font-medium text-gray-700 mt-5">
                                                    Cost Price{" "}
                                                    <span className="text-red-600">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    {...register("price", {
                                                        required: true,
                                                    })}
                                                    className="my-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                                />

                                                <div className="py-3 sm:flex sm:flex-row-reverse">
                                                    <button
                                                        type="submit"
                                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                    >
                                                        Save Changes
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        onClick={() => {
                                                            setOpen(false);
                                                            reset();
                                                        }}
                                                        ref={cancelButtonRef}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default StudentEditModal;
