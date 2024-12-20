import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
const solutions = [
    { name: 'Cars For Sale',  href: '#', },
    { name: 'Spare Parts For Sale',  href: '#',}
]

const services = [
    { name: 'Cars For Sale',  href: '#', },
    { name: 'Spare Parts For Sale',  href: '#',}
]


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-400" style={{backgroundColor: "#4F46E5"}}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" >
        <div className="lg:flex-1">
          <a href="#" className="">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="src/assets/logo-removebg-preview.png"
              className="h-8 w-auto"
            />
          </a>
          <h1 className='text-white text-base'><b>MUSTY JAY AUTOS</b></h1>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/8 font-semibold text-white hover:text-black">
           Home
          </a>
          <a href="#" className="text-sm/8 font-semibold text-white hover:text-black">
            About us
          </a>
          <a href="#" className="text-sm/8 font-semibold text-white hover:text-black">
            Gallery
          </a>
         
     
          <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 mt-1 font-semibold text-white">
        <span>Showroom</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-2 flex w-30  -translate-x-1/2 px-1 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-max max-w-md flex-auto overflow-hidden rounded-1xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-1">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-2 rounded-lg p-4 hover:bg-gray-50">
                
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </PopoverPanel>
    </Popover>
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 mt-1 font-semibold text-white">
        <span>Services</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-2 flex w-30  -translate-x-1/2 px-1 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-max max-w-md flex-auto overflow-hidden rounded-1xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-1">
            {services.map((item) => (
              <div key={item.name} className="group relative flex gap-x-2 rounded-lg p-4 hover:bg-gray-50">
                
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </PopoverPanel>
    </Popover>
          <a href="#" className="text-sm/8 font-semibold text-white hover:text-black">
            Contact Us 
          </a>
        </PopoverGroup>
  
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden" >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={{backgroundColor: "#4F46E5"}}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root " >
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50 hover:text-black"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50 hover:text-black"
                >
                  About Us
                </a>
                <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 mt-1 font-semibold text-white">
        <span>Showroom</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-1 flex w-max  -translate-x-1/2 px-3     transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-max max-w-md flex-auto overflow-hidden rounded-1xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-1">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-2 rounded-lg p-4 hover:bg-gray-50">
                
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </PopoverPanel>
    </Popover>
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 mt-1 font-semibold text-white">
        <span>Services</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-1 flex w-max  -translate-x-1/2 px-3     transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-max max-w-md flex-auto overflow-hidden rounded-1xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-1">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-2 rounded-lg p-4 hover:bg-gray-50">
                
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </PopoverPanel>
    </Popover>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50 hover:text-black"
                >
                  Contact Us           </a>  
              </div>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
