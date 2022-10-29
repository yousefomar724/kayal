import {React, useState, useContext} from 'react'
import { useParams } from "react-router";
import {ItemContext} from '../../context/ItemContext';
import ItemVariants from './ItemVariants';
import Comments from './comment/Comments';
import { FiChevronLeft, FiMoreHorizontal, FiStar, FiPlus, FiMinus, FiEye } from "react-icons/fi";
export default function SingleItemDetails() {

    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0)

    const [itemsData, setItemsData] = useContext(ItemContext)

    let {id} = useParams();
    id-=1;
    let item = itemsData.filter((item) => item.id === id)

    const plus = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
        if (quantity >= 1 )
            setTotalPrice(itemsData[id].price * quantity)
        console.log(quantity + " " + totalPrice);
    }
    const minus = () => {
        console.log(quantity + " " + totalPrice);

        if(quantity <= 0){
            setQuantity(0)
        }else{
            setQuantity(prevQuantity => prevQuantity - 1)
            setTotalPrice(totalPrice - itemsData[id].price)
        }
    }

    return (
    <main className="relative container mtt-4 mx-auto bg-white transition duration-200 dark:bg-gray-700 dark:text-white space-y-4">
        <div className="space-y-2 h-full pb-24" >
            <div className="relative w-full min-h-50 h-s40 flex justify-center items-end">
                <div className="z-20 absolute h-5/66 h-s40 w-full inset-0 bottom-6 bg-primaryGreen-400 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 rounded-b-3xl"></div>
                <img className="z-10 absolute h-5/66 h-s40 w-full inset-0 bottom-6 object-cover bg-center bg- bg-primaryGreen-200 bg-opacity-500 rounded-b-3xl" src={itemsData[id].image} />
            </div>
            <div className="mx-2 space-y-4">
                <h1 className="text-md text-gray-800 dark:text-white font-semibold mt-6">{itemsData[id].title}</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 mx-1">
                    {itemsData[id].description}
                </p>
                <div className="">
                    <div className="flex justify-between items-center text-xs font-bold">
                        <div className="space-x-0.5 text-base">
                            <span>{itemsData[id].price}</span>
                            <span className="text-green-600 text-xs font-semibold"> ريال</span>
                        </div>
                        <div className="space-x-1 flex items-center justify-center text-green-500">
                            <span className="mx-0.5 text-sm">{itemsData[id].rate}</span>
                            <FiStar className="text-md text-yellow-400 fill-current" />
                            <Comments />
                        </div>
                    </div>
                </div>
                <div className="divide-y-222 space-y-1">
                    {
                        itemsData[id].features.map((feature) => <ItemVariants key={feature.id} feature={feature} />)
                    }
                </div>
                <div className="">
                    <div className="flex justify-between items-center font-semibold">
                        <div className="space-x-2 flex flex-row-reverse items-center text-lg">
                            <FiMinus className="w-7 h-7 p-2 bg-primaryGreen-300 bg-opacity-80 active:bg-primaryGreen-400 text-gray-800 rounded-md" onClick={minus} />
                            <span className="text-base font-bold text-center">{quantity}</span>
                            <FiPlus className="w-7 h-7 p-2 bg-primaryGreen-300 bg-opacity-80 active:bg-primaryGreen-400 text-gray-800 rounded-md" onClick={plus} />
                        </div>
                        <div className="space-x-1 font-semibold">
                            <span>{totalPrice}</span>
                            <span className="text-green-600 text-xs"> ريال</span>
                        </div>
                    </div>
                </div>              
            </div>
            <div className="relative w-full flex flex-col justify-center items-center pt-4 ">
                <a href="#" className="w-11/12 px-4 py-2.5 bg-primaryGreen-400 rounded-md shadow-lg shadow-green-400 transition hover:shadow-sm">
                    <h1 className="text-sm md:text-md text-white font-semibold tracking-wider w-full text-center dark:text-gray-800 dark:font-semibold">أضف للسة</h1>
                </a>
            </div>
        </div>
    </main>

);
}
