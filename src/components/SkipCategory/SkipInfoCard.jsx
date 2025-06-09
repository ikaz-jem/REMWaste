import clsx from "clsx";
import { FaRoadBarrier } from "react-icons/fa6";
import { TbFiretruck } from "react-icons/tb";
import { GiTowTruck } from "react-icons/gi";
import { convertUnit } from "../../utils/convertUnit";
import skip from '../../assets/skip.webp'

import { Tooltip } from 'react-tooltip'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function SkipInfoCard({ unit, selected, displayUnit }) {
    return (

        <div className='flex flex-col gap-5 border border-primary/5 bg-accent/2 shadow-2xl  rounded p-5 '>
            <Tooltip id="icons-tooltip" />


            <div className='flex items-center justify-center relative'>
                {
                    !selected?.transport_cost && <p className='bg-green-500/20 border border-green-500/30 absolute top-0 right-0 rounded px-2 py-1 text-green-500 text-xs backdrop-blur'> Free Delivery </p>
                }

                <img src={skip} loading='lazy' alt="" className="w-full" />
            </div>
            <div className='grid gap-3'>
                <div className='flex justify-between items-center'>

                    <p className='text-xl  lg:text-2xl text-accent font-bold uppercase'> {convertUnit(selected.size, unit)} {displayUnit} Skip </p>
                    <p className='text-xs text-neutral font-bold uppercase truncate'> {selected.hire_period_days} Days Hire Periode </p>
                </div>

                <p className=' text-neutral'>{selected.postcode}</p>
                <p className=' text-neutral'>Per Ton Cost : {selected.per_tonne_cost ? ` £${selected.per_tonne_cost}` : "Free"}</p>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5'>
                        <FaRoadBarrier data-tooltip-id="icons-tooltip" data-tooltip-content={clsx(selected.allowed_on_road ? "Road Friendly" : "⚠️ Not Allowed On Roads")} className={clsx('cursor-pointer text-3xl hover:scale-110 transition-all', selected.allowed_on_road ? "text-primary" : 'text-neutral-500 ')} />
                        <TbFiretruck data-tooltip-id="icons-tooltip" data-tooltip-content={clsx(selected.allows_heavy_waste ? "Heavy Waste Allowed " : "⚠️ Heavy Waste Not Allowed ")} className={clsx('cursor-pointer text-3xl hover:scale-110 transition-all', selected.allows_heavy_waste ? "text-primary" : 'text-neutral-500 ')} />
                        <GiTowTruck data-tooltip-id="icons-tooltip" data-tooltip-content={clsx(selected.transport_cost ? "⚠️ Transport Excluded " : " Free Transport ")} className={clsx('cursor-pointer text-3xl hover:scale-110 transition-all', !selected.transport_cost ? "text-primary" : 'text-neutral-500 ')} />
                    </div>
                    <div className='  border border-accent/40 bg-accent/10 rounded-lg p-2 px-5 w-max flex flex-col items-center justify-center'>
                    <p className="text-xl md:text-2xl lg:text-3xl text-accent">£ {selected.price_before_vat}</p>
                    {/* <p className='text-[10px] text-red-500 font-bold  truncate  '> For {selected.hire_period_days} Days !   </p> */}
                    </div>
                </div>
                                <ButtonPrimary icon={<AiOutlineShoppingCart className='text-xl text-white' />} className='w-full py-5 capitalize  md:hidden'>
                                    {`Hire  Skip`}
                                </ButtonPrimary>

            </div>

        </div>
    )


}