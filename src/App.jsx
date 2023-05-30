import { Search, Mail, Bell, MoreHorizontal, Camera, Smile, ChevronDown } from 'react-feather'

import party from '../src/assets/party.svg'
import calendar from '../src/assets/calendar.svg'
import bright from '../src/assets/bright.svg'
import rocket from '../src/assets/rocket.svg'

function App() {
  return (
    <div className="bg-gradient-to-tr from-midgray to-lowgray h-screen w-screen flex items-center justify-center">
      <main className="flex flex-col gap-5 w-3/4  2xl:w-2/4">
        <button className="text-zinc-50 bg-gradient-to-r from-red-600 to-red-400 text-xl p-5 rounded-md h-14 w-52 flex items-center justify-center transition-shadow hover:shadow-rose-500/25 hover:shadow-lg"> Create Event </button>
        <header className="bg-gradient-to-r from-deepgray to-midgray w-full h-14 rounded-md flex items-center text-zinc-50 overflow-hidden shadow-lg shadow-deepgray/50">
          <h1 className="px-20">ULTRANET</h1>
          <hr className="bg-zinc-600 h-full w-px border-0"/>

            <div className="flex items-center justify-between px-10 gap-4 text-zinc-300 w-full">
              <span className='flex gap-4'>
                <Search/>
                <input type="text" placeholder='Search' className='bg-transparent placeholder-zinc-300 focus:placeholder-zinc-600 w-96 outline-none transition-all'/>
              </span>

              <div className='flex gap-2'>
                <Mail/>

                <span className='relative'>
                  <div className='bg-gradient-to-tr from-red-600 to-red-400 h-3 w-3 rounded-full absolute right-0 border-2 border-midgray'></div>
                  <Bell/>
                </span>
              </div>
            </div>

          <hr className="bg-zinc-600 h-1/3 w-px border-0"/>

          <div className="flex w-80 items-center gap-5 pl-10 cursor-pointer">
            <div className='rounded-full aspect-square h-8 bg-zinc-800 bg-[url("https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80")] bg-center bg-cover'></div>
            <h1>John Doe</h1>
            <ChevronDown size={15}/>
          </div>
        </header>
        
        <div className="grid grid-cols-4 h-96 w-full gap-4">

          <asside className='flex flex-col gap-4'>
            <div className="text-zinc-400 flex flex-col items-center bg-gradient-to-tr from-deepgray to-midgray rounded-md h-2/3 shadow-lg shadow-deepgray/50">
              <span className='flex items-center justify-between w-full py-4 px-5'>
                <h1>Events</h1>
                <MoreHorizontal/>
              </span>

              <div className='text-zinc-100 flex items-center px-5 py-3 gap-5 bg-deepgray w-full'>
                <img src={party} className='h-5'/>
                <h1 className='text-sm'>Events</h1>
              </div>

              <div className='text-zinc-100 flex items-center px-5 py-3 gap-5 w-full'>
                <img src={calendar} className='h-5'/>
                <h1 className='text-sm'>Calendar</h1>
              </div>

              <div className='text-zinc-100 flex items-center px-5 py-3 gap-5 w-full'>
                <img src={bright} className='h-5'/>
                <h1 className='text-sm'>Discover</h1>
              </div>

              <div className='text-zinc-100 flex items-center px-5 py-3 gap-5 w-full'>
                <img src={rocket} className='h-5'/>
                <h1 className='text-sm'>Hosting</h1>
              </div>
            </div>

            <div className='bg-gradient-to-tr from-deepgray to-midgray rounded-md h-1/3 p-5 text-zinc-100 flex flex-col justify-center gap-4 shadow-lg shadow-deepgray/50'>
              <div className='bg-gray-700 border-gray-500 border rounded-md w-32 flex items-center justify-center gap-3 p-1'>
                <div className='h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-red-400'></div>
                <h1>Jun 08, 2023</h1>
              </div>
              <h1>UX Design | Meetup 2023</h1>
            </div>
          </asside>

          <div className='bg-gradient-to-tr from-deepgray to-midgray rounded-md h-72 flex flex-col items-center gap-6 shadow-lg shadow-deepgray/50'>
            <div className='w-full flex flex-col items-center p-4 text-zinc-100 gap-2'>
              <h1 className='text-xl font-semibold'>Audience Registration</h1>
              <p className='text-zinc-500 text-sm'>234 ENTRIES</p>
            </div>
              
            <svg width="130" height="130" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_27_80)">
              <rect width="200" height="200" rx="100" fill="#50546D"/>
              <path d="M100 187.508C100 194.407 94.3853 200.08 87.5398 199.221C71.4709 197.203 56.0661 191.302 42.6922 181.95C25.8914 170.201 13.1077 153.573 6.07242 134.316C-0.96284 115.06 -1.90961 94.1067 3.36035 74.2944C8.6303 54.4821 19.8623 36.7683 35.535 23.5522C51.2078 10.3361 70.5638 2.25641 90.9815 0.4075C111.399 -1.44141 131.892 3.02981 149.684 13.2155C167.475 23.4013 181.707 38.8093 190.45 57.3526C197.41 72.1137 200.624 88.2936 199.9 104.473C199.591 111.365 193.051 115.941 186.251 114.776V114.776C179.451 113.611 174.994 107.134 175.015 100.235C175.05 89.1456 172.625 78.1319 167.852 68.0078C161.293 54.0974 150.617 42.539 137.27 34.8982C123.924 27.2573 108.551 23.9032 93.2347 25.2901C77.9183 26.6771 63.3982 32.7381 51.6412 42.6522C39.8843 52.5664 31.4585 65.8545 27.5052 80.7168C23.5519 95.5791 24.2622 111.297 29.5397 125.743C34.8172 140.188 44.407 152.662 57.0102 161.475C66.1829 167.89 76.629 172.14 87.5652 173.978C94.369 175.122 100 180.609 100 187.508V187.508Z" fill="url(#paint0_linear_27_80)"/>
              <circle cx="100" cy="100" r="75" fill="#1E2333"/>
              <path d="M99.7273 123.636C96.6061 123.636 93.8485 123.083 91.4545 121.977C89.0758 120.856 87.2197 119.318 85.8864 117.364C84.553 115.394 83.8939 113.152 83.9091 110.636C83.8939 108.667 84.2803 106.848 85.0682 105.182C85.8561 103.5 86.9318 102.098 88.2955 100.977C89.6742 99.8409 91.2121 99.1212 92.9091 98.8182V98.5455C90.6818 97.9697 88.9091 96.7197 87.5909 94.7955C86.2727 92.8561 85.6212 90.6515 85.6364 88.1818C85.6212 85.8182 86.2197 83.7045 87.4318 81.8409C88.6439 79.9773 90.3106 78.5076 92.4318 77.4318C94.5682 76.3561 97 75.8182 99.7273 75.8182C102.424 75.8182 104.833 76.3561 106.955 77.4318C109.076 78.5076 110.742 79.9773 111.955 81.8409C113.182 83.7045 113.803 85.8182 113.818 88.1818C113.803 90.6515 113.129 92.8561 111.795 94.7955C110.477 96.7197 108.727 97.9697 106.545 98.5455V98.8182C108.227 99.1212 109.742 99.8409 111.091 100.977C112.439 102.098 113.515 103.5 114.318 105.182C115.121 106.848 115.53 108.667 115.545 110.636C115.53 113.152 114.848 115.394 113.5 117.364C112.167 119.318 110.311 120.856 107.932 121.977C105.568 123.083 102.833 123.636 99.7273 123.636ZM99.7273 118.636C101.833 118.636 103.652 118.295 105.182 117.614C106.712 116.932 107.894 115.97 108.727 114.727C109.561 113.485 109.985 112.03 110 110.364C109.985 108.606 109.53 107.053 108.636 105.705C107.742 104.356 106.523 103.295 104.977 102.523C103.447 101.75 101.697 101.364 99.7273 101.364C97.7424 101.364 95.9697 101.75 94.4091 102.523C92.8636 103.295 91.6439 104.356 90.75 105.705C89.8712 107.053 89.4394 108.606 89.4545 110.364C89.4394 112.03 89.8409 113.485 90.6591 114.727C91.4924 115.97 92.6818 116.932 94.2273 117.614C95.7727 118.295 97.6061 118.636 99.7273 118.636ZM99.7273 96.5455C101.394 96.5455 102.871 96.2121 104.159 95.5455C105.462 94.8788 106.485 93.947 107.227 92.75C107.97 91.553 108.348 90.1515 108.364 88.5455C108.348 86.9697 107.977 85.5985 107.25 84.4318C106.523 83.25 105.515 82.3409 104.227 81.7045C102.939 81.053 101.439 80.7273 99.7273 80.7273C97.9848 80.7273 96.4621 81.053 95.1591 81.7045C93.8561 82.3409 92.8485 83.25 92.1364 84.4318C91.4242 85.5985 91.0758 86.9697 91.0909 88.5455C91.0758 90.1515 91.4318 91.553 92.1591 92.75C92.9015 93.947 93.9242 94.8788 95.2273 95.5455C96.5303 96.2121 98.0303 96.5455 99.7273 96.5455Z" fill="white"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_27_80" x1="40.5" y1="9" x2="76" y2="205" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF8383"/>
                <stop offset="1" stopColor="#FF395F"/>
              </linearGradient>
              <clipPath id="clip0_27_80">
                <rect width="200" height="200" rx="100" fill="white"/>
              </clipPath>
            </defs>
            </svg>
          </div>

          <div className='bg-gradient-to-tr from-deepgray to-midgray rounded-md col-span-2 h-96 gap-7 justify-center flex p-2 flex-col shadow-lg shadow-deepgray/50'>
            <div className='bg-white aspect-square h-3/4 rounded-md bg-[url("https://declutterthemind.com/wp-content/uploads/bad-habit-1536x656.jpg")] flex items-end bg-center p-5 bg-cover 2xl:h-80'>
              <span className='text-zinc-100 flex flex-col gap-3 w-3/4'>
                <h1 className='text-2xl font-semibold'>UXConf BR: Conferência brasileira de UX</h1>
                <p className='text-sm'>Conferência anual reunindo a comunidade brasileira de User Experience Design</p>
              </span>
            </div>

            <hr className='bg-zinc-600 h-px w-full border-0'/>

            <div className='aspect-square h-1/4 rounded-sm flex items-center justify-center'>
              <span className='flex items-center justify-center gap-4 w-full'>
                <div className='rounded-full aspect-square h-11 bg-zinc-800 bg-[url("https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80")] bg-center bg-cover'></div>
                <div className='flex bg-gray-700 w-4/5 rounded-full items-center justify-between pr-4 text-zinc-50 gap-2 border border-zinc-500'>
                  <input type="text" className='rounded-full w-full h-12 p-5 bg-transparent outline-none' placeholder='Add comment...' />
                  <span className='flex gap-4'>
                    <Camera size={20}/>
                    <Smile size={20}/>
                  </span>
                </div>
              </span>
            </div>
          </div>

        </div>

      </main>
    </div>
  )
}

export default App
