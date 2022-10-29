import React from 'react'
import { FiStar } from "react-icons/fi";


function SingleComment() {
    return (
        <div className="m-2 pt-2">
            <div className="flex justify-between items-center">
                <div className="flex items-baseline">
                    <div className="relative text-center bg-primaryGreen-100 shadow-smm  border-44 border-white border-opacity-50 shadoww rounded-full w-8 h-8 flex justify-center items-center dark:bg-gray-800">
                        <h1 className="first-letter:uppercase text-base font-semibold text-primaryGreen-400 dark:text-primaryGreen-300">{"صهيب بدوي".charAt(0)}</h1>
                    </div>
                    <h1 className="text-sm mx-1 text-gray-800 dark:text-white font-semibold underline">صهيب بدوي</h1>
                </div>
                <div className="space-x-1 flex items-center justify-center text-green-500">
                    <span className="mx-0.5 text-sm">4.6</span>
                    <FiStar className="text-md text-yellow-400 fill-current" />
                </div>
            </div>
            <p className="py-1.5  px-2 text-xs text-gray-500 dark:text-gray-400">
            جرعة من الإسبرسو مع قليل من الحليب الرغوي المخفوق, حيث أن هذا المشروب يعتمد على الإسبرسو    
            </p>

        </div>
    )
}

export default SingleComment
