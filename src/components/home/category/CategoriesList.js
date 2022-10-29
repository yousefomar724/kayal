import React, {useContext} from 'react'
import Category from './Category';
import Slider from "react-slick";
import {ItemContext} from '../../../context/ItemContext';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CategoriesList() {

    const [categories] = useContext(ItemContext);

    var silckSettings = {
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 4,
        // slidesToScroll: 4,
        // initialSlide: 4,
        variableWidth: true,
        arrows: false,
        adaptiveHeight: true,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       initialSlide: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3
        //     }
        //   }
        // ]
      };

    return (
        <div className="ltrr sticky inset-x-0 top-0 z-90 space-x-44 overflow-scrolll flexx flex-row-reversee justify-around transition-all shadow-sm dark:shadow-none bg-white dark:bg-gray-700">
            {/* <Slider {...silckSettings}> */}
            <div className="w-full flex flex-row flex-nowrap overflow-auto">
                { categories.map( category => <Category key={category.id} category={category} />) }
            </div>
            {/* </Slider> */}
        </div>
    )
}
