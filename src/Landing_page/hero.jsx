import React from 'react'
import line from './images/line.png'
import world from './images/world.png'
import div from './images/div.png'
import team from './images/team.png'
import laptop from './images/laptop.png'
import employee from './images/employee.png'

const hero = () => {
    return (
        <div className='bg-[#F9EFE4] h-screen'>

            <div className='h-screen'>
                <h1 className='text-5xl text-[#2F2F30] py-5 items-center mx-auto justify-center flex'>
                    Bring <span className='px-5 -mb-2'>
                        clarity
                        <img src={line} className='w-32' />
                    </span>
                    to your team
                </h1>
                <h1 className='text-xl text-[#2F2F30] items-center pb-5 text-center mx-auto justify-center flex'>
                    Slite is a modern knowledge base that drives action with structured docs, thoughtful<br /> collaboration and confident decision-making.
                </h1>
                <div className='border border-[#98999A] w-fit rounded-3xl justify-center mx-auto'>
                    <input type="email" id="email" name="email" placeholder='name@company.com' className=" bg-transparent   px-4 py-2 focus:outline-none " />
                    <button className='bg-[#176AE5] border border-[#176AE5] p-2 text-white rounded-3xl'>Start for free</button>
                </div>
                <img src={world} className='items-center mx-auto pt-16' />
                <h6 className='text-center text-[#98999A]'>8:45 aM - PDT</h6>
                <img src={div} className='items-center mx-auto -pt-16' />
            </div>

            <div className='bg-[#F9EFE4] h-fit py-32'>
                <h1 className='text-center'>
                    200,000+ teams have found focus with Slite
                </h1>
                <img src={team} className='mx-auto pt-8 ' />
            </div>

            <div className='h-screen bg-[#F9EFE4] pb-20'>
                <div>
                    <h1 className='text-center text-4xl text-[#2F2F30] font-semibold'>A home for all of your knowledge.</h1>
                    <h1 className='text-center text-sm py-5 text-[#2F2F30]'>Project, knowledge base, process – bring all your work to life in Docs.</h1>
                </div>
                <div className='flex mx-auto my-10'>
                    <ul className='mx-auto mt-16 space-y-8'>
                        <li className='bg-white py-3 rounded-lg px-2 drop-shadow'> Wiki</li>
                        <li>Projects</li>
                        <li>Processes</li>
                        <li>Onboarding</li>
                        <li>Meeting</li>
                        <li>Team Updates</li>
                        <li>1.1s</li>
                        <li>User research</li>
                        <li>More</li>
                    </ul>
                    <img src={laptop} className='mx-auto' />
                </div>
            </div>

            <div className='bg-[#F9EFE4] pt-40 h-screen'>
                <div>
                    <h1 className='text-center text-4xl text-[#2F2F30] font-semibold'>Beat the blank canvas with Templates</h1>
                    <h1 className='text-center text-sm py-5 text-[#2F2F30]'>
                        Ready-to-use Templates for product specs, company handbooks, meeting notes and more.
                    </h1>
                    <button className='bg-[#F9EFE4] m-auto justify-center items-center flex border border-[#000] p-2 rounded-3xl'>Browse templates</button>
                </div>

<div className=' grid grid-rows-1'>
<div className='bg-white w-fit'>
<h1>Employee handbook</h1>
<img src={employee}/>
</div>

<div className='bg-white'>
<h1>Employee handbook</h1>
<img src={employee}/>
</div>

<div className='bg-white'>
<h1>Employee handbook</h1>
<img src={employee}/>
</div>

<div className='bg-white'>
<h1>Employee handbook</h1>
<img src={employee}/>
</div>

<div className='bg-white'>
<h1>Employee handbook</h1>
<img src={employee}/>
</div>

<div className='bg-white'>
<h1>Employee handbook</h1>
<img src={employee}/>
</div>
</div>

            </div>
        </div>
    )
}

export default hero