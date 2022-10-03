import React from 'react'

const Email = () => {
  return (
    // container
    <div className='flex items-center justify-center h-screen bg-zinc-700'> 
        {/* !card */}
        <div className='bg-zinc-800 p-2 mx-6 rounded-2xl'>
        {/* flex container */}
            <div className='flex flex-col md:flex-row rounded-l-xl'>
                {/* image */}
                <img src="https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200'/>
                {/* content */}
                <div className='p-6 md:p-12'>
                    <h2 className='font-serif text-xl font-medium text-center text-white md:text-left'>
                        text heading here
                    </h2>
                    <p className='max-w-xs my-4 leading-5 tracking-wide text-center text-white md:text-left'>
                        Paragraph
                    </p>

                    <input 
                        type="text"
                        placeholder="Enter your email address"
                        class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                    />
                    <button
                    class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
                    >
                    Subcribe
                    </button>
                </div>
            </div>



        </div>

    </div>
  )
}

export default Email