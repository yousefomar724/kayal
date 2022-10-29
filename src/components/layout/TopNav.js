import React from 'react'
import { useLocation } from 'react-router-dom'
import { logo } from '../../img/items.png'
import {FiChevronRight, } from "react-icons/fi";
export default function TopNav({type, sideNav, setSideNav}) {
    const location = useLocation();
    return (
        <header className={`z-30  rounded-bb-xl transition duration-200 dark:bg-gray-700 dark:bg-opacity-300 ${type ? 'relative': 'absolutee left-0 right-0  bg-opacity-0' }`}>
            <nav className="z-30 relative App-header absolutee left-0 right-0 text-white  rounded-bb-xl">
                <div className={`z-50 w-full max-w-md mx-auto px-0 py-2 h-16 top-auto bg-white rounded-t-4xl shadow-lgg grid gap-2 grid-cols-12  place-content-center ${type && 'rounded-bb-xl bg-primaryGreen-4000 dark:bg-gray-700 bg-opacity-50'} ${location.pathname !== '/' && 'dark:bg-opacity-50'}`}>                    
                        <div className="col-span-9 grid gap-1 grid-cols-12 justify-start items-center">
                            <div className="col-span-10 pr-5 text-md font-semibold text-gray-500 dark:text-white overflow-y-hidden">
                                {/* <h4 className="text-xs tracking-wide">مرحباً</h4> 
                                <span className="text-md font-bold text-gray-900 dark:text-green-400">صهيب</span> */}
                                 <div className='lgo'><img src="../img/logo.png"></img></div>
                                <h1 className="font-extrabold text-md text-primaryGreen-500 dark:text-primaryGreen-200">خيال الشباب<span className="text-2xl inline-block transform translate-y-1 mx-0.5 text-brown-400">
                                </span></h1><span className="font-extrabold text-md text-primaryGreen-500 dark:text-primaryGreen-200"> kayal alshbab</span>
                                <img src="" alt="" />
                            </div>
                        </div> 
                    <div className="col-span-3 flex justify-center items-center col-startt-12">
                        <div className="col-span-2 w-10 h-10 p-2 mxx-2 rounded-full text-black transition duration-200 dark:text-gray-100 hover:bg-gray-400 hover:bg-opacity-50 flex justify-center items-center " onClick={() => setSideNav(true)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                <rect y="2" width="20" height="2.5" rx="1.5" fill="currentColor"/>
                                <rect y="18" width="20" height="2.5" rx="1.5" fill="currentColor"/>
                                <rect x="4" y="10" width="20" height="2.5" rx="1.5" fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
                </div>  
            </nav>
        </header>
    )
}