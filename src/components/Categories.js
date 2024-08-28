import { useRef } from 'react';
import { Icon } from '@iconify/react';

export default function Categories() {
  const topCollections = [
    { url: "https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_16_Jackets?resMode=sharp2&wid=200&hei=200" },
    { url: "https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_TC_7?resMode=sharp2&wid=200&hei=200" },
    { url: "https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_11_T_Shirts?resMode=sharp2&wid=200&hei=200" },
    { url: "https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_11_Jeans?resMode=sharp2&wid=200&hei=200" },
    { url: "https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_12_Footwear?resMode=sharp2&wid=200&hei=200" },
    { url: "https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_15_Shirts?resMode=sharp2&wid=200&hei=200" },
    { url: "https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_13_Activewear?resMode=sharp2&wid=200&hei=200" },
    { url: "https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_11_Trousers?resMode=sharp2&wid=200&hei=200" },
  ];

  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
    <div className="pt-20">
      <h5 className="flex font-cabin text-21px font-bold justify-center pb-5">TOP CATEGORIES</h5>
      <div className="relative flex items-center mx-28">
        <button
          onClick={() => scroll('left')}
          className="absolute left-8 z-10 p-2 bg-custom-white rounded-full shadow-lg"
        >
          <Icon icon="iconamoon:arrow-left-2-light" className="size-8  text-gray" />
        </button>
        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-4 py-4 px-10 no-scrollbar"
        >
          {topCollections.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-full p-2"
              style={{ width: '200px', height: '200px' }}
            >
              <img
                src={item.url}
                alt={`Collection ${index}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-8 z-10 p-2 bg-custom-white rounded-full  shadow-lg"
        >
          <Icon icon="iconamoon:arrow-right-2-light" className="size-8 text-gray" />
        </button>
      </div>
    </div>

      <div className='flex gap-5 my-8 mr-12 ml-16 justify-center mt-16'>
        <div className="relative w-[45%] h-[450px]">
          <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Platinum_Wedding?resMode=sharp2&wid=964&hei=723" 
            className="w-full h-full rounded-xl" />
          <div className="absolute bottom-0 left-0 w-[50%] h-2 bg-custom-green rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-[50%] h-2 bg-red rounded-br-xl"></div>
        </div>
        <div className="relative w-[45%] h-[450px]">
          <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Platinum_Chinos?resMode=sharp2&wid=964&hei=723"
            className="w-full h-full rounded-xl" />
          <div className="absolute bottom-0 left-0 w-[50%] h-2 bg-custom-green rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-[50%] h-2 bg-red rounded-br-xl"></div>
        </div>
      </div>
  </>
  );
}
