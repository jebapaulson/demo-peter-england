export default function Collections() {
    return(
     <>
         <div>
           <h5 className="flex font-cabin text-21px font-bold justify-start mt-16 ml-[8%] pb-5">FEATURED COLLECTIONS</h5>
           <div className=" flex gap-6 p-2 justify-center">
             <a target="_blank" href="https://peterengland.abfrl.in/c/classic-whites">
             <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_FC_Whites?resMode=sharp2&wid=420&hei=315"
             className="cursor-pointer"
             /></a>
             <a target="_blank" href="https://peterengland.abfrl.in/c/black-and-bold">
             <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_FC_Black?resMode=sharp2&wid=420&hei=315"
             className="cursor-pointer"
             /></a>
             <a target="_blank" href="https://peterengland.abfrl.in/c/casual-checks">
            <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_FC_Checks?resMode=sharp2&wid=420&hei=315"
             className="cursor-pointer"
             /></a>
           </div>
         </div>
   
         <div className="relative mt-[50px]">
             <img
               src="https://s7ap1.scene7.com/is/image/adityabirlafashion/download-app-bg_2x?wid=1600&hei=380"
               alt="Background"
             />
   
             <div className="flex justify-start absolute top-0 left-0 w-full h-full items-center mt-[40px] pt-[88px] pb-[85px] ml-[100px]">
               <div className="flex flex-col text-center text-custom-white gap-6">
                 <h2 className="text-21px font-bold font-cabin">Get Flat 10% off on app and web</h2>
                 <p>
                   Download the Peter England App and get <br/>Flat 10% off on your first purchase. Use<br/> Code PEFIRST10. T&C applies!
                 </p>
                 <div className="flex gap-3">
                   <a href="https://apps.apple.com/in/app/peter-england/id1576511166">
                     <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/pe_app_store_2x?resMode=sharp2&fmt=png8-alpha&wid=175&hei=60"/>
                   </a>
                   <a href="https://play.google.com/store/search?q=peter+england&c=apps&hl=en&gl=IN&pli=1">
                   <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/pe_google_store_2x?resMode=sharp2&fmt=png8-alpha&wid=175&hei=60"/>
                   </a>
                 </div>
               </div>
   
               <div className="ml-[300px] w-[220px] h-[200px]">
                 <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_QR_Code?resMode=sharp2&fmt=png8-alpha"/>
               </div>
             </div>
         </div>
         <div className="flex">
               <div className="ml-[10%] mt-[4%] relative w-[50%] cursor-pointer">
                   <video src="https://s7ap1.scene7.com/is/content/adityabirlafashion/PETER_ENGLAND_45SEC_10MB" 
                     className="w-full h-full rounded-xl" />
                   <div className="absolute bottom-0 left-0 w-[50%] h-2 bg-custom-green rounded-bl-xl"></div>
                   <div className="absolute bottom-0 right-0 w-[50%] h-2 bg-red rounded-br-xl"></div>
               </div>
               <div className="flex flex-col justify-center mt-12 ml-20">
                 <div className="mt-[6%] text-14px font-cabin font-bold relative mb-[23px]">
                   THE GENTLEMEN'S LEAGUE
                   <span
                     className="absolute bottom-0 left-0 w-44 h-[4px] rounded-bl-xl rounded-br-xl"
                     style={{
                       background: "linear-gradient(270deg, #c9252c 50%, #00734a 50%)",
                     }}
                   ></span>
                 </div>
   
                 <div className="text-21px font-cabin font-semibold">
                   Introducing Peter England's<br/> Gentlemen's League.<br/>
                   An all-new<br/> collection that’s inspired by our <br/> dearest game.
                 </div>
                 
                 <div className="mt-8">
                   <a target="_blank" href="https://peterengland.abfrl.in/gentlemens-league">
                     <span className="bg-blue rounded-md p-4 text-custom-white text-14px font-cabin font-bold hover:bg-red">SHOP COLLECTION</span>
                   </a>
                 </div>
               </div>
         </div>
         
         <div className="flex gap-6 items-center justify-center  bg-custom-green p-4 mt-12">
           <img src="https://imagescdn.peterengland.com/img/app/brands/superapp/Icons/v-hicon-loyalty-pe.svg"/>
          
           <div>
           <h1 className="text-24px font-cabin font-extrabold text-custom-white">Refer & Earn with the Referral Program</h1>
           <p className="text-custom-white font-bold text-14px" >Invite your friends and earn up to ₹ 7500 in discounts.</p>
           </div>
   
           <div className="bg-custom-white font-bold rounded-md px-4 py-3 ml-7 cursor-pointer">SIGN UP NOW</div>
         </div>
     </>
    );
   }
   