import clsx from 'clsx'
import { convertUnit } from '../../utils/convertUnit'
import ToggleUnit from '../ToggleUnit/ToggleUnit';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrHomeOption } from "react-icons/gr";
import { BsCheck2Square } from "react-icons/bs";
import { useSearchParams } from "react-router";
import { useEffect } from 'react';

/**
 * 
 * @param {Object} selected The Selected Skîp Object  
 * @param {Array} skips Array Of skips Data Objects  
 * @returns {JSX.Element} A Selectable List of Skips Types
 */


export default function SelectSkipSize({ skips, setUnit, selected, displayUnit, unit, select }) {

    const [seachParams,setSearchParams] = useSearchParams();
    
    let buttonText = `Hire ${convertUnit(selected.size)} ${displayUnit} Skip`

 /**
 * useEffect hook that selects the first skip when the component mounts.
 * 
 * This hook is triggered once the component is mounted and it calls the 
 * `handleSelect` function to automatically select the first skip item in 
 * the `skips` array (`skips[0]`) and sets The Search Params.
 *
 * @function useEffect
 * @param {Array} skips The array of skips data.
 * @param {function} handleSelect The function used to select a skip and Sets the search params accordignly.
 * @returns {void}
 */


    useEffect(() => {
        handleSelect(skips[0])
    }, [])

    function handleSelect(skip) {
        select(skip)
        /**
         * This Function Meant to set the Query Params with Important Data like Selected Skip ID for later use in next component
         * @function setSearchParams
         */
        setSearchParams({ id: skip.id, size: skip.size })
    }


    return (
        <div className='flex flex-col gap-5 '>
            <div className='flex gap-2 w-full justify-between px-3'>
                <div className='grid gap-2'>
                    <p className='text-3xl text-white font-bold uppercase'>Skip Size</p>
                    <p className=' text-primary text-sm'>Select a Size</p>
                </div>
                <div className='grid place-items-center'>
                    <ToggleUnit setUnit={setUnit} unit={unit} />
                    <p className='text-xs text-white/50'>{displayUnit}</p>
                </div>
            </div>
            <ul className=' gap-2 overflow-y-scroll h-40 md:h-full max-h-[40vh] divide-y  divide-accent/10 rounded py-5'>
                {
                    skips?.map((skip) =>
                        <li key={skip.id} className={clsx('hover:bg-primary/5  h-12  cursor-pointer transition-all flex items-center px-5 py-5 text-white ', selected.id == skip.id ? "bg-primary/10 scale-98 shadow-inner shadow-black/50" : "bg-transparent")} onClick={() => handleSelect(skip)}>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex gap-5 items-center'>

                                    {
                                        skip.id == selected.id ?
                                            <BsCheck2Square className={clsx('text-xl hover:scale-110 transition-all text-primary')} />
                                            :
                                            <GrHomeOption className={clsx('text-xl hover:scale-110 transition-all text-primary/10')} />
                                    }
                                    <div className='flex flex-col '>

                                        <p className={clsx('capitalize font-bold text-lg' ,selected.id == skip.id && "text-primary"  )}>{convertUnit(skip.size, unit)} <span className='text-sm font-light'>{displayUnit} </span> </p>
                                    </div>
                                </div>
                                <p className='text-xs text-accent/60 bg-accent/10 border border-primary/10 rounded px-2 py-1'>{skip.hire_period_days} days + </p>
                            </div>
                        </li>)
                }
            </ul>
            <ButtonPrimary icon={<AiOutlineShoppingCart className='text-xl text-white' />} className='w-full py-5 capitalize'>
                {buttonText}
            </ButtonPrimary>
        </div>
    )
}
