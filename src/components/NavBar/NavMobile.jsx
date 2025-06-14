import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild, DisclosureButton } from '@headlessui/react'
import { useState } from 'react'
import logo from "../../assets/logo.png"
import { navigation } from "./navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Developer from '../Developer/Developer';

export default function NavbaMobile() {

  const [open, setOpen] = useState(false)
  
  return (
    <>
      <GiHamburgerMenu className="text-4xl text-white hover:text-primary transition-all cursor-pointer md:hidden flex " onClick={() => setOpen(true)} />
      <Dialog open={open} onClose={setOpen} className="relative z-10">

        <DialogBackdrop
          transition
          className="fixed inset-0  sepia-80 backdrop-blur transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-background py-6 shadow-xl">

                  <TransitionChild>
                    <div className=" flex  duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4 justify-end px-5">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <IoCloseSharp aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </TransitionChild>

                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold text-gray-900">

                      <div className="flex items-center gap-2 ">
                        <img src={logo} alt="" loading="lazy" className=" h-12" />
                        <h5 className="font-light  tracking-wide text-xl ">Yieldium</h5>
                      </div>

                    </DialogTitle>
                  </div>
                  <div className="w-full h-full p-5">
                    <ul className="grid gap-5 ">
                      {
                        navigation?.map((link, idx) => <li key={idx} className="cursor-pointer text-foreground hover:text-primary bg-white/5 p-2 rounded">{link?.title}</li>)
                      }
                    </ul>

                  </div>

                  <div className="flex justify-center p-5">

                    <Developer className={"w-full"}/>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}
