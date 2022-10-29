import React from 'react'
import ReactStars from "react-rating-stars-component";

function CommentForm() {
    
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  
    return (
        <div className="py-2 flex flex-col justify-between items-center">
            <h1 className="mb-2 text-lg text-gray-800 dark:text-white font-semibold">أضف تقييمك</h1>
            <div className="w-full py-2 px-2 space-y-2 flex flex-col items-center justify-center bg-primaryGreen-200 dark:bg-gray-600">
                <h1 className="text-md text-gray-800 dark:text-white font-semiboldd">عدد النجوم ؟ </h1>
                <div className="my-4 flex items-center">
                    <ReactStars
                        className="h-20"
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        // isHalf={true}
                        a11y={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        // halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>

                <textarea className="w-full p-2 text-base rounded outline-none border-2 border-primaryGreen-300 bg-primaryGreen-200 dark:border-transparent dark:bg-gray-700 dark:hover:border-gray-800  dark:foucs:border-gray-800" name="" id="" cols="30" rows="4"></textarea>

                <a href="#" className="w-full px-4 py-2.5 bg-primaryGreen-400 rounded shadow-lg shadow-green-400 transition hover:shadow-sm">
                    <h1 className="text-sm md:text-md text-white font-semibold tracking-wider w-full text-center dark:text-white">أضف التعليق</h1>
                </a>
            </div>
        </div>

    )
}

export default CommentForm
