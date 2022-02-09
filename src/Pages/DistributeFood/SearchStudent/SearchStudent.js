import React from "react";

const SearchStudent = ({ setRoll, handleSearch }) => {
    const handleChange = (e) => {
        setRoll(e.target.value);
    };

    return (
        <div>
            <input
                onChange={handleChange}
                type="text"
                className="bg-gray-100 border-0 shadow-lg rounded-md"
                placeholder="Search Student by Roll"
            />
            <button
                onClick={handleSearch}
                className="bg-pink-400 hover:bg-gray-700 text-white py-2 px-3 mx-2 rounded-md"
            >
                Search
            </button>
        </div>
    );
};

export default SearchStudent;
