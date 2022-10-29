import React from 'react';
import {Link} from "react-router-dom";
import { itemsData } from '../../context/itemsData';
import logo from '../../img/items.png';

function Item({item}) {
    // console.log(item);
    return (
        <div className={`relative w-fulll smm:w-11/12 w-11/12 h-28 sm:mx-1 space-x-2 borderr-2 rounded-lg grid grid-cols-12 gap-2 bg-primaryGreen-300  hover:bg-primaryGreen-2000 transition duration-200 dark:bg-gray-900 ${item.selected ? "bg-primaryGreen-300" : "" }`}>
            <div className="relative w-full rounded-lg col-span-4 sm:col-span-3 flex items-center justify-center" >
                <img className="absolute inset-0 w-full h-full p-0.5 object-cover h-autoo rounded-lg" src={item.image} />
            </div>
            <div className="w-full relative col-span-8 sm:col-span-9 space-y-1 sm:space-y-2 px-2 flex flex-col justify-between">
                <h1 className="mt-2 text-sm text-gray-8000 dark:text-white font-semibold text-primaryGreen-500">{item.title}</h1>
                <p className="text-xs text-gray-800 dark:text-gray-400 overflow-hidden line-clamp-3">
                    {item.description}
                </p>
                <div className="flex justify-between w-full">
                    <div className="w-full mx-auto pt-2 relative bottom-2">
                        <div className="w-full mxx-2 flex items-center justify-between">
                            {
                                item.calories ?
                                <span className="text-xs text-gray-800 dark:text-gray-400 "> <span className="text-xs mx-0.5">سعرات حرارية :</span>{item.calories}</span>: ''
                            }
                        </div>
                    </div>
                    <div className="w-full mx-auto pt-2 relative bottom-2">
                        <div className="w-full mxx-2 text-left">
                            <span className="text-sm font-semibold">{item.price}<span className="text-primaryGreen-500 text-xs font-semibold mx-0.5">ريال</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
