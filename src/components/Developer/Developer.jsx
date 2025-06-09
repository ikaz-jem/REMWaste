import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import clsx from 'clsx'
import { FaGithub } from "react-icons/fa";

export default function Developer({ className }) {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <ButtonPrimary
        className={clsx('cursor-pointer ', className)}
        onClick={open}      >
        Developer
      </ButtonPrimary>

      <Dialog open={isOpen} as="div" className=" relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">

          <div className="flex min-h-full items-center justify-center p-4 backdrop-blur  transition-all">
            <DialogPanel
              transition
              className="w-full relative max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div class="absolute top-0 left-[10px] h-px w-[200px] bg-radial from-primary via-accent-300 to-accent-300/0 mix-blend-overlay"></div>
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Zakariae ech-chebab
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Phone: +212 661809820
              </p>
              <p className="mt-2 text-sm/6 text-white/50">
                Email: echchebabzakariae@gmail.com
              </p>
              <p className="mt-2 text-sm/6 text-white/50 flex items-center gap-2">
                Repo and Docs :
                <a href="https://github.com/ikaz-jem/REMWaste" target='_blank'>
                  <FaGithub className='text-3xl text-primary hover:scale-110' />
                </a>
              </p>
              <div className="mt-4">
                <ButtonPrimary
                  onClick={close}
                >
                  Dismiss
                </ButtonPrimary>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}