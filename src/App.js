import React from 'react';

function App() {
  let classButton = 'text-white hover:text-gray-300 cursor-grab';
  let [popUp, setPopUP] = React.useState(false)
  return (
    <React.Fragment>
      <div className='w-screen h-screen bg-orange-500 '>
        <div className="h-[8%] w-full bg-[#161b22] lg:hidden  items-center justify-between px-5 relative z-50">
          <button onClick={() => {
            setPopUP(!popUp);
          }} className="h-10 w-10 bg-gray-700 rounded-full"></button>
          <button className="h-10 w-10 bg-gray-700 rounded-full"></button>
          <button className="h-10 w-10 bg-gray-700 rounded-full"></button>
        </div>

        <div className="h-[8%] w-full bg-[#161b22] hidden lg:grid grid-cols-5 items-center px-5">

          <section className='flex w-full items-center'>
            <span className="h-7 w-7 bg-black rounded-full"></span>
            <input className=' h-5  ml-3 w-[80%] border ronded-md px-2 py-3' placeholder=' Search or Jump to' />
          </section>
          <section className='col-span-3  h-full flex items-center space-x-5'>
            <button className={classButton}>Pull Request</button>
            <button className={classButton}>Issue</button>
            <button className={classButton}>Marketplace</button>
            <button className={classButton}>Explore</button>
          </section>
          <section className=" flex items-center justify-end w-full h-full  space-x-2">
            <span className="h-7 w-7 bg-gray-700 rounded-full"></span>
            <span className="h-7 w-7 bg-gray-700 rounded-full"></span>
            <span className="h-7 w-7 bg-gray-700 rounded-full"></span>
          </section>
        </div>
        <div className="h-[92%] w-full bg-green-600 sm:block lg:flex relative">
          {/* {popUp && (
       <section className='bg-red-500 w-full h-[80%] top-0 absolute z-10 lg:hidden block '>

       </section>
    )} */}

          <section className={`${popUp ? 'transform translate-y-0 transition duration-500'
            : 'transform -translate-y-full transition duration-300'} bg-pink-500 w-full h-[80%] top-0 absolute z-10 lg:hidden block flex item-center`}>

            <h5 className='font-bold text-white text-lg rotate-90  '>Sugih Rohmat 17</h5>
          </section>

          <div className="h-full sm:w-full  lg:w-[20%]  bg-biru-400 p-5">
            <section className='flex item-cemter space-x-2 pb-2 border-black border-b-2' >
              <div className='h-8 w-8 rounded-full bg-black'></div>
              <button>Sugih Rohmat</button>
            </section>
            <section className='space-y-2 pb-3 border-black border-b-2'>
              <div className='flex item-center justify-between mt-10'>
                <p>Recent Repisitory</p>
                <button className='border px-2 py-1 bg-green-500 text-white border-green-500 cursor-painter'>New</button>
              </div>
              <div>
                <input className='border px-2 w-full rounded-md' placeholder='Find a Repository' />
              </div>
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => {
                  return (
                    <div key={item}>
                      <div className="h-3 w-3 bg-gray-700 rounded-full"></div>
                      <p>Rohmat /  Repisitory</p>
                    </div>
                  )
                })}
              </div>
            </section>

            <section>
              <div className='space-y-2 pb-3'><p>Recent Activy</p></div>
              <div className='space-y-2 pb-3 '>When you take actions across GitHub, we'll provide links to that activity here.</div>
            </section>
          </div>
          <>
            {/* Jumbotron */}
            <div className="p-6 shadow-lg rounded-lg bg-green-500 text-gray-700 lg:w-[80%]">
              <h1 className="font-semibold text-3xl mb-5">The home for all developers — including you.</h1>
              <p>
                Welcome to your personal dashboard, where you can find an introduction to how GitHub works,
                tools to help you build software, and help merging your first lines of code.
              </p>
              <section className=" flex justify-start w-full h-full  space-x-2 mt-7">
                <div className='w-8 h-8 rounded-full bg-white'></div>
                <p className='text-white'>Start writing code</p>
              </section>
              <div className=" flex items-center ">
                <div className="w-[35%] h-[55%] bg-white-300 border-black border-2  mb-5 py-5 px-6 ">
                  <p className="text-black font-bold">Start a new repository</p>
                  <p className="text-black mt-2">A repository contains all of your project's files, revision history, and collaborator discussion.</p>
                  <div className="text-black mt-2">Rhtsgh 17/
                    <input className="h-5 w-56 px-2 py-3 ml-2 border bg-white-300 rounded-md" placeholder="name your new repository..." />
                    <section className=" flex justify-start w-full h-full  space-x-2 mt-7">
                      <div className='w-4 h-4 rounded-full bg-black'></div>
                      <p className='text-black font-bold'>Publick</p>
                    </section>
                    <div className='space-y-2 pb-3 '>Anyone on the internet can see this repository</div>
                    <section className=" flex justify-start w-full h-full  space-x-2 mt-7">
                      <div className='w-4 h-4 rounded-full bg-black'></div>
                      <p className='text-black font-bold'>Private</p>
                    </section>
                    <div className='space-y-2 pb-3 '>You choose who can see and commit to this repository</div>
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 mt-4 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Create a new repository
                    </button>


                  </div>

                </div>
                <div className="w-[35%] h-[75%] bg-white-300 border-black border-2  mb-5 py-5 px-6 ">
                  <p className="text-black font-bold">Introduce yourself with a profile README</p>
                  <p className="text-black mt-2">Share information about yourself by creating a profile README, which appears at the top of your profile page.</p>
                  <div className='flex item-center justify-between mt-10'>
                <p>rhtsgh17/README.md</p>
                <button className='border px-2 py-1 bg-green-500 text-white border-green-500 cursor-painter'>Create</button>
              </div>
                 

                  <div>
                    <p>1  - 👋 Hi, I’m @rhtsgh17</p>
                    <p>2  - 👀 I’m interested in ...</p>
                    <p>3  - 🌱 I’m currently learning ...</p>
                    <p>4  - 💞️ I’m looking to collaborate on</p>
                    <p>5  - 📫 How to reach me ...</p>
                    <p>6  - 🌱 I’m currently learning ...</p>
                    <p>7  - 👋 Hi, I’m @rhtsgh17</p>
                    <p>8  - 💞️ I’m looking to collaborate on</p>
                    <p>7  - 👋 Hi, I’m @rhtsgh17</p>
                    <p>7  - 👋 Hi, I’m @rhtsgh17</p>
                  </div>
                  
                </div>
              </div>
              {/* <section className=" flex justify-start w-full h-full  space-x-2 mt-7">
                <div className='w-8 h-8 rounded-full bg-white'></div>
                <p className='text-blue'>Use tools of the trade</p>
              </section> */}
              <div className=" flex items-center ">
                <div className="w-[35%] h-[55%] bg-white-300 border-black border-2  mb-5 py-5 px-6 ">
                  <p className="text-black font-bold">Simplify your development workflow with a GUI</p>
                  <div className='w-8 h-8 rounded-full bg-black'></div>
                  <p className="text-black mt-2">Install GitHub Desktop to visualize, commit, and push changes without ever touching the command line.</p>
                  
                </div>
                <div className="w-[35%] h-[55%] bg-white-300 border-black border-2  mb-5 py-5 px-6 ">
                  <p className="text-black font-bold">Get AI-based coding suggestions nanaona meren</p>
                  <div className='w-8 h-8 rounded-full bg-black'></div>
                  <p className="text-black mt-2">Try GitHub Copilot free for 60 days, which suggests code and entire functions in real-time, right from your editor.</p>
                  
                </div>
              </div>
               {/* <section className=" flex justify-start w-full h-full  space-x-2 mt-7">
                <div className='w-8 h-8 rounded-full bg-white'></div>
                <p className='text-blue'>Use tools of the trade</p>
              </section> */}
              <div className=" flex items-center ">
                <div className="w-[35%] h-[55%] bg-white-300 border-black border-2  mb-5 py-5 px-6 ">
                  <p className="text-black font-bold">Simplify your development workflow with a GUI</p>
                  <div className='w-8 h-8 rounded-full bg-black'></div>
                  <p className="text-black mt-2">Install GitHub Desktop to visualize, commit, and push changes without ever touching the command line.</p>
                  
                </div>
                <div className="w-[35%] h-[55%] bg-white-300 border-black border-2  mb-5 py-5 px-6 ">
                  <p className="text-black font-bold">Get AI-based coding suggestions nanaona meren</p>
                  <div className='w-8 h-8 rounded-full bg-black'></div>
                  <p className="text-black mt-2">Try GitHub Copilot free for 60 days, which suggests code and entire functions in real-time, right from your editor.</p>
                  
                </div>
              </div>
            </div>


            {/* Jumbotron */}
          </>





        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
