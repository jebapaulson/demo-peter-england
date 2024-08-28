export default function Explore(){
    return(<>
        <p className="flex underline my-8 font-cabin font-bold justify-center">EXPLORE ALL</p>
        <div className="flex gap-60 items-center justify-center  bg-custom-green p-10 mt-12">
            <div>
            <p className="text-custom-white">Peter England Members</p>
            <h1 className="text-24px font-cabin  text-custom-white">EARN POINTS EVERY TIME YOU PURCHASE</h1>
            <p className="text-custom-white text-14px" >Register with us to get latest updates and spend your points to buy.</p>
            </div>
    
            <div className="bg-custom-white font-bold rounded-md px-4 py-3 ml-7 cursor-pointer">SIGN UP NOW</div>
        </div>
    
        <div className="flex justify-around mt-10 border-t-2 border-gray border-opacity-50 ">
            <div className="flex flex-col">
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/p-hicon-delivery_2x?resMode=sharp2&fmt=png8-alpha&wid=90&hei=90"
                className="size-fit"
                />
                <p className="text-14px">FREE SHIPPING</p>
            </div>
            <div className="flex flex-col">
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/pe-hicon-return?resMode=sharp2&fmt=png8-alpha&wid=90&hei=90"
                className="size-fit ml-8"
                />
                <p className="text-14px">RETURN WITHIN 15 DAYS</p>
            </div>
            <div className="flex flex-col">
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/p-eicon-fastdelivery_2x?resMode=sharp2&fmt=png8-alpha&wid=90&hei=90"
                className="size-fit ml-10"
                />
                <p className="text-14px">EXPRESS DELIVERY IN STORE MODE</p>
            </div>
        </div>
    
    </>)
    }
    