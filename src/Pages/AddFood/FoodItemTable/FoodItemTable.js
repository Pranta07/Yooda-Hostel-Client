import React from "react";
import SingleItem from "../SingleItem/SingleItem";

const FoodItemTable = ({ foods, setIsUpdated, setIsDeleted }) => {
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
                                        Food Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Food Price
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
                                {foods.map((item) => (
                                    <SingleItem
                                        key={item._id}
                                        item={item}
                                        setIsUpdated={setIsUpdated}
                                        setIsDeleted={setIsDeleted}
                                    ></SingleItem>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItemTable;
