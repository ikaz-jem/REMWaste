import { Switch } from '@headlessui/react'

export default function ToggleUnit({setUnit,unit}) {

function handleChange(){
    if (unit){
        setUnit(false)
    }else {
        setUnit('yards')
    }
}


  return (
    <Switch
      checked={!unit}
      onChange={handleChange}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-primary/10 shadow-inner shadow-black/50 p-1 ease-in-out  data-checked:bg-accent/90 data-checked:shadow-inner data-focus:outline "
    >
      <span
        aria-hidden="true"
        className=" pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg shadow-black ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
      />
    </Switch>
  )
}
