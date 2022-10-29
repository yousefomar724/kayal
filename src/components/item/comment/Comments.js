import React, {useState} from 'react'
import { FiX, FiEye, FiStar, FiMessageCircle, FiMessageSquare } from "react-icons/fi";
import CommentForm from './CommentForm';
import SingleComment from './SingleComment';

function Comments() {
  const [comments, setComments] = useState(false)

    return (
        <div className="z-100 relative flex flex-col justify-center items-center">
          
            <button className="flex items-center justify-between text-gray-700 bg-blue-200 font-semibold text-smm px-1 py-1 borderr rounded" onClick={() => setComments(true)}>
                <FiEye className="" />
                <span className="mx-0.5"></span>
                <span>التعليقات</span>
            </button>

            <FiX className={`max-w-mdd fixed top-6 left-0 z-103 w-7 h-7 p-0.5 mx-2 rounded-full bg-gray-600 text-gray-50  hover:bg-gray-400 hover:bg-opacity-50 transition transform hover:rotate-180 dark:bg-gray-700 dark:text-gray-50 ${comments ? 'block' : 'hidden'}`} onClick={() => setComments(false)} />
            <div className={`z-101 fixed inset-0 top-11 left-1/2 transform -translate-x-1/2 right-auto max-w-md w-4/5  overflow-y-scroll rounded-md   ${comments ? 'block' : 'hidden'}`}> 
                <div className="bg-scroll w-3/44 rounded-md bg-gray-200  dark:bg-gray-700">

                    <CommentForm />

                    <div className="divide-y divide-dashed divide-gray-600 dark:divide-gray-100">
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                    </div>
                </div>
            </div>
            <div className={`z-100 fixed inset-0 h-full bg-gray-600 bg-opacity-50 dark:bg-gray-200 dark:bg-opacity-50 transition ${ comments ? 'block' : 'hidden'}`} onClick={() => setComments(false)}>
          </div>
        </div>
    )
}

export default Comments
