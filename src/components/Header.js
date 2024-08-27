
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify-icons/system-uicons/location';

export default function Header() {

  const slides =[
    {url:"https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Performbanner?resMode=sharp2&wid=1600&hei=650"},
    {url:"https://s7ap1.scene7.com/is/image/adityabirlafashion/PE-HB-Zodiac-August-D?resMode=sharp2&wid=1600&hei=650"},
    {url:"https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_HB_Denim_D?resMode=sharp2&wid=1600&hei=650"},
    {url:"https://s7ap1.scene7.com/is/image/adityabirlafashion/PE-HB-Gentlemens-League-August-D?resMode=sharp2&wid=1600&hei=650"},
    {url:"https://s7ap1.scene7.com/is/image/adityabirlafashion/PE-HB-Festive-Favs-D?resMode=sharp2&wid=1600&hei=650"},
    {url:"https://s7ap1.scene7.com/is/image/adityabirlafashion/PE-HB-Yacht-August-D?resMode=sharp2&wid=1600&hei=650"}
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

   useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNextSlide();
    }, 3000); 

    return () => clearInterval(autoSlide); 
  }, [currentIndex]);

  return (
  <>
      <div className=" bg-custom-green">
        <div className="marquee overflow-hidden whitespace-nowrap animate-loop-scroll py-2 ">
          <span className="marquee-text text-sm text-custom-white">
            Get additional 10% off on your first purchase through the app or web. Use Code PEFIRST10.
          </span>
        </div>
      </div>
      <header className=" flex justify-between bg-black text-custom-white px-2 py-1"> 
       <div className="flex gap-2 px-2 cursor-pointer"> 
        <p className="font-cabin text-xs ml-5 my-1">MORE BRANDS 
           <ExpandMoreIcon fontSize="small" className="ml-1" />
           </p> 
        <div className="text-gray border border-1 underline "></div>
         <div className="flex ml-3 ">
         <p className="text-8px">Delivering to 
         <p className="text-10px underline font-bold"><a href="#" >Add delivery location</a></p>
         </p>
         </div>
       </div>    
        <nav className="hidden md:block mr-5">
        <ul className="flex gap-5 font-cabin text-xs items-center cursor-pointer">
          <Icon icon={locationIcon} className="size-8"/>
          <li>
            <a href="#about" className="hover:text-yellow">STROES</a>
          </li>
        <div className="text-gray ">|</div>
        <Icon icon="material-symbols-light:chat-info-outline"  className="text-custom-white size-8"/>
          <li>
            <a href="#projects " className="hover:text-yellow">CONTACT US</a>
          </li> 
        <div className="text-gray ">|</div>
         <Icon icon="lets-icons:user-alt-light"  className="text-custom-white size-8"/>
          <li>
            <a href="#home" className=" hover:text-yellow">LOGIN</a>
          </li> 
        <div className="text-gray ">|</div>
        <Icon icon="fluent:heart-48-regular" className="size-8" />
        <div className="text-gray ">|</div>
        <Icon icon="ph:shopping-cart-light"  className="text-custom-white size-8"/>
        </ul>
      </nav>
      </header>
      <div className="flex justify-end sticky z-50 top-0 bg-custom-white">
        <div className="flex justify-between w-11/12 pr-4 ">
          <div className="flex items-center gap-5 pb-1 pt-3">
            <img
            src='https://imagescdn.peterengland.com/img/app/brands/superapp/Icons/header_brand_logo_PE.png?auto=format'
            alt="My Icon"
            className="h-[75px]"
            />

            <div>
              <ul className="flex gap-10 font-cabin text-14px items-center cursor-pointer px-3">
                <li>
                  <div className="relative inline-block group">
                    <p className="">MEN</p>
                    <div className="top-10 absolute left-0 bottom-0 flex w-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300">
                      <span className="w-full h-[3px] bg-custom-green"></span>
                      <span className="w-full h-[3px] bg-red"></span>
                    </div>
                  </div>
                </li>
                <li>   
                  <div className="relative inline-block group">
                    <p className="">CRICKET</p>
                    <div className="top-10 absolute left-0 bottom-0 flex w-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300">
                      <span className="w-full h-[3px] bg-custom-green"></span>
                      <span className="w-full h-[3px] bg-red"></span>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#about">WEDDING STORE</a>
                </li>
                <li>
                  <a href="#about">NEW ARRIVALS</a>
                </li>
                <li>
                  <div className="relative inline-block group">
                    <p className="">KIDS</p>
                    <div className="top-10 absolute left-0 bottom-0 flex w-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300">
                      <span className="w-full h-[3px] bg-custom-green"></span>
                      <span className="w-full h-[3px] bg-red"></span>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#about">CUSTOMIZE</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-8">
              <div className="relative flex items-center border-b border-black overflow-hidden mb-4 font-cabin text-14px">
                <Icon icon="weui:search-outlined" className="text-black size-8 mr-2 mt-5" />
                <input
                  type="text"
                  className="w-full border-none focus:outline-none placeholder-black mt-5"
                  placeholder="Search"
                />
                <div className="absolute right-2 delay-0  mt-5">
                  <p className="animate-scroll-up">Suits</p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-black pl-6 py-2 rounded-full pr-12 mb-3">
                <Icon icon="mdi:truck-fast-outline"  className="text-custom-white size-8" />
                <div className="">
                  <p className="text-12px font-cabin font-semibold text-custom-white">EXPRESS DELIVERY</p>
                  <p className="flex text-12px font-bold font-cabin text-custom-green">Select your nearest store
                    <Icon icon="material-symbols-light:keyboard-arrow-right"  className="text-custom-green size-4" />    
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://imagescdn.peterengland.com/img/app/brands/superapp/Icons/ABFRL_logo_image.svg"
              alt="My Icon1"
              className="h-[75px]"
            />
          </div>
        </div>
      </div>

        <div className="w-full h-[650px] relative">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full duration-500 relative flex items-center justify-between"
          >
            <div className=" text-custom-white absolute left-48 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <Icon icon="iconamoon:arrow-left-2-light" className="size-12"  onClick={handlePrevSlide}/>
            </div>
            <div className=" text-custom-white absolute right-48 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <Icon icon="iconamoon:arrow-right-2-light" className="size-12"  onClick={handleNextSlide}/>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
            <div
              key={index}
              className={`w-5 h-2 rounded-3xl cursor-pointer ${
                index === currentIndex ? 'bg-custom-green w-12' : 'bg-custom-white'
              }`}
              onClick={() => handleDotClick(index)}
            />
            ))}
          </div>
        </div>

      <div className="z-10 fixed bottom-0 right-0 size-16 m-6">
        <div className="relative">
          <img 
            src="https://cdn.yellowmessenger.com/EX7EgVl9Lyq31702362557595.png"
            className="w-full h-auto"
          />
          <span className="absolute bottom-0 left-[80%] transform -translate-x-1/2 translate-y-[155] w-3 h-3 bg-custom-green rounded-full border-[3px] border-custom-white"></span>
        </div>
      </div>
  </>
  );
}
