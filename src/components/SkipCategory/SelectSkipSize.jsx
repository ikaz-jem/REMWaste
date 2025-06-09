import clsx from 'clsx'
import { convertUnit } from '../../utils/convertUnit'
import ToggleUnit from '../ToggleUnit/ToggleUnit';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrHomeOption } from "react-icons/gr";
import { BsCheck2Square } from "react-icons/bs";


/**
 * 
 * @param {Object} selected The Selected Skîp Object  
 * @param {Array} skips Array Of skips Data Objects  
 * @returns {JSX.Element} A Selectable List of Skips Types
 */




export default function SelectSkipSize({ skips, setUnit, selected, displayUnit, unit, select }) {

    let buttonText = `Hire ${convertUnit(selected.size)} ${displayUnit} Skip`

    return (
        <div className='flex flex-col gap-5 '>
            <div className='flex gap-2 w-full justify-between px-3'>
                <div className='grid gap-2'>
                    <p className='text-4xl text-white font-bold uppercase'>Skip Size</p>
                    <p className=' text-primary'>Select a Size</p>
                </div>
                <div className='grid place-items-center'>
                    <ToggleUnit setUnit={setUnit} unit={unit} />
                    <p className='text-xs text-white/50'>{displayUnit}</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 overflow-y-scroll h-40 md:h-full max-h-[40vh]  rounded py-5'>
                {
                    skips?.map((skip) =>
                        <div key={skip.id} className={clsx(' border border-accent/10 h-12 rounded cursor-pointer transition-all flex items-center px-5 py-5 text-white ', selected.id == skip.id ? "bg-primary/10 scale-98" : "bg-transparent")} onClick={() => select(skip)}>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex gap-5 items-center'>

                                    {
                                        skip.id == selected.id ?
                                            <BsCheck2Square className={clsx('text-xl hover:scale-110 transition-all text-primary')} />
                                            :
                                            <GrHomeOption className={clsx('text-xl hover:scale-110 transition-all text-primary/10')} />
                                    }
                                    <div className='flex flex-col '>

                                    <p className='capitalize font-bold text-lg'>{convertUnit(skip.size, unit)} <span className='text-sm font-light'>{displayUnit} </span> </p>
                                    </div>
                                </div>
                                <p className='text-xs text-accent/60 bg-accent/10 border border-primary/10 rounded px-2 py-1'>{skip.hire_period_days} days + </p>
                            </div>
                        </div>)
                }
            </div>
            <ButtonPrimary icon={<AiOutlineShoppingCart className='text-xl text-white' />} className='w-full py-5 capitalize'>
                {buttonText}
            </ButtonPrimary>
        </div>
    )
}
