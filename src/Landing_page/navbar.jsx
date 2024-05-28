import React from 'react'

const navbar = () => {
    return (
        <div className='bg-[#F9EFE4] '>

            <div>
                <nav className='flex justify-between  items-center py-8 px-10'>

                    <div className='flex  items-center '>
                        <h1 className='text-3xl font-bold'>Slite</h1>
                    </div>
                    <div className='items-center'>
                        <ul className='flex space-x-5'>
                            <li className='p-2 '>Product</li>
                            <li className='p-2 '>Templates</li>
                            <li className='p-2 '>Pricing</li>
                            <li className='p-2 '>Blog</li>
                            <li className='p-2 '>Sign In</li>
                            <button className='bg-[#F9EFE4] border border-[#000] p-2 rounded-3xl'>Request a demo</button>
                            <button className='bg-[#176AE5] border border-[#176AE5] p-2 text-white rounded-3xl'>Start for free</button>
                        </ul>
                    </div>

                    {/* <div>
                        <button className='bg-[#F9EFE4] border-2 border-[#F9EFE4] p-2 rounded-lg'>Request a demo</button>
                        <button className='bg-[#F9EFE4] border-2 border-[#F9EFE4] p-2 rounded-lg'>Start for free</button>

                    </div> */}
                </nav>
            </div>

        </div>
    )
}

export default navbar