import React from "react";
import { useForm } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

const AddFood = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

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
                                    Place Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="px-8">
                <h1 className="uppercase tracking-widest text-3xl my-8 pb-2 border-b-4 border-gray-900">
                    Available Food Items
                </h1>
            </div>
        </div>
    );
};

export default AddFood;
