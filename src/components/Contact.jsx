import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-bl from-[#0a192f] via-gray-700 to-[#0c1f3b] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/6a843fde-9575-4062-96ab-77e1b00a2235" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or email me - Contact@DustinBurnsDev.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate!</button>
        </form>
    </div>
  )
}

export default Contact