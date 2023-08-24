import React from 'react'

const Form = () => {
  return (
  <>
  <div className='w-screen  h-[500px] flex justify-center items-center'>
  <form className='w-[300px]'>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
    <input type="email" id="email" class="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
    <input type="password" id="password" class="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-6">
    <label for="Phone Number" class="block mb-2 text-sm font-medium text-white dark:text-white">Phone Number</label>
    <input type="number" id="number" class="shadow-sm bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
<label for="message" class="block mb-2 text-sm font-medium text-white dark:text-white -mt-3">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-transparent -mt-1 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

  <button type="submit" class="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</button>
</form>
  </div>
  </>  


 
  )
}

export default Form