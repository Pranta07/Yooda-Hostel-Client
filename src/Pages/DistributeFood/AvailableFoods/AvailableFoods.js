import React, { useEffect, useState } from "react";

const AvailableFoods = ({ selectedItems, setSelectedItems }) => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        fetch(`https://limitless-caverns-76166.herokuapp.com/allFoods`)
            .then((res) => res.json())
            .then((data) => {
                setFoodItems(data);
            });
    }, []);

    const handleSelect = (e, id) => {
        const checked = e.target.checked;
        // console.log(checked);
        if (checked) {
            setSelectedItems([...selectedItems, id]);
        } else {
            setSelectedItems(selectedItems.filter((fid) => fid !== id));
        }
    };

    return (
        <div className="flex flex-wrap">
            {foodItems.map((item) => (
                <div key={item._id} className="flex items-center m-1">
                    <input
                        onClick={(e) => handleSelect(e, item._id)}
                        type="checkbox"
                        id={item._id}
                        className="checked:bg-pink-400 focus:ring-pink-400 h-4 w-4 text-pink-400 border-gray-300 rounded"
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
