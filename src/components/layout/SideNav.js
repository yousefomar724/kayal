import React, {useRef, useEffect} from 'react'
import {Link,} from "react-router-dom";
import {gsap} from 'gsap'
import { FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaSnapchat, FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import useDarkMode from '../../hooks/useDarkMode'


export default function SideNav({sideNav, setSideNav}) {
    const [isDarkMode, toggleDarkMode] = useDarkMode()

    const nav = useRef(); 
    // const x = useRef(); 
    useEffect(() => {
        // gsap.fromTo(main.current , {y: '100%',},{y: '0%', duration: 2, ease: 'power2.easeOut'})
        gsap.fromTo(nav.current , {x: '100%',},{x: '0%', duration: 0.5, ease: 'easeOut'})
    },[sideNav])
    
    return (
        <div className="relative flex justify-center">
            <div className={`z-102 max-w-md fixed inset-0 ${sideNav ? 'block' : 'hidden'}`}>
                <div className={`max-w-mdd fixed inset-0 transition duration-500 bg-black dark:bg-white  bg-opacity-70 dark:bg-opacity-70 ${sideNav ? 'block' : 'hidden'}`} onClick={() => setSideNav(false)}></div>
                <div ref={nav} className={`max-w-mdd fixed inset-0 bg-gray-5000 bg-white grid grid-rows-6 dark:bg-gray-700 ${sideNav ? 'ml-16' : '-translate-x-full'}`} >
                    <FiX className={`max-w-mdd absolute left-1.5 top-1.5 z-103 w-5 h-5 p-0.5 mx-2 rounded-full bg-gray-600 text-gray-50  hover:bg-gray-400 hover:bg-opacity-50 transition transform hover:rotate-180 dark:bg-gray-700 dark:text-gray-50 ${sideNav ? 'block' : 'hidden'}`} onClick={() => setSideNav(false)} />
                    <div className="row-span-1 bg-primaryGreen-300 transition duration-500 dark:bg-white">
                        <div className="h-full mx-2 flex justify-center items-center">
                            {/* <div className="ml-2 p-2 bg-gray-800 rounded-full shadow-lg">
                                <FiCoffee className="text-primaryGreen-400 text-2xl" />
                            </div> */}
                            <div className='lglg'><img src="../img/logo.png"></img></div>
                           
                        </div>
                    </div>
                    <div className="row-span-3 py-2 bg-blue-4000" onClick={() => setSideNav(false)}>
                        <div className="mx-2 space-y-0.5 overflow-hidden rounded-md">
                        <a href="#" className="relative flex justify-between items-center py-666 py-2.5 px-4 rounded-smm transition bg-primaryGreen-200 bg-opacity-500 shadow-smm text-gray-800 ">
                                <div className="flex flex-col space-y-222">
                                    <div className="relative flex justify-start items-start space-x-1">
                                        <p className="text-justify text-xs md:text-md text-gray-6000 font-bold break-alll">
                                        يحتاج البالغون إلى 2000 سعر حراري في المتوسط يومياً، وقد تختلف الاحتياجات الفردية من السعرات الحرارية من شخص لآخر البيانات التغذوية الإضافية متاحة عند الطلب .
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    
                                </div>
                            </a> 
                            <a href="https://www.snapchat.com/add/sap" className="relative flex justify-between items-center py-666 py-2.5 px-4 rounded-smm transition bg-primaryGreen-50 bg-opacity-500 shadow-smm text-gray-800 ">
                                <div className="flex flex-col space-y-222">
                                    <div className="relative flex justify-start items-start space-x-1">
                                        <h1 className="text-xs md:text-md  md:text-md text-gray-6000 font-bold break-alll">
                                        سناب شات
                                        </h1>
                                    </div>
                                </div>
                                <div className="transform -translate-x-1/3 flex items-center">
                                    <FaSnapchat className="text-primaryGreen-500 w-5 h-5" />
                                </div>
                            </a>
                        
                            <a href="https://instagram.com/kayalalshabab" className="relative flex justify-between items-center py-666 py-2.5 px-4 rounded-smm transition bg-primaryGreen-50 bg-opacity-500 shadow-smm text-gray-800 ">
                                <div className="flex flex-col space-y-222">
                                    <div className="relative flex justify-start items-start space-x-1">
                                        <h1 className="text-xs font-monoo  md:text-md text-gray-6000 font-bold break-alll">
                                        إنستجرام
                                        </h1>
                                    </div>
                                </div>
                                <div className="transform -translate-x-1/3 flex items-center">
                                    <FaInstagram className="text-primaryGreen-500 w-5 h-5" />
                                </div>
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=966114333555" className="relative flex justify-between items-center py-666 py-2.5 px-4 rounded-smm transition bg-primaryGreen-50 bg-opacity-500 shadow-smm text-gray-800 ">
                                <div className="flex flex-col space-y-222">
                                    <div className="relative flex justify-start items-start space-x-1">
                                        <h1 className="text-xs md:text-md text-gray-6000 font-semibold break-alll">
                                            واتساب
                                        </h1>
                                    </div>
                                </div>
                                <div className="transform -translate-x-1/3 flex items-center">
                                    <FaWhatsapp className="text-primaryGreen-500 w-5 h-5" />
                                </div>
                            </a>
                            <a href="tel:0114333555" className="relative flex justify-between items-center py-666 py-2.5 px-4 rounded-smm transition bg-primaryGreen-50 bg-opacity-500 shadow-smm text-gray-800 ">
                                <div className="flex flex-col space-y-222">
                                    <div className="relative flex justify-start items-start space-x-1">
                                        <h1 className="text-xs md:text-md text-gray-6000 font-semibold break-alll">
                                         أتصل بنا
                                        </h1>
                                    </div>
                                </div>
                                <div className="transform -translate-x-1/3 flex items-center">
                                    <FaPhoneAlt className="text-primaryGreen-500 w-5 h-5" />
                                </div>
                            </a>
                            
                            <div onClick={ () => toggleDarkMode()}  className="relative flex justify-between items-center py-666 py-1.5 px-4 rounded-smm transition bg-primaryGreen-50 bg-opacity-500 shadow-smm text-gray-800 ">
                                <div className="flex flex-col space-y-222">
                                    <div className="relative flex justify-start items-start space-x-1">
                                        <h1 className="text-xs md:text-md text-gray-6000 font-semibold break-alll">
                                            {
                                            isDarkMode ? "وضع نهاري" : "وضع ليلي"
                                            }
                                        </h1>
                                    </div>
                                </div>
                                <div className={`transform transition -translate-x-1/3 flex items-center p-1 rounded-full shadow-md ${ isDarkMode ? 'bg-white text-gray-800' : 'bg-gray-700 text-gray-100' }`}>
                                    {
                                        isDarkMode ?
                                        <FiSun className ="text-green-7000 w-5 h-5 animate-pingg" />:
                                        <FiMoon className ="text-gray-8000 w-5 h-5 anime-switch" />
                                    }
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row-span-1 bg-red-5000">
                    </div>
                </div>
            </div>
        </div>
    )
}
