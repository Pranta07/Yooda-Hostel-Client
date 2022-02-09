import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AvailableFoods = () => {
    const [foodItems, setFoodItems] = useState([]);
    const { register } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/allFoods`)
            .then((res) => res.json())
            .then((data) => {
                setFoodItems(data);
            });
    }, []);

    return (
        <div className="flex flex-wrap">
            {foodItems.map((item) => (
                <div key={item._id} className="flex items-center m-1">
                    <input
                        id={item._id}
                        name="rice"
                        type="checkbox"
                        {...register("rice", {
                            required: true,
                        })}
                        className="rounded-sm"
                    />

                    <label htmlFor={item._id} className="mx-1">
                        {item.foodName}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default AvailableFoods;
