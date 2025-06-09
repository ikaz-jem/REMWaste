import clsx from "clsx";
import { FaRoadBarrier } from "react-icons/fa6";
import { TbFiretruck } from "react-icons/tb";
import { GiTowTruck } from "react-icons/gi";
import { convertUnit } from "../../utils/convertUnit";
import skip from '../../assets/skip.webp'


export default function SkipInfoCard({ unit, selected, displayUnit }) {
    return (

        <div className='flex flex-col gap-5 border  rounded p-5 relative'>
            <div className='flex items-center justify-center'>
                {
                    !selected?.transport_cost && <p className='bg-green-500/20 border border-green-500/30 absolute top-0 right-0 rounded px-2 py-1 text-green-500 text-xs'> Free Delivery </p>
                }

                <img src={skip} loading='lazy' alt="" className="w-full" />
            </div>
            <div className='grid gap-3'>
                <div className='flex justify-between items-center'>

                    <p className='text-xl  lg:text-4xl text-accent font-bold uppercase'> {convertUnit(selected.size, unit)} {displayUnit} Skip </p>
                    <p className='text-xs text-neutral font-bold uppercase truncate'> {selected.hire_period_days} Days Hire Periode </p>
                </div>

                <p className=' text-neutral'>{selected.postcode}</p>
                <p className=' text-neutral'>Per Ton Cost : {selected.per_tonne_cost ? ` £${selected.per_tonne_cost}` : "Free"}</p>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5'>
                        <FaRoadBarrier className={clsx('text-3xl hover:scale-110 transition-all', selected.allowed_on_road ? "text-primary" : 'text-neutral-500 ')} />
                        <TbFiretruck className={clsx('text-3xl hover:scale-110 transition-all', selected.allows_heavy_waste ? "text-primary" : 'text-neutral-500 ')} />
                        <GiTowTruck className={clsx('text-3xl hover:scale-110 transition-all', !selected.transport_cost ? "text-primary" : 'text-neutral-500 ')} />
                    </div>
                    <p className=' text-accent border border-accent/40 text-xl md:text-2xl lg:text-3xl bg-accent/10 rounded-full p-1 px-5 w-max text-right'>£ {selected.price_before_vat} </p>
                </div>

            </div>

        </div>
    )


}