import pics1 from "../assets/2019-toyota-camry.jpg"
import pics2 from "../assets/Hilux-Front-Bnr.jpg"
import pics3 from "../assets/2019-Lexus-470.jpg"
import pics4 from "../assets/2019-Lexus-570.jpg"
import pics5 from "../assets/2019-toyota-coaster.jpg"
import pics6 from "../assets/Corolla-Altis.jpg"
import pics7 from "../assets/Fortuner.jpg"
import pics8 from "../assets/download (1).jpeg"
import pics9 from "../assets/download (3).jpeg"
import pics10 from "../assets/123-1232251_hyundai-sonata-hyundai-car-images-png-transparent-png-removebg-preview.png"


export default function Collection() {
  return (
    
    <div class="max-w-7xl max-sm:max-w-md mx-auto p-4 font-[sans-serif]">
      <div class="max-w-5xl mx-auto text-center mt-7">
        <h4 class="text-4xl font-bold mb-6 text-black">Luxury Car Dealers in Nigeria</h4>
        <p class="text-base text-gray-300">Experience Full Range Of Luxury On Wheels.</p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-2 gap-2 mt-5 sm:grid-cols  ">
      <label for="radio4" class=" py-8 px-4 relative">
          <img src= {pics1}
           alt="" />
           <h6 className="text-center font-[sans-serif] font-bold text-gray-700" >Toyota camry</h6>
        </label>
        <label for="radio4" class=" py-8 px-4 relative ">
          <img src={pics2} alt="" />
          <h6 className="text-center font-[sans-serif] font-bold text-gray-700" >Toyota Hilux</h6>
        </label>
        <label for="radio4" class=" py-8 px-4 relative">
          <img src={pics3} 
          alt=""   />
            <h6 className="text-center font-[sans-serif] font-bold text-gray-700" >Lexus GX 470</h6>
        </label>
        <label for="radio4" class=" py-8 px-4 relative">
          <img src={pics4} alt=""   />
          <h6 className="text-center font-[sans-serif] font-bold text-gray-700" >Lexus LX 570</h6>
        </label>
        <label for="radio4" class=" py-8 px-4 relative">
          <img src={pics5} alt=""   />
          <h6 className="text-center font-[sans-serif] font-bold text-gray-700" >Toyota Coaster</h6>
        </label>
        <label for="radio4" class=" py-8 px-4 relative">
          <img src={pics6} alt=""   / >
          <h6 className="text-center font-[sans-serif] font-bold text-gray-700" >Corolla Altis</h6>
        </label>
        <label for="radio4" class=" py-8 px-4 relative">
          <img src={pics7} alt=""  />
          <h6 className="text-center font-[sans-serif] font-bold text-gray-700" >Fortuner</h6>
        </label>
        <label for="radio4" class=" py-8 px-2 relative">
          <img src={pics8} alt=""  />
          <h6 className="text-center font-[sans-serif] font-bold text-gray-700 "  >Toyota Highlander</h6>
        </label>
        <label for="radio4" class=" py-7 px-6 relative">
          <img src={pics9} alt="" />
          <h6 className="text-center font-[sans-serif] font-bold text-gray-700 "  >Hyundai Santafe</h6>
        </label>
        <label for="radio4" class=" py-3 px-4 relative">
          <img src={pics10} alt="" />
          <h6 className="text-center font-[sans-serif] font-bold text-gray-700 "  >Hyundai Sonata</h6>
        </label>

      </div>

     
    </div>
  )
}
