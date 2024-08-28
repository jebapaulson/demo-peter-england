import { Icon } from "@iconify/react/dist/iconify.js";

export default function Contact(){
  return <>
  <div className="mt-10 px-20 flex justify-between bg-custom-black text-custom-white p-5">
    <div className="flex flex-col">
          <p className="font-bold mb-1 font-cabin text-14px">NEED HELP?</p>
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20STATUS"
          className="hover:underline font-cabin"> Order Status</a>
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"
          className="hover:underline font-cabin"> Delivery</a>   
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"
          className="hover:underline font-cabin"> Return</a>     
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"
          className="hover:underline font-cabin">FAQs</a>      
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"
          className="hover:underline font-cabin"> Shipping Policy</a>    
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"
          className="hover:underline font-cabin"> Return And Concellation Policy</a>    
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"
          className="hover:underline font-cabin"> Contact Us</a>    
    </div>
    <div className="flex flex-col">
    <p className="font-bold mb-1 font-cabin text-14px">ABOUT US</p>
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20STATUS"
          className="hover:underline font-cabin">  Aditya Birla Fashion & Retail Ltd</a>
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"
          className="hover:underline font-cabin"> Find a Store</a>   
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"
          className="hover:underline font-cabin"> Peter England Blogs</a>     
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"> Terms and conditions For Membership<br/> Program</a>      
          <a href="https://content.abfrl.in/faqdetail?uid=ORDER%20TRACKING"
          className="hover:underline font-cabin"> Bulk Order</a>    
    </div>
    <div className="flex  flex-col ml-20">
    <p className="font-bold mb-1 font-cabin text-14px">JOIN THE PETER ENGLAND COMMUNITY</p>
         <div className="flex justify-between  border-b-2 py-4 border-gray">
          <input type="text" placeholder="Enter your e-mail" className="text-14px min-w-fit font-cabin bg-custom-black text-custom-white"></input>
          <Icon icon="ph:arrow-right-thin"  className="text-custom-white " />
         </div>
         <div className="text-14px text-gray font-cabin my-4">Sign up for updates on the latest Peter England collection, 
          <br/>campaigns and videos.</div>
         <div className="flex gap-3 items-center">
          <p className="text-14px font-bold font-cabin text-custom-white">FIND US ON SOCIAL</p>
          <a target="_blank" href="https://www.facebook.com/peterenglandofficial">
          <Icon icon="gg:facebook" className="text-custom-white size-6 cursor-pointer" />
          </a>
          <a target="_blank" href="https://x.com/PeterEngland_?mx=2">
          <Icon icon="hugeicons:new-twitter" className="text-custom-white size-6 cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.instagram.com/peterengland/">
          <Icon icon="prime:instagram" className="text-custom-white size-6 cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.youtube.com/user/peterenglandofficial">
          <Icon icon="bi:youtube" className="text-custom-white size-6 cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/showcase/peter-england">
          <Icon icon="ri:linkedin-fill" className="text-custom-white size-6 cursor-pointer" /> 
          </a>
         </div>
    </div>
  </div>
  </>
}
