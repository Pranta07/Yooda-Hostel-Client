import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero-content container">
                <div className="h-screen grid grid-cols-2 items-center">
                    <div>
                        <h1 className="text-4xl">
                            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                                <span class="relative text-white">Yooda</span>
                            </span>{" "}
                            Hostel
                        </h1>
                        <p className="py-5 text-xl tracking-widest font-semibold">
                            Plan and Distribute Foods for Students.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co/8sPx9qD/A-meal-plan-for-a-week-on-a-white-table-among-products-for-cooking-pastas-basil-vegetables-lime-seed.jpg"
                            alt=""
                            className="w-100 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
