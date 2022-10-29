import {React, useState, useContext} from 'react'
import { FiCheckCircle, FiCircle,} from "react-icons/fi";

function ItemVariants({feature}) {
    const [check, setCheck] = useState(null);
    
    return (
        <div className={`flex justify-between items-center py-6 px-4 rounded-sm transition  ${check ? "bg-primaryGreen-300 bg-opacity-50 shadow-sm text-gray-800 dark:bg-gray-900 dark:text-white": "text-gray-600"} `} onClick={() => setCheck(!check)} >
            <div className="flex items-center space-x-2">
                <h1 className="text-xs md:text-md text-gray-6000 font-semibold dark:text-gray-400">
                    { feature.title }
                </h1>
            </div>
            <div className="flex items-center">
                <div className="space-x-1 text-xs font-semibold">
                    <span className="text-gray-6000 font-semibold dark:text-gray-400" >{feature.price}</span>
                    <span className="text-green-600"> ريال</span>
                </div>
                {
                    check ? <FiCheckCircle className="text-green-700 w-3 md:w-4" /> :  <FiCircle className="opacity-30 dark:text-gray-300 dark:opacity-70 w-3 md:w-4"/>
                }
            </div>
        </div>
    )
}

export default ItemVariants
