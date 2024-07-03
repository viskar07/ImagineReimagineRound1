"use client";
import React from "react";

export function SparklesPreview() {
    return (
        <div className="h-[40rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="relative flex flex-col justify-center items-center z-0">
                <h1 className='z-30 text-[48px] md:text-[80px] font-[700] font-satoshi-bold tracking-tightest text-center text-transparent custom-gradient-text'>
                    Pricing
                </h1>
                <p className='text-base md:text-[22px] text-center mt-1 mb-2  text-secondary font-satoshi-medium font-medium z-30'>
                    Powerful Tools at a Price You’ll Love

                </p>
            </div>
            <div className="w-[40rem] h-10 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-1/4" />


            </div>
        </div>
    );
}
