import React from 'react'

export default function NavBar() {
  return (
    <>
    <div className="max-w-[1230px] w-full">
        <ul className='bg-gray-300 py-4'>
          <li className='flex w-full justify-around items-center'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <button className='bg-blue-400 px-5 py-2 rounded-md'>Login</button>
          </li>
        </ul>

        

    </div>
    </>

  )
}