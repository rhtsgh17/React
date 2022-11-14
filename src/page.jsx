import React, { useRef } from "react";

export default function RefTutorial() {
//   const inputRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);

//   const onClick = () => {
//     console.log('ref input => ', inputRef.current);
//     inputRef.current.focus();
//     inputRef.current.value = "Mats";
//     inputRef.current.className="border border-yellow-500 bg-green-200";
//   };

const scroolToSection = (ref) => {
    window.scrollTo({
        top:ref.current.offsetTop,
        behavior: "smooth",
    });
};

const scroolToTop = (ref) => {
    window.scrollTo({
        top:ref.current.offsetTop,
       
        behavior: "smooth",
    })
}

  return (
    <div ref={topRef}>
      {/* <h1>Rohmats 17</h1>
      <input ref={inputRef} type="text" placeholder="Tulis Nama" />
      <button 
      onClick={onClick}
        type="button"
        class="inline-block px-6 py-2 border-2 border-pink-500 text-orange-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        Change Name
      </button> */}
      <div className="space=x=5">
        <button onClick={() => {
            scroolToSection(homeRef);
        }}>
            Home
        </button>

        <button onClick={() => {
            scroolToSection(aboutRef);
        }}>
            About
        </button>
      </div>

      <div ref={homeRef} className="h-screen w-full bg-pink-500 pt-10" >
        <h2 className="text-green-500 font-bold">Home</h2>

      </div>

      <div ref={aboutRef} className="h-screen w-full bg-lime-500 pt-10" >
        <h2 className="text-red-500 font-bold">About</h2>

      </div>

      <button 
      onClick={() =>{
        scroolToTop(topRef);
      }}
      className="fixed bg-orange-500 cursor-pointer z-10 bottom-2 right-5"
      >
        Back To Top
      </button>
    </div>
  );
}
