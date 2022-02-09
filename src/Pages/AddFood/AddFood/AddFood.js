import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ExclamationCircleIcon,
} from "@heroicons/react/outline";
import FoodItemTable from "../FoodItemTable/FoodItemTable";

const AddFood = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [isAdded, setIsAdded] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [pageNum, setPageNum] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        setIsAdded(false);
        fetch("http://localhost:5000/addFood", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Food Item Added!");
                    setIsAdded(true);
                    reset();
                } else {
                    alert("Try Again! Something Went Wrong!");
                }
            });
    };

    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${pageNum}`)
            .then((res) => res.json())
            .then((data) => {
                setPageCount(Math.ceil(data.count / 5));
                setFoodItems(data.foods);
            });
    }, [isAdded, isUpdated, isDeleted, pageNum]);

    return (
        <div className="container mx-auto text-left grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
                <h1 className="uppercase tracking-widest text-3xl m-5 md:m-8 pb-2 border-b-4 border-gray-900">
                    Add New Food Item
                </h1>
                <div className="mt-10 sm:mt-0 mx-5 md:mx-8">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="block text-sm font-medium text-gray-700">
                                Food Name{" "}
                                <span className="text-red-600">*</span>
                            </label>
                            <input
                                {...register("foodName", {
                                    required: true,
                                })}
                                className="my-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                            />
                            {errors?.foodName?.type === "required" && (
                                <p className="text-red-600 ml-2 mt-2">
                                    <ExclamationCircleIcon className="inline h-5 w-5"></ExclamationCircleIcon>
                                    This field is required
                                </p>
                            )}
                            <label className="block text-sm font-medium text-gray-700 mt-5">
                                Cost Price{" "}
                                <span className="text-red-600">*</span>
                            </label>
                            <input
                                {...register("price", {
                                    required: true,
                                })}
                                className="my-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                            />
                            {errors?.price?.type === "required" && (
                                <p className="text-red-600 ml-2 mt-2">
                                    <ExclamationCircleIcon className="inline h-5 w-5"></ExclamationCircleIcon>
                                    This field is required
                                </p>
                            )}

                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-md shadow-lg">
                                <button
                                    type="submit"
                                    className="uppercase bg-pink-500 text-white tracking-wider px-8 py-3 my-4 hover:bg-gray-900 cursor-pointer"
                                >
                                    Add Item
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Food Item Table */}
            <div className="px-8">
                <h1 className="uppercase tracking-widest text-3xl my-8 pb-2 border-b-4 border-gray-900">
                    Available Food Items
                </h1>
                <>
                    <FoodItemTable
                        foods={foodItems}
                        setIsUpdated={setIsUpdated}
                        setIsDeleted={setIsDeleted}
                    ></FoodItemTable>
                    {/* pagination */}
                    <div className="my-2 flex justify-center">
                        <nav
                            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                            aria-label="Pagination"
                        >
                            <button
                                onClick={() => {
                                    pageNum > 0 && setPageNum(pageNum - 1);
                                }}
                                className="relative inline-flex items-center p-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-black hover:text-white hover:bg-pink-500"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>

                            {[...Array(pageCount).keys()].map((number) => (
                                <button
                                    key={number}
                                    onClick={() => {
                                        setPageNum(number);
                                    }}
                                    className={
                                        pageNum === number
                                            ? "bg-pink-500 border-gray-300 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                            : "bg-white border-gray-300 text-black hover:text-white hover:bg-pink-500 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    }
                                >
                                    {number}
                                </button>
                            ))}

                            <button
                                onClick={() => {
                                    pageNum < pageCount - 1 &&
                                        setPageNum(pageNum + 1);
                                }}
                                className="relative inline-flex items-center p-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-black hover:text-white hover:bg-pink-500"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </nav>
                    </div>
                </>
            </div>
        </div>
    );
};

export default AddFood;
