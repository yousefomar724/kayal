import React, {useContext, useEffect, useState} from 'react'
import {ItemContext} from '../../../context/ItemContext';
import logo from '../../../img/items.png'

export default function Category({category}) {
    // const [dispatch] = useContext(ItemContext);
  const [ categories, items, dispatch, Catedispatch ] = useContext(ItemContext)
//   const [active, setActive] = useState(false);



    const handleClick = (id) => {
        dispatch({type: 'CATEGORY_ITEMS', payload: id})
        Catedispatch({type: 'CATEGORY_SELECTION', payload: id})

        // document.body.scrollTop = 0; 
        // document.documentElement.scrollTop = 0; 


        var center = document.getElementById(category.id);
        if(!category.selected){
            center.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
              });
        }
    }
    
    return (
        <div  id={`${category.id}`} onClick={() => handleClick(category.id)} className={` ltr w-3/122 w-fulll min-w-max h-10 my-4 mx-2 py-0 pr-3 pl-5 px-666 space-x-1 rounded-full bg-primaryGreen-300 dark:bg-gray-900 hover:bg-primaryGreen-5000 flex justify-center items-center transition hover:text-whitee dark:hover:text-white active:bg-primaryGreen-500 dark:hover:bg-primaryGreen-4000 active:text-white foucs:bg-primaryGreen-4000 foucs:text-white ${ category.selected ? 'text-white bg-primaryGreen-500 dark:text-white dark:bg-primaryGreen-500' : 'text-gray-800 bg-primaryGreen-300 dark:text-primaryGreen-100'}`}>
            <span  className="flex-3 text-xs text-center font-semibold ">{category.title}</span>
            <span className="flex-1 mxx-1 ">
                <img className="w-11 h-11 object-contain pp-1.5 rounded-sm -mr-5" src={category.image} />
            </span>
        </div>
    )
}
