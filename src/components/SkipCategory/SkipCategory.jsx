import { useState } from 'react'
import SkipInfoCard from './SkipInfoCard';
import SkipBorderEffect from './SkipBorderEffect';
import SelectSkipSize from './SelectSkipSize';


/**
 * A React component that displays a user's profile card.
 * 
 * @component
 * @param {Array} props.skips - Cached / Fetched Data From Server.
 * @returns {JSX.Element} A profile card element displaying user information.
 */


export default function SkipCategory({ skips }) {

    const [selected, setSelected] = useState(skips[0] || {})
    const [unit, setUnit] = useState('yards')

    const displayUnit = unit || "Meters"
    
    const handleSelect = (item) => setSelected(item)

    return (
        <div className=' border-primary/10 h-full w-full rounded-xl p-10 border overflow-hidden  shadow-xl shadow-black relative backdrop-blur bg-gradient-to-tr from-black/70 to-black/50'>
            <SkipBorderEffect />
            <div className='grid md:grid-cols-2 gap-10'>
                <SelectSkipSize select={handleSelect} skips={skips} selected={selected} setUnit={setUnit} unit={unit} displayUnit={displayUnit} />
                <SkipInfoCard unit={unit} selected={selected} displayUnit={displayUnit} />
            </div>
        </div>
    )
}

