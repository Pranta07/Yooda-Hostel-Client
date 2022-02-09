import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddStudent = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdded, setIsAdded] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [pageNum, setPageNum] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setIsAdded(false);
        fetch("http://localhost:5000/addStudent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("New Student Enrolled!");
                    setIsAdded(true);
                    reset();
                } else {
                    alert("Try Again! Something Went Wrong!");
                }
            });
    };

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/students?page=${pageNum}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setPageCount(Math.ceil(data.count / 5));
                setStudents(data.students);
            });
    }, [isAdded, isUpdated, isDeleted, pageNum]);

    return (
        <div className="container mx-auto text-left grid grid-cols-1 gap-4 w-1/2">
            <div>
                <h1 className="uppercase tracking-widest text-3xl m-5 md:m-8 pb-2 border-b-4 border-gray-900">
                    Add New Student
                </h1>
                <div className="mt-10 sm:mt-0 mx-5 md:mx-8">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="shadow-lg overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Full name{" "}
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                {...register("fullName", {
                                                    required: true,
                                                })}
                                                className="mt-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Roll{" "}
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                {...register("roll", {
                                                    required: true,
                                                })}
                                                className="mt-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Age{" "}
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                {...register("age", {
                                                    required: true,
                                                })}
                                                className="mt-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Class{" "}
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                {...register("class", {
                                                    required: true,
                                                })}
                                                autoComplete="address-level1"
                                                className="mt-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Hall Name{" "}
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                {...register("hall", {
                                                    required: true,
                                                })}
                                                className="mt-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Status{" "}
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                {...register("status", {
                                                    required: true,
                                                })}
                                                className="mt-1 block w-full py-2 px-3 border bg-gray-100 focus:outline-pink-500 rounded-md shadow-sm sm:text-sm"
                                            >
                                                <option value="active">
                                                    Active
                                                </option>
                                                <option value="inActive">
                                                    InActive
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-md shadow-lg">
                                    <button
                                        type="submit"
                                        className="uppercase bg-pink-500 text-white tracking-wider px-8 py-3 my-4 hover:bg-gray-900 cursor-pointer"
                                    >
                                        Enroll Student
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;
