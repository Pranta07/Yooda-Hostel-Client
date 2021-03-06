import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AvailableFoods from "../AvailableFoods/AvailableFoods";

const DistributionForm = ({ roll }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        if (roll) {
            data.studentId = roll;
            data.foodItemList = selectedItems;
            data.status = "served";
            // console.log(data);
            fetch("https://limitless-caverns-76166.herokuapp.com/disFood", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.insertedId) {
                        Swal.fire({
                            title: "Well done!",
                            text: "Served Foods Successfully!",
                            icon: "success",
                            timer: 1500,
                        });
                        reset();
                    } else {
                        Swal.fire({
                            title: "Warning!",
                            text: result.msg,
                            icon: "warning",
                            timer: 2000,
                        });
                    }
                });
        } else {
            Swal.fire({
                title: "Warning!",
                text: "Search for a valid student id!",
                icon: "warning",
                timer: 2000,
            });
        }
    };

    return (
        <div className="mx-10 my-5 text-left">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow-lg overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-gray-50 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-medium text-gray-700">
                                    Shift{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <select
                                    {...register("shift", {
                                        required: true,
                                    })}
                                    className="mt-1 block w-full py-2 px-3 bg-gray-100 border rounded-md shadow-sm sm:text-sm"
                                >
                                    <option value="morning">Morning</option>
                                    <option value="day">Day</option>
                                    <option value="night">Night</option>
                                </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-medium text-gray-700">
                                    Date <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="date"
                                    {...register("date", {
                                        required: true,
                                    })}
                                    className="mt-1 p-2 border bg-gray-100 block w-full shadow-md sm:text-sm rounded-md"
                                />
                            </div>

                            <div className="col-span-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Add Food Items{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <AvailableFoods
                                    selectedItems={selectedItems}
                                    setSelectedItems={setSelectedItems}
                                ></AvailableFoods>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-2 bg-white text-right sm:px-6 rounded-md shadow-lg">
                        <button
                            type="submit"
                            className="uppercase bg-pink-500 text-white tracking-wider px-8 py-3 my-4 hover:bg-gray-900 cursor-pointer"
                        >
                            Serve Food
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DistributionForm;
