import { FaRoad } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FaGear } from "react-icons/fa6";
import pics1 from "../assets/2015-Toyota-Camry-Hybrid-02.avif"
import pics2 from "../assets/download (2).jpeg"
import pics4 from "../assets/download (4).jpeg"
import pics5 from "../assets/images.jpeg"
import pics6 from "../assets/download (6).jpeg"
import pics3 from "../assets/images (3).jpeg"


export default function Card(){
    return(
        <div>
            <div class="max-w-5xl mx-auto text-center mt-7">
        <h4 class="text-3xl font-bold mb-6 text-gray-700">Amazing Deals Of The Week</h4>
        <p class="text-base text-gray-300">Get a 29.9% discount on any of this cars</p>
      </div>
                    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm ">
        <div class="flex h-full dark:bg-gray-800 bg-gray-500 flex-col">
        <div>
       <img src={pics1} class="w-full" style={{height:233,width:360}}  />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l text-gray-800 font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className=""><FaRoad className="ml-2" />  2015</div>
               <div className=" "><AiFillDashboard className="ml-3" />45/56</div>
               <div><FaGear  className="ml-7"/>Automatic</div>
               </div>
        </div>
    </div>

    <div class="p-4 max-w-sm ">
        <div class="flex h-full dark:bg-gray-800 bg-gray-500 flex-col">
        <div>
       <img src={pics4} class="w-full" style={{height:233,width:360}}  />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l text-gray-800 font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className=""><FaRoad className="ml-2" />  2019</div>
               <div className=" "><AiFillDashboard className="ml-3" />45/56</div>
               <div><FaGear  className="ml-7"/>Automatic</div>
               </div>
        </div>
    </div>
    <div class="p-4 max-w-sm ">
        <div class="flex h-full dark:bg-gray-800 bg-gray-500 flex-col">
        <div>
       <img src={pics6} class="w-full" style={{height:233,width:360}} />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l text-gray-800 font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className=""><FaRoad className="ml-2" />  2019</div>
               <div className=" "><AiFillDashboard className="ml-3" />45/56</div>
               <div><FaGear  className="ml-7"/>Automatic</div>
               </div>
        </div>
    </div>
    <div class="p-4 max-w-sm ">
        <div class="flex h-full dark:bg-gray-800 bg-gray-500 flex-col">
        <div>
       <img src={pics2} class="w-full"style={{height:233,width:360}} />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5" >
                <p class=" font-sans text-l text-gray-800 font-bold flex-1">Toyota Venza</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className=""><FaRoad className="ml-2" />  2015</div>
               <div className=" "><AiFillDashboard className="ml-3" />45/56</div>
               <div><FaGear  className="ml-7"/>Automatic</div>
               </div>
        </div>
    </div>
    <div class="p-4 max-w-sm ">
        <div class="flex h-full dark:bg-gray-800 bg-gray-500 flex-col">
        <div>
       <img src={pics5} class="w-full" style={{height:233,width:360}} />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l text-gray-800 font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className=""><FaRoad className="ml-2" />  2019</div>
               <div className=" "><AiFillDashboard className="ml-3" />45/56</div>
               <div><FaGear  className="ml-7"/>Automatic</div>
               </div>
        </div>
    </div>
    <div class="p-4 max-w-sm ">
        <div class="flex h-full dark:bg-gray-800 bg-gray-500 flex-col">
        <div>
       <img src={pics3} class="w-full" style={{height:233,width:360}}  />
        </div>
            <div class="flex items-center flex-wrap gap-4 p-5">
                <p class=" font-sans text-l text-gray-800 font-bold flex-1">New Toyota Avalon</p>
                <button type="button"
                  class="px-5 py-2.5 font-sans rounded-sm text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Call Us</button>
            </div>
            <div className="px-5 pr-5">
            <hr class="border-gray-600" />
            </div>
            <div class="flex justify-between px-5 py-5">
               <div className=""><FaRoad className="ml-2" />  2019</div>
               <div className=" "><AiFillDashboard className="ml-3" />45/56</div>
               <div><FaGear  className="ml-7"/>Automatic</div>
               </div>
        </div>
    </div>

    

</div>
        </div>

    )
    
}