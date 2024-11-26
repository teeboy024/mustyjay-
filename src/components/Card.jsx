import { FaRoad } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FaGear } from "react-icons/fa6";
import pics1 from "../assets/2015-Toyota-Camry-Hybrid-02.avif"
import pics2 from "../assets/download (2).jpeg"
import pics4 from "../assets/download (4).jpeg"
import pics5 from "../assets/images.jpeg"
import pics6 from "../assets/download (6).jpeg"
import pics3 from "../assets/images (3).jpeg"
import pics7 from "../assets/repair-service.png"
import pics8 from "../assets/car-with-spare-tire.png"


export default function Card(){
    return(
        <div>
            <div class="max-w-5xl mx-auto text-center mt-7">
        <h4 class="text-3xl font-bold mb-2 " style={{color: "#4F46E5"}}>Amazing Deals Of The Week</h4>
        <p class="text-base text-gray-400">Get a 29.9% discount on any of this cars</p>
      </div>
                    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm rounded">
        <div class="flex h-full flex-col cards"  style={{backgroundColor: "#4F46E5"}} >
        <div>
       <img src={pics1} className="w-full rounded" style={{height:233,width:360}}  />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l text-white font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className="text-white"><FaRoad className="ml-2 text-white" />  2015</div>
               <div className=" text-white"><AiFillDashboard className="ml-3 text-white" />45/56</div>
               <div className="text-white"><FaGear  className="ml-7 text-white"/>Automatic</div>
               </div>
        </div>
    </div>

    <div class="p-4 max-w-sm ">
    <div class="flex h-full  flex-col cards"  style={{backgroundColor: "#4F46E5"}} >
     <div>
       <img src={pics4} class="w-full" style={{height:233,width:360}}  />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l text-white font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className="text-white"><FaRoad className="ml-2 text-white" />  2015</div>
               <div className=" text-white"><AiFillDashboard className="ml-3 text-white" />45/56</div>
               <div className="text-white"><FaGear  className="ml-7 text-white"/>Automatic</div>
               </div>
        </div>
    </div>
    <div class="p-4 max-w-sm ">
    <div class="flex h-full flex-col cards"  style={{backgroundColor: "#4F46E5"}} >      
      <div>
       <img src={pics6} class="w-full" style={{height:233,width:360}} />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l text-white font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className="text-white"><FaRoad className="ml-2 text-white" />  2015</div>
               <div className=" text-white"><AiFillDashboard className="ml-3 text-white" />45/56</div>
               <div className="text-white"><FaGear  className="ml-7 text-white"/>Automatic</div>
               </div>
        </div>
    </div>
    <div class="p-4 max-w-sm ">
    <div class="flex h-full flex-col cards"  style={{backgroundColor: "#4F46E5"}} >
      <div>
       <img src={pics2} class="w-full"style={{height:233,width:360}} />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5" >
                <p class=" font-sans text-l text-white font-bold flex-1">Toyota Venza</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className="text-white"><FaRoad className="ml-2 text-white" />  2015</div>
               <div className=" text-white"><AiFillDashboard className="ml-3 text-white" />45/56</div>
               <div className="text-white"><FaGear  className="ml-7 text-white"/>Automatic</div>
               </div>
        </div>
    </div>
    <div class="p-4 max-w-sm ">
    <div class="flex h-full flex-col cards"  style={{backgroundColor: "#4F46E5"}} >
        <div>
       <img src={pics5} class="w-full" style={{height:233,width:360}} />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l  text-white  font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className="text-white"><FaRoad className="ml-2 text-white" />  2015</div>
               <div className=" text-white"><AiFillDashboard className="ml-3 text-white" />45/56</div>
               <div className="text-white"><FaGear  className="ml-7 text-white"/>Automatic</div>
               </div>
        </div>
    </div>
    <div class="p-4 max-w-sm ">
    <div class="flex h-full flex-col cards"  style={{backgroundColor: "#4F46E5"}} >
        <div>
       <img src={pics3} class="w-full" style={{height:233,width:360}}  />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l text-white font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className="text-white"><FaRoad className="ml-2 text-white" />  2015</div>
               <div className=" text-white"><AiFillDashboard className="ml-3 text-white" />45/56</div>
               <div className="text-white"><FaGear  className="ml-7 text-white"/>Automatic</div>
               </div>
        </div>
    </div>

    

</div>

<div class="bg-[url('src/assets/images.jfif')] font-[sans-serif] mt-10 bg-no-repeat bg-cover bg-center">
      <div class="max-w-6xl mx-auto py-16 px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-md:max-w-md mx-auto">
          <div class="overflow-hidden ">
            <div id="word"  class="p-8">
                <img src={pics7} alt="" />
            <h6 class="text-2xl font-bold mb-3 text-gray-800">LOOKING FOR AUTO REPAIR?</h6>
              <p class="text-gray-700 text-bold leading-relaxed leading-8">Our service department maintain your car to stay safe on the road for many more years. We provide the absolute best value for your Toyota/Lexus vehicle. Schedule your appointment today!</p>
              <button type="button"
                  class="px-3 py-3 rounded-sm text-white text-bold tracking-wider bg-gray-700 hover:bg-red-700 outline-none mt-5">Book Appointment</button>
            </div>
          </div>

          <div id="word1" class="hover:bg-red-700 overflow-hidden shadow-md transition-all">
            <div class="p-8">
                <img src={pics8} alt="" />
            <h6 class="text-2xl font-bold mb-3 text-gray-800 ">Looking For Accessories?</h6>
              <p class="text-gray-700 text-bold leading-relaxed leading-8">With a robust selection of popular Automobile new spare parts, we're trusted by many to provide on-demand accessories for your Toyota/Lexus branded cars. Call or visit us today!</p>
              <button type="button"
                  class="px-3 py-3 rounded-sm text-white text-bold tracking-wider bg-gray-700 hover:bg-red-700 outline-none mt-5">Find Accessories</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="bg-gradient-to-t p-6 ">
      <div class="flex flex-col lg:flex-row items-center sm:text-center sm:gap-12 gap-6 max-w-6xl 
       mx-auto ">
        <div>
          <h6  class="sm:text-1xl text-4xl   font-medium tracking-wider">About Us</h6>
        </div>

        <div class="p-2 cus-within:bg-white">
          <p>PIVOT MOTORS LIMITED is one of the fastest growing, automobile car dealers in Nigeria, with a reputable customer network across the states. We proud ourselves in our timely delivery of quality within a pocket friendly budget, when it comes to brand new Auto mobile services. Our customer care and after sales services give rest of mind to our valued customers.</p>
          <button type='button'
            class="bg-gray-700 hover:bg-gray-800 transition-all text-white font-semibold text-sm rounded-full px-6 py-3">Submit</button>
        </div>
      </div>
    </div>
        </div>

    )
    
}