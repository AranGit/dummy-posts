import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const buttonClassName = "disabled:opacity-75 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300"

const min: number = 1;
const max: number = 10;

function PostSelectionForm() {
  const [postId, setPostId] = useState<number>(min);
  const navigate = useNavigate();

  const increasePostId = useCallback(() => {
    postId < max ? setPostId(postId + 1) : null;
  }, [postId]);

  const decreasePostId = useCallback(() => {
    postId > min ? setPostId(postId - 1) : null
  }, [postId]);

  return (
    <form className="max-w-xs mx-auto flex flex-col items-center gap-4">
      <label htmlFor="post-input" className="block mb-2 text-sm font-medium text-gray-900">Select the ID of Post (1-10):</label>
      <div className="relative flex items-center max-w-[11rem]">
        <button
          type="button"
          disabled={postId <= min}
          id="decrement-button"
          data-input-counter-decrement="post-input"
          className={`${buttonClassName} rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none`}
          onClick={decreasePostId}
        >
          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
          </svg>
        </button>
        <input
          type="text"
          id="post-id-input"
          data-input-counter
          data-input-counter-min="1"
          data-input-counter-max="10"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          value={postId}
          required
          readOnly
        />
        <button
          type="button"
          disabled={postId >= max}
          className={`${buttonClassName} rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none`}
          onClick={increasePostId}
        >
          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>

        </button>
      </div>
      <button
        type="button"
        className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => navigate(`/post/${postId}`)}
      >
        Go
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>
    </form>
  )
}

export default PostSelectionForm
