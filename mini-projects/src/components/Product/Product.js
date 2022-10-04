import React from 'react'

const Product = () => {
  return (
    //container
    <div className='flex items-center justify-center min-h-screen bg-slate-100'>
        {/* card container */}
        <div className='flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-x-10 md:m-0 md:p-16'>
            {/* image div */}
            <div>
                <img 
                src='https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800' 
                alt="headphones" 
                className='mx-auto duration-200 w-60 hover:scale-105'
                />
            </div>
            {/* content */}
            <div className='flex flex-col space-y-6'>
                {/* labels */}
                <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
                    <div className='inline-block px-3 py-1 text-sm text-white bg-black rounded-full'>
                        Free Shipping
                    </div>
                </div>
                {/* title */}
                <div className='max-w-sm text-2xl font-medium'>
                    Beats Matte black headphones
                </div>
                {/* Price container */}
                <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
                    <p className='line-through'>$779</p>
                    <p className='text-5xl font-bold'>$599</p>
                    <p className='text-sm font-light text-gray-400'>
                        This offer is valid until April or as long as stock lasts
                    </p>
                </div>
                {/* button group */}
                <div className='group'>
                    <button className='w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg'>
                        <div className='px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700'>
                            Add to Cart
                        </div>
                    </button>
                </div>
                {/* stock */}
                <div className='flex items-center space-x-3 group'>
                <div
                className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"
                ></div>
                <div className="text-sm">50+ pcs. in stock</div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Product